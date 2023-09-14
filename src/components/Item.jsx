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
    <>
      <h1 className='text-3xl'>{props.name}</h1>
      <h2 className='text-2xl'>{props.cost}</h2>
      <img className='' src={props.pic} alt={props.name} />
      <h3>{props.quantitiy}</h3>
      <p>{props.description}</p>
      <button
        onClick={() => handleClick(props.name, props.quantitiy)}
        className=''
      >
        Add to Cart
      </button>
    </>
  );
};

export default Item;
