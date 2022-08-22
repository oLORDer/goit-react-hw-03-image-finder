import { Component } from 'react';
import { nanoid } from 'nanoid';

import Pixabay from 'components/pixabayApi';
import ImageGalleryItem from './ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

import s from './imageGallery.module.scss';

export default class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    page: 1,
    total: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevImg = prevProps.searchImages;
    const currentName = this.props.searchImages;

    if (prevImg !== currentName) {
      try {
        this.setState({ page: 1, loading: true });
        const responce = await Pixabay(page, currentName);
        this.setState({
          images: responce.data.hits,
          total: responce.data.total,
        });
      } catch (error) {
        this.setState({ error });
        console.log(error);
      } finally {
        setTimeout(() => {
          this.setState({ loading: false });
        }, 1000);
      }
    }

    if (this.state.page !== prevState.page && this.state.page !== 1) {
      try {
        this.setState({ loading: true });
        const responce = await Pixabay(page, currentName);
        this.setState({
          images: [...prevState.images, ...responce.data.hits],
        });
      } catch (error) {
        this.setState({ error });
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  loadMore = () => {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage });
  };

  modalOpen = ({ target }) => {
    console.log(target);
  };

  render() {
    const { images, loading, page, total } = this.state;

    return (
      <>
        {loading && <Loader />}
        {images && (
          <>
            <ul className={s.gallery} onClick={this.modalOpen}>
              {images.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                  key={nanoid()}
                  id={id}
                  url={webformatURL}
                  largeUrl={largeImageURL}
                />
              ))}
            </ul>
            {12 * page <= total && (
              <Button value={'Load more'} onBtnClick={this.loadMore} />
            )}
          </>
        )}
      </>
    );
  }
}
