import React from "react";  
import Title from "./Header/Title";
import Forgot from "./Header/Forgot";

export default class Header extends React.Component { 
  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <Forgot /> 
      </div>

    );
  }
}
