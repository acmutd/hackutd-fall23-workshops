import { useState } from 'react';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = ()=>setCounter(counter=>counter+1)

  return (
    <div className="w-full">
      <Navbar counter={counter} />
      <Dashboard setCounter={increment}/>
    </div>
  );
};

export default App;
