import React from 'react';
import styles from './Card.module.css'

function Card(props) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}></div>
        </div>
    );
}

export default Card;