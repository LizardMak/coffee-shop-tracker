import React from "react";

export default function BuyForm() {
  function handleNewIceCreamSubmit(event) {
    event.preventDefault();
    let newFlavor = [];
    newFlavor.flavor = event.target.name.value;
    newFlavor.amount = 130;
  }


  return(
    <React.Fragment>
      <form onSubmit={handleNewIceCreamSubmit}>
        <input
          type="radio"
          value="chocolate"
          name="flavor" /> Chocolate
        <input 
          type="radio"
          value="vanilla"
          name="flavor" /> Vanilla
        <input 
          type="radio"
          value="strawberry"
          name="flavor" /> Strawberry
        <button type='submit'>Place Order</button>
      </form>
    </React.Fragment>
  );
}

