import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
    return (
        <button onClick={onClick} type="button" className={css.loadMoreBtn}>Load More</button>
    );
}