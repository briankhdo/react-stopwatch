import React, { Component } from "react";

import "./App.css";
import { Stopwatch } from "./stopwatch";

class App extends Component {
  constructor(props) {
    super(props);

    this.stopwatch = React.createRef();
    this.animationID = null;
  }

  componentDidMount() {
    this.animationID = window.requestAnimationFrame(() => this.update());
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationID);
  }

  update() {
    this.stopwatch.current.updateTimer();
    this.animationID = window.requestAnimationFrame(() => this.update());
  }

  render() {
    return (
      <div className="App">
        <Stopwatch ref={this.stopwatch} />
      </div>
    );
  }
}

export default App;
