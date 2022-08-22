import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './imageGallery.module.scss';

export default class ImageGalleryItem extends Component {
  getDataValue = ({ target }) => {
    this.props.onClickFunc(target.dataset.largeimg);
  };

  render() {
    const { id, url, largeUrl } = this.props;
    return (
      <li className={s.item}>
        <img
          src={url}
          alt="imagess"
          data-id={id}
          data-largeimg={largeUrl}
          onClick={this.getDataValue}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  largeUrl: PropTypes.string,
  url: PropTypes.string,
  onClickFunc: PropTypes.func,
};
