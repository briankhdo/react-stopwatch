import React, { Component } from "react";
import "./Stopwatch.css";

import Timer from "./Timer";
import Controls from "./Controls";
import LapTimeList from "./LapTimeList";

function getDefaultState() {
  return {
    isRunning: false,
    time: 0,
    timeList: [],
  };
}

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = getDefaultState();
    this.timerRef = null;
  }

  updateTimer(extraTime) {
    const { time } = this.state;
    this.setState({ time: time + extraTime });
  }

  start() {
    this.setState(
      {
        isRunning: true,
      },
      () => {
        this.timerRef = setInterval(() => {
          this.updateTimer(100);
        }, 100);
      }
    );
  }

  stop() {
    this.setState(
      {
        isRunning: false,
      },
      () => {
        clearInterval(this.timerRef);
      }
    );
  }

  reset() {
    this.setState(getDefaultState());
  }

  addLapTime() {
    const { time, timeList } = this.state;

    this.setState({
      timeList: [...timeList, time],
    });
  }

  render() {
    const { isRunning, time, timeList } = this.state;

    return (
      <div className="Stopwatch">
        <h1>Simple Stopwatch App</h1>

        <Timer time={time} />

        <Controls
          isRunning={isRunning}
          start={() => this.start()}
          stop={() => this.stop()}
          reset={() => this.reset()}
          addLapTime={() => this.addLapTime()}
        />

        <LapTimeList timeList={timeList} />
      </div>
    );
  }
}

export default Stopwatch;
