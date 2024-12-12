


function createGrid (numOfSquares){

    //Main grid container which will contain all the square within it
     const gridContainer = document.getElementById("grid-container");

     //Clearing the existing grid (if any)
     gridContainer.innerHTML = "";

     // Calculate the size of each square based on the number of squares per side
     const squareSize = 960 / numOfSquares;

     //A loop to create the squares
    for(let i = 0; i < numOfSquares * numOfSquares; i++){

    //creating each square as a div
    const square = document.createElement("div");
     
    //each created square is being assigned a class to target it for styling
    square.classList.add("grid-square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
     
    //Adding hover effects to create a trail 
    square.addEventListener("mouseover", () =>
    {
        square.style.backgroundColor =  "black";
    });

    square.addEventListener("mouseleave", () =>
        {
            square.style.backgroundColor =  "lightgray";
        });



    //Each square is being added to the main grid container
    gridContainer.appendChild(square);
};

};


const button = document.getElementById("btn");

//How clicking the button guides us to the function that creates the grid
button.addEventListener("click", () => {
   let numOfSquares = prompt("How many squares do you want? (max. 100)");
   numOfSquares = parseInt(numOfSquares);

   if(isNaN(numOfSquares) || numOfSquares < 1 || numOfSquares > 100){
       alert("Please enter a valid number between 1 an 100.");
       return;
   };

   createGrid(numOfSquares);
});

//Creating a default grid on page-load
window.onload = () => createGrid(16);



