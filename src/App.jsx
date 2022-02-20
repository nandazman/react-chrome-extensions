import React, { Component } from "react";
import manifest from "../manifest.json";
import "../scss/index.scss";

class App extends Component {
  render() {
    console.log({ manifest })
    return (
      <div className="modal-extensions-shopee">
        <div>
          Hello, World ini ada progress {this.props.test || ""}
        </div>
      </div>
    );
  }
}

export default App;
