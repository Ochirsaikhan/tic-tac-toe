import {useState, useEffect} from 'react';
import { Box } from './components/Box';

function App() {

  const [cells, setCells] = useState([[], [], []]);
  const [currentPlayer, setCurrentPlayer] = useState(true);

  const setPlayer = () => currentPlayer === true ? "X" : "O"; 
  
  const checkWinner = () => {
    const cross1 = cells[0][0] + cells[1][1] + cells[2][2];
    const cross2 = cells[0][2] + cells[1][1] + cells[2][0];

    if (cross1 === "XXX") {
      console.log("X won in cross1!");
    } else if (cross1 === "OOO") {
      console.log("O won in cross1!");
    }

    if (cross2 === "XXX") {
      console.log("X won in cross2!");
    } else if (cross2 === "OOO") {
      console.log("O won in cross2!");
    }

    const row1 = cells[0][0] + cells[0][1] + cells[0][2];

    if (row1 === "XXX") {
      console.log("X won in row1!");
    } else if (row1 === "OOO") {
      console.log("O won in row1!");
    }

    const row2 = cells[1][0] + cells[1][1] + cells[1][2];

    if (row2 === "XXX") {
      console.log("X won in row2!");
    } else if (row2 === "OOO") {
      console.log("O won in row2!");
    }

    const row3 = cells[2][0] + cells[2][1] + cells[2][2];

    if (row3 === "XXX") {
      console.log("X won in row3!");
    } else if (row3 === "OOO") {
      console.log("O won in row3!");
    }

    const column1 = cells[0][0] + cells[1][0] + cells[2][0];

    if (column1 === "XXX") {
      console.log("X won in column1!");
    } else if (column1 === "OOO") {
      console.log("O won in column1!");
    }

    const column2 = cells[0][1] + cells[1][1] + cells[2][1];

    if (column2 === "XXX") {
      console.log("X won in column2!");
    } else if (column2 === "OOO") {
      console.log("O won in column2!");
    }

    const column3 = cells[0][2] + cells[1][2] + cells[2][2];

    if (column3 === "XXX") {
      console.log("X won in column3!");
    } else if (column3 === "OOO") {
      console.log("O won in column3!");
    }
  };

  useEffect(checkWinner, [cells]);

  const handleClick = (event) => {

    // Set the player to the correct cell based on the 
    // previous state while alternateing between X and O
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

      case "top-right":
        setCells((prevState) => {
          const newState = [...prevState];
          newState[0][2] = setPlayer();
          return newState;
        });
        setCurrentPlayer(!currentPlayer);
        break;

      case "middle-left":
        setCells((prevState) => {
          const newState = [...prevState];
          newState[1][0] = setPlayer();
          return newState;
        });
        setCurrentPlayer(!currentPlayer);
        break;

      case "middle-middle":
        setCells((prevState) => {
          const newState = [...prevState];
          newState[1][1] = setPlayer();
          return newState;
        });
        setCurrentPlayer(!currentPlayer);
        break;

      case "middle-right":
        setCells((prevState) => {
          const newState = [...prevState];
          newState[1][2] = setPlayer();
          return newState;
        });
        setCurrentPlayer(!currentPlayer);
        break;

      case "bottom-left":
        setCells((prevState) => {
          const newState = [...prevState];
          newState[2][0] = setPlayer();
          return newState;
        });
        setCurrentPlayer(!currentPlayer);
        break;

      case "bottom-middle":
        setCells((prevState) => {
          const newState = [...prevState];
          newState[2][1] = setPlayer();
          return newState;
        });
        setCurrentPlayer(!currentPlayer);
        break;

      case "bottom-right":
        setCells((prevState) => {
          const newState = [...prevState];
          newState[2][2] = setPlayer();
          return newState;
        });
        setCurrentPlayer(!currentPlayer);
        break;

      default:
        alert("Something is not right");
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
