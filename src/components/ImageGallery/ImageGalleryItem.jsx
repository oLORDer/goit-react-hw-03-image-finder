import s from './imageGallery.module.scss';

export default function ImageGalleryItem({ id, url, largeUrl }) {
  return (
    <li className={s.item} data-largeimg={largeUrl}>
      <img src={url} alt="imagess" data-id={id} />
    </li>
  );
}
