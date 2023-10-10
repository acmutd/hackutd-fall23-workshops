import React from 'react';
import { useState } from 'react';

const Item = (props) => {
  const handleClick = (name, quantitiy) => {
    if (quantitiy > 0) {
      props.addToCart(name);
      props.setItems(
        props.items.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  return (
    <div className="">
      <img
        className=""
        src={props.pic}
        alt={props.name}
      />
      <div className="">
        <h1 className="">{props.name}</h1>

        <div className="">
          <h2 className="">${props.cost}</h2>
          <h2 className="">
            {props.quantitiy} left
          </h2>
        </div>

        <button
          onClick={() => handleClick(props.name, props.quantitiy)}
          className=""
        >
          add to cart
        </button>

        <br></br>
      </div>
    </div>
  );
};

export default Item;
