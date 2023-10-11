const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]];

const whereIsWaldo = (matrix) => {
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
      if(matrix[i][j] !=='A')
          return [i+1,j+1]
    }
  }
  
}
