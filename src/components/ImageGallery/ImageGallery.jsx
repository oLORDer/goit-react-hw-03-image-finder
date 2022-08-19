import { Component } from 'react';

import Pixabay from 'components/pixabayApi';
import ImageGalleryItem from './ImageGalleryItem';
import Button from 'components/Button/Button';

import s from './imageGallery.module.scss';

export default class ImageGallery extends Component {
  state = {
    images: [],
    q: null,
    loading: false,
    page: 1,
  };

  async componentDidUpdate(prevRrops, prevState) {
    const { searchImages } = this.props;
    const { q, page } = this.state;

    // if (searchImages !== q) {
    //   this.setState({ page: 1 });
    // }

    console.log(q);
    // this.setState({ loading: true });

    if (searchImages !== q || page !== prevState.page) {
      try {
        const responce = await Pixabay(page, searchImages);
        this.setState({ images: responce.data.hits, q: searchImages });
      } catch (error) {
        console.log(error);
      } finally {
        // this.setState({ loading: false });
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
        <Button value={'Load more'} onBtnClick={this.loadMore} />
      </>
    );
  }
}
