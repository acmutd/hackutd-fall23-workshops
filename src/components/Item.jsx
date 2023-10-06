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
    <div className="relative bg-white border h-fit w-2/5 justify-center overflow-hidden rounded-lg">
      
      <img className='shrink-0  w-full h-[200px] object-cover object-top relative' src={props.pic} alt={props.name} />
      <div className="p-6">
      <h1 className='text-lg font-bold'>{props.name}</h1>

      <div className='flex  justify-between'>
      <h2 className='text-sm font-semibold'>${props.cost}</h2>
      <h2 className='text-sm text-right font-light py-2'>{props.quantitiy} left</h2>
      </div>
      

      <button
        onClick={() => handleClick(props.name, props.quantitiy)}
        className='bg-lime-200 w-1/6 h-2/5 font-bold rounded-md block float-right'
      >
         BUY
      </button>
        
        <br></br>
      </div>
    </div>
  );
};

export default Item;
