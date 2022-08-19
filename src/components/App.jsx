import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import Pixabay from './pixabay-api';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGallery/ImageGalleryItem';
import Button from './Button/Button';

import s from './app.module.css';
export class App extends Component {
  state = {
    images: [],
    loading: true,
    q: 'pirates',
  };

  async componentDidMount() {
    const galleryApi = new Pixabay();
    // this.setState({ loading: true });

    try {
      const responce = await galleryApi.fetchPhotosByQuery();
      this.setState({ images: responce.data.hits });
      console.log(responce.data.hits[1].webformatURL);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  hendleFormSubmit = q => {
    this.setState({ q: q });
    toast.success('hendleFormSubmit');
  };

  render() {
    const { loading, images } = this.state;

    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.hendleFormSubmit} />
        {loading ? (
          <div> loading...</div>
        ) : (
          <div>
            <ImageGallery images={images} />
            <Button value={'Load more'} />
            <ToastContainer autoClose={2000} hideProgressBar={true} />
          </div>
        )}
      </div>
    );
  }
}
