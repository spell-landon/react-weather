import React from 'react';
import styles from './Header.module.css'

function Header(props) {
    return (
        <nav>
            <h1>Weather App</h1>
            <form>
                <input className={styles.search} type="text" />
                <input className={styles.searchBtn} type="submit" value="Get" />
            </form>
        </nav>
    );
}

export default Header;