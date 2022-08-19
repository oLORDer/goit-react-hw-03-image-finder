import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import Pixabay from './pixabayApi';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

import s from './app.module.css';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    q: 'red',
  };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const responce = await Pixabay(2, 'pirates');
      this.setState({ images: responce.data.hits });
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

  loadMore = e => {};

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
            <Button value={'Load more'} onBtnClick={this.loadMore} />
            <ToastContainer autoClose={2000} hideProgressBar={true} />
          </div>
        )}
      </div>
    );
  }
}
