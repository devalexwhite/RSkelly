import React from "react"
import ReactDOM from 'react-dom'
import { RSkelly } from "../src/rskelly"

const Examples = () => {
  return <div>
    Examples.
    <RSkelly type={ `header, text, text, button@2` } />
  </div>
}

ReactDOM.render(<Examples />, document.querySelector('#root'))
