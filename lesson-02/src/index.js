import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const element = 'Augusto César Ribeiro da Silva'
const element2 = <h1>Olá Mundo!</h1>

function App() {

    return (
        <div>
            {element}
            {element2}
        </div>
    )
}

const rootElement = document.getElementById("root")
//ReactDOM.render(element, rootElement)
ReactDOM.render(<App />, rootElement)