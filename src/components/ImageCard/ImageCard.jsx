import css from "./ImageCard.module.css";

export default function ImageCard({ 
    item: {
        urls: { small, regular },
        alt_description,
    }, 
    onImageClick 
}) {
    return (
        <div className={css.photoItem}>
            <img 
                src={small} 
                alt={alt_description} 
                onClick={() => onImageClick(regular)}
                className={css.photo}
            />
        </div>
    )
}