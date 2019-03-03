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
        <p>Today is: {today}</p>
        <p>Local date time is: {local}</p>
        <p>Current year: {year}</p>
        <p>Current month: {month}</p>
        <p>Current weekday: {weekday}</p>

        <p>Current date: {currentDate}</p>

        <div className="grid-container">

          <div className="grid-item a-one">
          1
          </div>
          <div className="grid-item a-two">
          2
          </div>
          <div className="grid-item a-three">
          3
          </div>
          <div className="grid-item a-four">
          4
          </div>
          <div className="grid-item a-five">
          5
          </div>
          <div className="grid-item a-six">
          6
          </div>
          <div className="grid-item a-seven">
          7
          </div>

          <div className="grid-item b-one">
          8
          </div>
          <div className="grid-item b-two">
          9
          </div>
          <div className="grid-item b-three">
          10
          </div>
          <div className="grid-item b-four">
          11
          </div>
          <div className="grid-item b-five">
          12
          </div>
          <div className="grid-item b-six">
          13
          </div>
          <div className="grid-item b-seven">
          14
          </div>

        
        </div>
      </div>
    );
  }
}

export default App;
