import {useState, useEffect} from 'react';
import swal from 'sweetalert';
import { Box } from './components/Box';
import { NewGame } from './components/NewGame';
import { Score } from './components/Score';

function App() {

  const [cells, setCells] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [winner, setWinner] = useState({"X" : 0, "O": 0});

  const setPlayer = () => currentPlayer === true ? "X" : "O"; 
  
  const checkWinner = () => {
    
    const cross1 = cells[0][0] + cells[1][1] + cells[2][2];
    const cross2 = cells[0][2] + cells[1][1] + cells[2][0];

    if (cross1 === "XXX") { 
      setWinner((prev) => {
        const previous = {...prev};
        previous.X +=1;
        return previous;
      });
      swal("X won 🎉", "O sucks at this game 💀", "success");
    } else if (cross1 === "OOO") {
      swal("O won 🎉", "X sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.O +=1;
        return previous;
      });
    }

    if (cross2 === "XXX") {
      swal("X won 🎉", "O sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.X +=1;
        return previous;
      });
    } else if (cross2 === "OOO") {
      swal("O won 🎉", "X sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.O +=1;
        return previous;
      });
    }

    const row1 = cells[0][0] + cells[0][1] + cells[0][2];

    if (row1 === "XXX") {
      swal("X won 🎉", "O sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.X +=1;
        return previous;
      });
    } else if (row1 === "OOO") {
      swal("O won 🎉", "X sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.O +=1;
        return previous;
      });
    }

    const row2 = cells[1][0] + cells[1][1] + cells[1][2];

    if (row2 === "XXX") {
      swal("X won 🎉", "O sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.X +=1;
        return previous;
      });
    } else if (row2 === "OOO") {
      swal("O won 🎉", "X sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.O +=1;
        return previous;
      });
    }

    const row3 = cells[2][0] + cells[2][1] + cells[2][2];

    if (row3 === "XXX") {
      swal("X won 🎉", "O sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.X +=1;
        return previous;
      });
    } else if (row3 === "OOO") {
      swal("O won 🎉", "X sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.O +=1;
        return previous;
      });
    }

    const column1 = cells[0][0] + cells[1][0] + cells[2][0];

    if (column1 === "XXX") {
      swal("X won 🎉", "O sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.X +=1;
        return previous;
      });
    } else if (column1 === "OOO") {
      swal("O won 🎉", "X sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.O +=1;
        return previous;
      });
    }

    const column2 = cells[0][1] + cells[1][1] + cells[2][1];

    if (column2 === "XXX") {
      swal("X won 🎉", "O sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.X +=1;
        return previous;
      });
    } else if (column2 === "OOO") {
      swal("O won 🎉", "X sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.O +=1;
        return previous;
      });
    }

    const column3 = cells[0][2] + cells[1][2] + cells[2][2];

    if (column3 === "XXX") {
      swal("X won 🎉", "O sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.X +=1;
        return previous;
      });
    } else if (column3 === "OOO") {
      swal("O won 🎉", "X sucks at this game 💀", "success");
      setWinner((prev) => {
        const previous = {...prev};
        previous.O +=1;
        return previous;
      });
    }

    let summation = "";

    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[i].length; j++) {
        summation += cells[i][j];
      }
    }

    if (summation.length === 9) {
      swal("🪢", "You guys are TIED", "info");
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

  const restartGame = (e) => {
    e.preventDefault();
    setCells([["", "", ""], ["", "", ""], ["", "", ""]]);
  };

  return (
    <div className="container">
      <Box onClick={handleClick} cells={cells}/>
      <NewGame onClick={restartGame}/>
      <Score winner={winner} />
    </div>
  );
}

export default App;
