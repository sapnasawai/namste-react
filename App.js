import React from "react"
import  ReactDOM  from "react-dom/client"

//React.createElement => object => HTMLElement(after render)

const heading = React.createElement('h1',{id:"heading"}, 'Namste React')

// JSX => HTML or XML like syntax

const jsxHeading = <h1 id="heading">Namste React using JSX</h1>

// both are react element: jsxHeading react elem using jsx

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)
