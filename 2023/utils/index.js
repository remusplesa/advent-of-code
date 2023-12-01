import fs from 'fs';

export function readTxt(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return (data.toString());
  } catch (e) {
    console.error('Error:', e.stack);
  }
}