import React, { Component } from 'react';
import './App.css';
const moment = require('moment');

let today = moment(new Date()).format('LL').toString();

let date = moment.utc().format('YYYY-MM-DD HH:mm:ss');

// console.log(date); // 2015-09-13 03:39:27

let stillUtc = moment.utc(date).toDate();
let local = moment(stillUtc).local().format('YYYY-MM-DD hh:mm:ss A');

let year = moment(new Date()).format('YYYY');
let month = moment(new Date()).format('MMMM');
let currentDate = moment(new Date()).format('DD');
// const currentYear = today.getFullYear();
// const currentMonth = today.getMonth();

const getWeekday = () => {
  let wkd = moment().isoWeekday();
  let result;
  switch(wkd) {
    case 1:
      result = "Monday";
      return result;
    case 2:
      result = "Tuesday";
      return result;
    case 3:
      result = "Wednesday";
      return result;
    case 4:
      result = "Thursday";
      return result;
    case 5:
      result = "Friday";
      return result;
    case 6:
      result = "Saturday";
      return result;
    case 7:
      result = "Sunday";
      return result;
  }
}

const weekday = getWeekday();

class App extends Component {
  
  render() {
    console.log(today);
    return (
      <div className="App">
        <h3>Calendar</h3>
        <p>{today}</p>
        <p>{local}</p>
        <p>{year}</p>
        <p>{month}</p>
        <p>{weekday}</p>

        <p>{currentDate}</p>

        {/*<p>{currentMonth}</p>
    <p>{currentYear}</p>*/}
      </div>
    );
  }
}

export default App;
