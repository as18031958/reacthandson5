
import React,{PureComponent} from 'react'
import './Style.css'
export default class PureComp extends PureComponent {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    render(){
        console.log("component is called")
    
  return (
    <div>
        <h1>For Pure Component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Click</button>
    </div>
  )
}
}