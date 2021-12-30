import React, { useState, useEffect } from 'react';
import styles from './Title.module.css';

function Title({ data, today }) {

  return (
    <div className={styles.title}>
      <h1 className={styles.today}>{today}</h1>
      <h2 className={styles.cityName}>{data.name}</h2>
      <p>
        The current temperature in {data.name} is{' '}
        <span>{data.main.temp}°F</span>
      </p>
      <p>
        It sure feels like <span>{data.main.feels_like}°F</span> though!
      </p>
    </div>
  );
}

export default Title;
