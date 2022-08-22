import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './modal.module.scss';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.modalClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.modalClose);
  }

  onCloseOverlay = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    this.props.onModalFunc(false);
  };

  modalClose = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onModalFunc(false);
  };

  render() {
    const { src } = this.props;
    return (
      <div className={s.overlay} onClick={this.onCloseOverlay}>
        <div className={s.modal}>
          <img src={src} alt="smt" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string,
  onModalFunc: PropTypes.func,
};
