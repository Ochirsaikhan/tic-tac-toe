import {useState, useEffect} from 'react';
import { Box } from './components/Box';

function App() {

  const [cells, setCells] = useState([[], [], []]);
  const [currentPlayer, setCurrentPlayer] = useState(true);

  const setPlayer = () => currentPlayer === true ? "X" : "O"; 
  

  const handleClick = (event) => {
    console.log(event.target.id);
    // if (event.target.id == "top-left") {
    //   setCells([[], [], []]);
    // }

   switch(event.target.id) {
    case "top-left":
      setCells((prevState) => {
        const newState = [...prevState];
        newState[0][0] = setPlayer();
        return newState;
      });
      setCurrentPlayer(!currentPlayer);
      break;
    case "top-middle":
      setCells((prevState) => {
        const newState = [...prevState];
        newState[0][1] = setPlayer();
        return newState;
      });
      setCurrentPlayer(!currentPlayer);
      break;

   }
  }

  return (
    <div className="container">
      <Box onClick={handleClick} cells={cells}/>
    </div>
  );
}

export default App;
