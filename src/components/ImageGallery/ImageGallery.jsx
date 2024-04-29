import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, onImageClick }) {
    return (
        <ul className={css.photoList}>
            {items.map((item) => (
                <li key={item.id} className={css.photoListItem}>
                    <ImageCard onImageClick={onImageClick} item={item} />
                </li>
            ))}
        </ul>
    )
}