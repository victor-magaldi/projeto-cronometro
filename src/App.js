import "./style.css";
import React, { Component } from "react";
import imgCronometro from "./assets/cronometro.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { numero: 0, btn: "Vai" };

    this.timer = null;

    this.vai = this.vai.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  vai(evt) {
    evt.preventDefault();

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ btn: "Vai" });
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;

        this.setState({ numero: state.numero, btn: "Parar" });
      }, 100);
    }
  }
  zerar(evt) {
    evt.preventDefault();

    clearInterval(this.timer);
    this.timer = null;
    this.setState({ numero: 0, btn: "Vai" });
  }
  render() {
    return (
      <div className="container">
        <img src={imgCronometro} alt="cronometro" className="img" />
        <span className="timer">{this.state.numero.toFixed(1)}</span>
        <div className="button-container">
          <a href="/#" className="btn btn-go" onClick={this.vai}>
            {this.state.btn}
          </a>

          <a href="/#" className="btn btn-reset" onClick={this.zerar}>
            Zerar
          </a>
        </div>
      </div>
    );
  }
}
