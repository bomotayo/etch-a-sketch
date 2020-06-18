
// let grid = prompt("Enter number for nxn grid of squares");
let grid = 16;
let updGrid;
let div;
let clrBtn = document.getElementById('clr-btn');
let gridBtn = document.getElementById('grid-btn');
let container = document.querySelector('.container');  
container.style.gridTemplateColumns = `repeat(${grid}, auto)`;

createGrid(grid);
mouseOver();
clearBtn();

  //Creating the gird items
function createGrid(num){
  for(let i = 1; i <= num**2; i++){
    div = document.createElement('div'); 
    div.setAttribute('class',`grid-item`);
    container.appendChild(div);
  }
}

// remove old divs function
function removeDivs() {
  document.querySelectorAll('.grid-item').forEach(item => {
    container.removeChild(item);
  })
}


// Assigning the mouse over event listener to each grid
function mouseOver(){
  document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    })
  });
}


//Clear button
function clearBtn(){
  document.querySelectorAll('.grid-item').forEach(item => {
    clrBtn.addEventListener('click', () => {
      item.style.backgroundColor = "white";
    })
  });
}



//Grid button
gridBtn.addEventListener('click', () => {
  updGrid = prompt("Enter number for nxn grid of squares");
  removeDivs();
  if(updGrid > 0){
    createGrid(updGrid);
    container.style.gridTemplateColumns = `repeat(${updGrid}, auto)`;
    mouseOver();
    clearBtn();
  }
  else{
    alert('Enter number greater than 0!');
    location.reload();
  }

})