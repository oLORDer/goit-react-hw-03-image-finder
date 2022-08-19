import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import Pixabay from './pixabayApi';
import ImageGallery from './ImageGallery/ImageGallery';

import s from './app.module.css';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    q: null,
  };

  hendleFormSubmit = q => {
    if (this.state.q === q) {
      toast.warning('choose deferent');
      return;
    }
    this.setState({ q: q });
    toast.success('hendleFormSubmit');
  };

  render() {
    const { loading, q } = this.state;

    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.hendleFormSubmit} />
        <main>
          <ImageGallery searchImages={q} />
          <ToastContainer autoClose={2000} hideProgressBar={true} />
        </main>
      </div>
    );
  }
}
