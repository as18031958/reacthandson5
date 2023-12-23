import React from 'react'
import HighOrder from './HighOrder'
import './Style.css'
 const HoverComp = ({count,increment}) => {
  return (
    <div>
      <h1>Hover for Increases</h1>
        <h1>{count}</h1>
        <button onMouseOver={increment}>Hover</button>
    </div>
  )
}
export default HighOrder(HoverComp)
