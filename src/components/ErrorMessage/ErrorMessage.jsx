import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
    return (
        <div className={css.errorMsg}>
            <p>Oops! Something went wrong! </p>
        </div>
      );
}