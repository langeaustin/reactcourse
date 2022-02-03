import React from "react"
import logo from "../logo.svg";
import '../App.css';

export default function Main() {
    return (
        <nav>
            <header>
            <img src={logo} className="App-logo" alt="logo" height="10px" />
            </header>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )

}