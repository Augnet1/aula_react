import React, { Component } from "react"
import ReactDOM from "react-dom"
import Button from './Button.jsx'
import ComponenteA from './ComponenteA'
import ComponenteB from './ComponenteB'
import "./styles.css"

function soma(a, b) {
    alert(a + b)
}


function App() {
    return (
        <div className="App">
            Hello World!!!
            <Button onClick={() => soma(10,20)} name="Augusto César" />
            <ComponenteA>
                <ComponenteB>
                    <Button onClick={() => soma(40,20)} name="Júlio Tavares" />
                </ComponenteB>
            </ComponenteA>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)