import React from 'react';
import styles from './Main.module.css';
import Title from './Title/Title';
import Card from './Card/Card';

function Main({ data }) {
  // Date
  var objToday = new Date(),
    domEnder = (function () {
      var a = objToday;
      if (/1/.test(parseInt((a + '').charAt(0)))) return 'th';
      a = parseInt((a + '').charAt(1));
      return 1 == a ? 'st' : 2 == a ? 'nd' : 3 == a ? 'rd' : 'th';
    })(),
    dayOfMonth =
      today + (objToday.getDate() < 10)
        ? '0' + objToday.getDate() + domEnder
        : objToday.getDate() + domEnder,
    months = new Array(
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear();
  var today = curMonth + ' ' + dayOfMonth + ', ' + curYear;

  if (data.message === 'Nothing to geocode') {
    return (
      <div className={styles.preload}>
        <p>Start searching for weather now</p>
      </div>
    );
  }

  return (
    <div>
      <Title data={data} today={today} />
      <Card/>
    </div>
  );
}

export default Main;
