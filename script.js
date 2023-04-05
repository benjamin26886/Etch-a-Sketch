grid = document.querySelector('.container'); // connect grid var in js to div in html
inputData = ""; //This varibale will be used to control the size of the grid
createGrid();
changeBackground();

//let number_of_cells = getUserInput(); // This determines the number of

// The function below creates squares to be appended to the container (defualt)
function createGrid(){
    for(let i = 0; i < 256; i++){ //logic error en
        const square = document.createElement('div');
        grid.appendChild(square);
        square.classList.add('square');
        changeBackground(square);
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

//This function determines the number of cells used in the grid;
function upDateGrid(){
    let number_of_cells = getUserInput();
    const upDatedContainer = document.querySelector('div.container');
    upDatedContainer.innerHTML = ""; // this clears the container

    for(let i = 0; i < number_of_cells * number_of_cells; i++){ //logic error 
        const squares = document.createElement('div');
        upDatedContainer.appendChild(squares);
        squares.classList.add('square'); // after the default class is added to the newly added squares
      /*  changeBackground(); */ // add the changeBackground class so that when the newly added squares are in the container the can change the background color
    }
    upDatedContainer.style.gridTemplateRows = `repeat(${number_of_cells},2fr)`; // Replace the defualt value of the rows with user value
    upDatedContainer.style.gridTemplateColumns = `repeat(${number_of_cells},2fr)`; // Replace the default value of the columns with the user value 
    changeBackground(); //Moving the 
    
}



//Gets the users Input
function getUserInput(){
    const userInput1 = inputData;
    return userInput1;
}

// below write clear button and clear function 
controls  = document.querySelector('.controls'); //connected the controls div to controls variable //  
clear_button = document.createElement('button'); // created the clear button
clear_button.classList.add("clear");
clear_button.textContent = "clear"
controls.appendChild(clear_button);

//Below an input field is created to be used later in the program
let user_input = document.createElement('input'); //UserInput field created
user_input.classList.add('userInput');
controls.appendChild(user_input); //append userInput to controls container 
user_input.addEventListener('keydown',function(event){ //When the keydown Event occurs
    if(event.key === "Enter"){ // specify the keydown event is enter 
        event.preventDefault(); // prevent form submisson 
        inputData = user_input.value; // save the data entered into the field in this variable, which is global, at the top of the file 
        console.log(inputData);
        upDateGrid(); //When the Enter key is pressed the grid should be updated from the default 
    }
})

//Logic for clearButton function
clear_button.addEventListener("click",function(){
    const squares = document.querySelectorAll('div.color');
    squares.forEach(function(square){
        square.classList.replace("color",'square');
    })
})


