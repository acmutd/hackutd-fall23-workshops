import React from 'react';
import { useState } from 'react';
import data from '../data/data.json';
import Item from './Item';

const Dashboard = (props) => {
  const [items, setItems] = useState(data);

  return (
    <div className="">
      <div className="">
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            cost={item.cost}
            pic={item.image}
            quantitiy={item.quantity}
            addToCart={props.setCounter}
            items={items}
            setItems={setItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
