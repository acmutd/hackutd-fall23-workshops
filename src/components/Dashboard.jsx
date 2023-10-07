import React from 'react';
import { useState } from 'react';
import data from '../data/data.json';
import Item from './Item';

const Dashboard = () => {
  const [items, setItems] = useState(data);
  const [cart, setCart] = useState([]);

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
    if (cart.map((cartItem) => cartItem[0]).includes(item)) {
      setCart(cart.filter((cartItem) => cartItem[0] !== item));
    }
  };

  const handleRemove = (itemName, itemAdd) => {
    removeFromCart(itemName);
    setItems(
      items.map((item) =>
        item.name === itemName
          ? { ...item, quantity: item.quantity + itemAdd }
          : item
      )
    );
  };

  return (
    <div className="bg-secondary">
      <div className="flex flex-wrap p-12 gap-12 grid sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            cost={item.cost}
            pic={item.image}
            quantitiy={item.quantity}
            addToCart={addToCart}
            items={items}
            setItems={setItems}
          />
        ))}
      </div>
      <div>
        <h1>Cart</h1>
        {cart.map((item) => (
          <div>
            <h1>{item[0]}</h1>
            <h2>Quantity: {item[1]}</h2>
            <button onClick={() => handleRemove(item[0], item[1])}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
