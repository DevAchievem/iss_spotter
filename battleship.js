const	b = [[null,0,0,1],[0,null,null,null],[0,null,null,null],[1,null,null,null]];

const print = (b) => {

  for (let row of b) {
    let l = "";
    for (let column of row) {
      if (column === 0) {
        l += "O";
      }
      if (column === 1) {
        l += "X";
      }
      if (column === null) {
        l += " ";
      }
      l += "|";
    }
    console.log(l);
  }
};
print(b);

// | |O|O|X|
// |O| | | |
// |O| | | |
// |X| | | |