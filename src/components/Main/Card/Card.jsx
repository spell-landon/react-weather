import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';

function Card({ data }) {
  // getIcon(icon);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>

        <div className={styles.temp}>
          <h1>Temperature:</h1>
          <p>{data.main.temp}°F</p>
        </div>
  
        <div className={styles.temp}>
          <h1>Temp High:</h1>
          <p>{data.main.temp_max}°F</p>
        </div>

        <div className={styles.temp}>
          <h1>Temp Low:</h1>
          <p>{data.main.temp_min}°F</p>
        </div>

        <div className={styles.conditions}>
          <h2>Conditions:</h2>
          <p>{data.weather['0'].main}</p>
        </div>

        <div className={styles.wind}>
          <h3>Wind speed:</h3>
          <p>{data.wind.speed} MPH</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
