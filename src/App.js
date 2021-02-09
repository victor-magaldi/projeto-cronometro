import "./style.css";
import React, { Component } from "react";
import imgCronometro from "./assets/cronometro.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { numero: 0 };
  }
  render() {
    return (
      <div className="container">
        <img src={imgCronometro} alt="cronometro" className="img" />
        <span className="timer">0:00</span>
        <div className="button-container">
          <a href="/vai" className="btn btn-go">
            Vai
          </a>
          <a href="/zerar" className="btn btn-reset">
            Zerar
          </a>
        </div>
      </div>
    );
  }
}
