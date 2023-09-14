import React from 'react';
import { useState, useEffect } from 'react';
import data from '../data/data.json';
import Item from './Item';
const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([[]]);

  const fetchData = () => {
    setItems(data);
  };

  const addToCart = (item) => {
    if (cart.map((cartItem) => cartItem[0]).includes(item)) {
      setCart(
        cart.map((cartItem) =>
          cartItem[0] === item ? [cartItem[0], cartItem[1] + 1] : cartItem
        )
      );
    } else {
      setCart([...cart, [item, 1]]);
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((item) => item !== item));
  };
  useEffect(() => fetchData(), []);
  return (
    <>
      <div>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            cost={item.cost}
            pic={item.image}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div>
        {cart.map((item) => (
          <div>
            <h1>{item[0]}</h1>
            <h2>Quantity: {item[1]}</h2>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
