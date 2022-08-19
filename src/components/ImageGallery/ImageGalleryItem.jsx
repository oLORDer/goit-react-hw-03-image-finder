import s from './imageGallery.module.scss';

export default function ImageGalleryItem({ id, url, largeUrl }) {
  return (
    <li className={s.item} data-id={id} data-largeimg={largeUrl}>
      <img src={url} alt="imagess" />
    </li>
  );
}
