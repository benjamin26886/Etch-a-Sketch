grid = document.querySelector('.container'); // connect grid var in js to div in html
createGrid();
changeBackground();

// The  function below creates squares to be appended to the container 
function createGrid(){
    for(let i = 0; i < 256; i++){ //logic error en
        const square = document.createElement('div');
        grid.appendChild(square);
        square.classList.add('square');
    }
}
function changeBackground(){
    const squares = document.querySelectorAll('div.square'); // Select all divs with the class name of square
    squares.forEach(function(square){ // 
        square.addEventListener("mouseover", function(event){
            event.target.classList.replace("square","color");
        });
    });
}



