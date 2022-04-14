import { PropTypes } from "prop-types";

import React, { Component } from "react";
import "./Controls.css";

class Controls extends Component {
  static proptTypes = {
    isRunning: PropTypes.bool,
    start: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
    resume: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    addLapTime: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired,
  };

  static defaultProps = {
    isRunning: false,
  };

  render() {
    const { isRunning, start, pause, reset, addLapTime, time } = this.props;

    return (
      <div className="Controls">
        {!isRunning ? (
          <>
            <button onClick={start} className="Controls__button" ref="startBtn">
              {" "}
              {time === 0 ? "Start" : "Resume"}{" "}
            </button>
            <button
              onClick={reset}
              disabled={isRunning}
              className="Controls__button"
              ref="resetBtn"
            >
              {" "}
              Reset{" "}
            </button>
          </>
        ) : null}

        {isRunning ? (
          <>
            <button onClick={pause} className="Controls__button" ref="stopBtn">
              {" "}
              Pause{" "}
            </button>
            <button
              onClick={addLapTime}
              disabled={!isRunning}
              className="Controls__button"
              ref="lapBtn"
            >
              {" "}
              Lap Time{" "}
            </button>
          </>
        ) : null}
      </div>
    );
  }
}

export default Controls;
