import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
  
        this.state = {
          count: 0,
        }
        console.log("UserClass Component Constructor");
    }
    componentDidMount(){
        console.log("UserClass Component Mounted");
    }
    componentWillUnmount(){
        console.log("UserClass Component Unmounted");
    }
    render(){
        console.log("UserClass Component Render");
        const {name, location, role} = this.props;
        return(
            <>
            <h1>Count: {this.state.count}</h1>
            <button onClick={() => {
                this.setState({count: this.state.count+1})
            }}>Increase Count</button>
            <h2>Class Component</h2>
            <h2>Name: {name}</h2>
            <h4>Location: {location}</h4>
            <h4>Role: {role}</h4>
            </>
        ) 
    }
}

export default UserClass;