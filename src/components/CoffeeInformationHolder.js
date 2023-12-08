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
render(){
  let currentlyVisibleState = null;
  if (this.state.formVisibleOnPage == false) {
    currentlyVisibleState = <CoffeeBeanMenu/>
  } else {
    currentlyVisibleState = <BuyForm/>
  }
  return(
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
    
  )
}
}

