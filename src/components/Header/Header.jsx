import React from 'react';
import styles from './Header.module.css';

function Header({ handleChange, handleSubmit, searchString }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.h1}>Weather App</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            id='search-text'
            className={styles.search}
            type='text'
            placeholder='Search City'
            onChange={handleChange}
            value={searchString}
          />
          <input className={styles.searchBtn} type='submit' value='Search' />
        </form>
      </nav>
    </header>
  );
}

export default Header;
