import React, {Component} from "react";

export default function IceCreamMenu(props) {
  return(
    <React.Fragment>
      <hr></hr>
      {props.iceCreamMenu.map((flavor, index) => 
      <iceCream name={flavor.name}
      amount={flavor.amount}
      key={index}
      />
      )}
    </React.Fragment>
  )
}

