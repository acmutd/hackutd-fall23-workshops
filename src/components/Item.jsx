import React from 'react';

const Item = (props) => {
  const handleClick = () => {
    console.log(props.name);
  };

  return (
    <>
      <h1 className='text-3xl'>{props.name}</h1>
      <h2 className='text-2xl'>{props.cost}</h2>
      <img className='' src={props.pic} alt={props.name} />
      <h3>{props.quantitiy}</h3>
      <p>{props.description}</p>
      <button onClick={handleClick}>Add to cart</button>
    </>
  );
};

export default Item;
