import ImageGalleryItem from './ImageGalleryItem';
import s from './imageGallery.module.scss';

export default function ImageGallery({ images }) {
  return (
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
  );
}
