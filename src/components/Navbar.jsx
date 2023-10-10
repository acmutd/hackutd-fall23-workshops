import React from 'react';

const Navbar = (props) => {
  return (
    <>
      <div className='relative'>
        <div className=''>My Shopping Website</div>
        <div className=''>
        <h1>Cart: {props.counter}</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
