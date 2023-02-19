import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello const"
      }
      this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message: "Here We Go!"
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Bind with Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Bind with Click</button> */}
        <button onClick={this.clickHandler}>Bind With Click</button>
      </div>
    )
  }
}

export default EventBind