import React, { Component } from "react";
import "./Stopwatch.css";

import Timer from "./Timer";
import Controls from "./Controls";
import LapTimeList from "./LapTimeList";

function getDefaultState() {
  return {
    isRunning: false,
    startTime: 0,
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

  updateTimer() {
    const { startTime, isRunning } = this.state;
    if (isRunning) this.setState({ time: Date.now() - startTime });
  }

  start() {
    const { time } = this.state;
    this.setState({
      isRunning: true,
      startTime: Date.now() - time,
    });
  }

  pause() {
    this.setState({
      isRunning: false,
      startTime: Date.now(),
    });
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
          pause={() => this.pause()}
          reset={() => this.reset()}
          addLapTime={() => this.addLapTime()}
          time={time}
        />

        <LapTimeList timeList={timeList} />
      </div>
    );
  }
}

export default Stopwatch;
