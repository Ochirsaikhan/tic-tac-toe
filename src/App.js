import {useState, useEffect} from 'react';
import { Box } from './components/Box';

function App() {

  const [cells, setCells] = useState([[], [], []]);

  const handleClick = (event) => {
    console.log(event.target.id);
    if (event.target.id == "top-left") {
      setCells([["X"], [], []]);
    }
  }

  return (
    <div className="container">
      <Box onClick={handleClick} cells={cells}/>
    </div>
  );
}

export default App;
