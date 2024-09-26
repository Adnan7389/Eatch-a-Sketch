// 
function populateBoard(gridSize) {
  const container = document.querySelector('#container');
  container.innerHTML = '';

  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  let amount = gridSize * gridSize;

  for (let i = 0; i < amount; i++) {
    const cell = document.createElement('div');
    cell.style.backgroundColor = "blue";

    cell.addEventListener('mouseover', () => {
      const randomColor = getRandomColor();
      cell.style.backgroundColor = randomColor;
    });
    container.appendChild(cell);
  }

}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

populateBoard(16);

const gridButton = document.querySelector('#gridButton');

gridButton.addEventListener('click', () => {
  let size = prompt('Enter the number of squares per side (maximum 100)');

  if (size !== null && !isNaN(size)) {
    size = Math.min(Math.max(parseInt(size), 1), 100);
    populateBoard(size)
  }
  else {
    alert('Please enter a valid number');
  }
})