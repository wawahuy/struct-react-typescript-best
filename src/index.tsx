import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"

import logo from "./assets/images/a.png"
import tff from "./assets/fonts/a.ttf"

function App() {
  return (
    <div>
      <img src={logo}></img>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("yuhRoot"))
