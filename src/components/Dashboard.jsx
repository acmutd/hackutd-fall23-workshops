import React from 'react';
import { useState, useEffect } from 'react';
import data from '../data/data.json';
import Item from './Item';

const Dashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => setItems(data), []);

  return (
    <>
      <div>
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            cost={item.cost}
            pic={item.image}
            description={item.description}
            quantitiy={item.quantity}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
