import React, { Component } from 'react'

class ClassClick extends Component {
  render() {
    function clickHandler(){ 
        console.log("Button has been clicked")
    }
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick