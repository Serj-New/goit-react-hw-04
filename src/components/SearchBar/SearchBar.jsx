import { Field, Form, Formik } from "formik";
import { TbPhotoSearch } from "react-icons/tb";
import toast, { Toaster } from 'react-hot-toast';

import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
    const notify = () => toast.error('Enter a tag to search!');
    
    const handleSearch = (values, actions ) => {
        if (values.query.trim() === "") {
            notify();
            return;
        }

        onSearch(values.query);
        actions.resetForm();
    };

    const handleIconClick = (formProps) => {
        handleSearch(formProps.values, formProps);
    };

    const handleKeyPress = (event, formProps) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch(formProps.values, formProps);
        }
    };

    return (
        <Formik 
            onSubmit={handleSearch}
            initialValues={{ query: "" }}
        >
            {(formProps) => (
                <header className={css.searchBar}>
                    <Form className={css.searchForm}>
                        <div className={css.searchInputGroup}>
                            <TbPhotoSearch 
                                className={css.searchIcon}
                                size={25}
                                color={"#ff0000"}
                                onClick={() => handleIconClick(formProps)}
                            />
                            <Field
                                type="text"
                                name="query"
                                autoComplete="off"
                                autoFocus
                                placeholder="Search images and photos"
                                onKeyPress={(event) => handleKeyPress(event, formProps)}
                                className={css.searchInput}
                            />
                        </div>
                        <Toaster
                            position="top-center"
                            toastOptions={{
                                style: {
                                marginTop: '70px',
                                }
                            }}
                        />
                    </Form>
                </header>
            )}
        </Formik>
    );
}