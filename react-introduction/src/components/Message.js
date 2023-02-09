import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
                message:'Welcome Miles , do you want to become Flash ?',    
        }
    }
    changeMessage(){
        this.setState ( {
            message: "Welcome to the system Flash"
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Yes</button>
            </div>
        )

    }
}

export default Message