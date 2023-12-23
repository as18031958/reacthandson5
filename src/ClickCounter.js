import React from 'react'
import HighOrder from './HighOrder'
import './Style.css'

const ClickCounter = ({count,increment}) => {
  return (
    <div>
      <h1>Click for Increases</h1>
    <h1>{count}</h1>
    <button onClick={increment}>Click</button>
    </div>
  )
}
export default HighOrder(ClickCounter);
