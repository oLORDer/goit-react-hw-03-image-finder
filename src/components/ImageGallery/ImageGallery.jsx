import { Component } from 'react';

import Pixabay from 'components/pixabayApi';
import ImageGalleryItem from './ImageGalleryItem';
import Button from 'components/Button/Button';

import s from './imageGallery.module.scss';

export default class ImageGallery extends Component {
  state = {
    images: [],
    q: null,
    loading: true,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevImg = prevProps.searchImages;
    const currentName = this.props.searchImages;
    console.log(prevState);
    if (prevImg !== currentName) {
      try {
        this.setState({ page: 1 });
        const responce = await Pixabay(page, currentName);
        this.setState({ images: responce.data.hits });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  loadMore = e => {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage });
  };

  render() {
    const { images, loading } = this.state;
    return (
      <>
        <ul className={s.gallery}>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              url={webformatURL}
              largeUrl={largeImageURL}
            />
          ))}
        </ul>
        {loading ? (
          <div>loading...</div>
        ) : (
          <Button value={'Load more'} onBtnClick={this.loadMore} />
        )}
      </>
    );
  }
}
