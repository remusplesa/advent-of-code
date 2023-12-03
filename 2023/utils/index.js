import fs from 'fs';

export function readTxt(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return (data.toString());
  } catch (e) {
    console.error('Error:', e.stack);
  }
}

export function matrixPrettyPrint(matrix){ 
  for (let i = 0; i < matrix.length; i++){
    const row = matrix[i].reduce((acc, item) => {
      return acc + " " + item
    }, "")

    console.log(`${row}\n`)
  }
}