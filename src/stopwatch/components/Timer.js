import PropTypes from "prop-types";

import React, { Component } from "react";
import "./Timer.css";

import timeFormat from "../utils/timeFormat";

class Timer extends Component {
  static proptTypes = {
    time: PropTypes.number,
  };

  static defaultProps = {
    time: 0,
  };

  render() {
    const { time } = this.props;

    return <div className="Timer">{timeFormat(time)}</div>;
  }
}

export default Timer;
