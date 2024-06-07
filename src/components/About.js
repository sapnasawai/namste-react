import {Component} from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props){
    super(props)
    console.log("About Component Constructor");
  }
  componentDidMount() {
    console.log("About Component Mounted");
  }
  componentWillUnmount(){
    console.log("About Component Unmounted");
  }

  render() {
    console.log("About Component Render");
    return (
      <>
        <h1>About</h1>;
        <UserClass name="sapna" location="Amravati" role="Software Developer" />
      </>
    );
  }
}
export default About;
