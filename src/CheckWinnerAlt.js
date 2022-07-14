const checkWinnerAlt = () => {

    for (let i = 0; i < cells.length; i++) {
    
      const row = cells[i].reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
      });
  
      if (row === "XXX") {
        console.log("X won in row!");
      } else if (row === "OOO") {
        console.log("O won in row!");
      }
  
      let column = "";
      for (let j = 0; j < cells[i].length; j++) {
         column += cells[j][i];
      }
  
      if (column === "XXX") {
        console.log("X won in column!");
      } else if (column === "OOO") {
        console.log("O won in column!");
      }
    }

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
};