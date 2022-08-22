import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import s from './searchbar.module.scss';

export default class Searchbar extends Component {
  state = {
    q: '',
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;

    if (this.state.q.trim() === '') {
      toast.warn('uncorrect value', { theme: 'dark' });
      return;
    }

    onSubmit(this.state.q);
    this.setState({ q: '' });
  };

  handleNameChange = e => {
    this.setState({ q: e.target.value });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.onFormSubmit}>
          <button type="submit" className={s.btn}>
            <span className={s.label}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.q}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
