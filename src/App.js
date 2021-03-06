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
let monthNum = moment(new Date()).format('MM');
let currentDate = moment(new Date()).format('DD');
// const currentYear = today.getFullYear();
// const currentMonth = today.getMonth();

let firstDay = moment(`${year}-${monthNum}-01`);
let dayOfWeekFirstDate = firstDay.day();

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

let dateInCalendar = "1"

class App extends Component {
  constructor(props) {
    super(props);
    this.firstDayRef = React.createRef();
  }
  render() {
    const { firstDayRef } = this;
    return (
      <div className="App">
        <h3>Calendar</h3>
        <p>Today is: {today}</p>
        <p>Local date time is: {local}</p>
        <p>Current year: {year}</p>
        <p>Current month: {month}</p>
        <p>Current month number: {monthNum}</p>
        <p>Current weekday: {weekday}</p>

        <p>Current date: {currentDate}</p>
        <p>Day of week first day: {dayOfWeekFirstDate}</p>

        <div className="grid-container">

          <div className="grid-item a-one" ref={firstDayRef}>
            {dateInCalendar}
          </div>
          <div className="grid-item a-two">
            {dateInCalendar}
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

          <div className="grid-item c-one">
          15
          </div>
          <div className="grid-item c-two">
          16
          </div>
          <div className="grid-item c-three">
          17
          </div>
          <div className="grid-item c-four">
          18
          </div>
          <div className="grid-item c-five">
          19
          </div>
          <div className="grid-item c-six">
          20
          </div>
          <div className="grid-item c-seven">
          21
          </div>

          <div className="grid-item d-one">
          22
          </div>
          <div className="grid-item d-two">
          23
          </div>
          <div className="grid-item d-three">
          24
          </div>
          <div className="grid-item d-four">
          25
          </div>
          <div className="grid-item d-five">
          26
          </div>
          <div className="grid-item d-six">
          27
          </div>
          <div className="grid-item d-seven">
          28
          </div>

          <div className="grid-item e-one">
          29
          </div>
          <div className="grid-item e-two">
          30
          </div>
          <div className="grid-item e-three">
          31
          </div>
          <div className="grid-item e-four">
          32
          </div>
          <div className="grid-item e-five">
          33
          </div>
          <div className="grid-item e-six">
          34
          </div>
          <div className="grid-item e-seven">
          35
          </div>

        
        </div>
      </div>
    );
  }
}

export default App;
