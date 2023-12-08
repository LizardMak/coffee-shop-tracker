import React, {Component} from "react";
import CoffeeBeanMenu from "./coffeeBeanMenu";
import BuyForm from "./buyForm";

export default class CoffeeInformationHolder extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false,
  }
};

handleClick = () => {
  this.setState(prevState => ({
    formVisibleOnPage: !prevState.formVisibleOnPage
  })); 
}

render(){
  let currentlyVisibleState = null;
  let buttonText = null;
  if (this.state.formVisibleOnPage == false) {
    currentlyVisibleState = <CoffeeBeanMenu/>
    buttonText = "Switch to Restock Mode"
  } else {
    currentlyVisibleState = <BuyForm/>
    buttonText = "Switch to Sell Mode"
  }
  return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    
  )
}
}

