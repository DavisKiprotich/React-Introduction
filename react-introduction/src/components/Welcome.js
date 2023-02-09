import React, { Component } from "react";

class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name} ,becoming {this.props.heroName} is Fun</h1>
    }
}

export default Welcome
