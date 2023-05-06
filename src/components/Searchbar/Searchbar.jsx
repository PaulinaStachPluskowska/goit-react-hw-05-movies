import React from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

const Searchbar = (props) => {
	const handleSubmit = event => {
		event.preventDefault();
		const searchInput = event.target.query.value;
		props.onSubmit(searchInput);
	};

	return (
		<form className={css.Form} onSubmit={handleSubmit}>
			<input className={css.Input}
                type="text" name="query" 
                autoComplete="off"
                autoFocus
                placeholder="Search movies" 
            />
			<button type="submit" className={css.Button}>
                <span>Search</span>
            </button>
		</form>
	);
};

Searchbar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;