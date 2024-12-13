


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

    square.dataset.interactions = 0;
    square.dataset.color = "";

    //Function to generate a random rgb color
    function getRandomColor () {
        const r = Math.floor(Math.random() * 256);
        const g =  Math.floor(Math.random() * 256);
        const b =  Math.floor(Math.random() * 256);

        return `rgb( ${r}, ${g}, ${b})`;
    };

     
    function handleInteraction() {
        //on the  first ever interaction:
        if(square.dataset.color === ""){
            square.dataset.color = getRandomColor();
            square.style.backgroundColor = square.dataset.color;
        };

        //Getting the number of interactions
        let interactions = parseInt(square.dataset.interactions);

        //Increase the opacity; darken by 10%
        if(interactions < 10){
            square.style.opacity = (0 + (interactions * 0.1));
            square.dataset.interactions = interactions + 1;

        };

    };


    //Each square is being added to the main grid container
    gridContainer.appendChild(square);

    // Assign the `handleInteraction` method to each square
    square.addEventListener("mouseover", handleInteraction);
};


    // Helper function to get the square at the touch position
    function getSquareAtPosition(touchX, touchY) {
        const rect = gridContainer.getBoundingClientRect();
        const col = Math.floor((touchX - rect.left) / squareSize);
        const row = Math.floor((touchY - rect.top) / squareSize);
        const index = row * numOfSquares + col;
        return gridContainer.children[index];
    }

    // Variable to track if the user is touching
    let isTouching = false;

    // Touch start event to start interaction
    gridContainer.addEventListener("touchstart", (event) => {
        event.preventDefault(); // Prevent scrolling on mobile
        isTouching = true;
        const touch = event.touches[0];
        const square = getSquareAtPosition(touch.clientX, touch.clientY);
        if (square) {
            handleInteraction.call(square);
        }
    });

    // Touch move event to apply effect while moving
    gridContainer.addEventListener("touchmove", (event) => {
        event.preventDefault();
        if (isTouching) {
            const touch = event.touches[0];
            const square = getSquareAtPosition(touch.clientX, touch.clientY);
            if (square) {
                handleInteraction.call(square);
            }
        }
    });

    // Touch end event to stop interaction
    gridContainer.addEventListener("touchend", () => {
        isTouching = false;
    });


};


const button = document.getElementById("btn");

//How clicking the button guides us to the function that creates the grid
button.addEventListener("click", () => {
   let numOfSquares = prompt("How many squares do you want? (max. 100 per side)");
   numOfSquares = parseInt(numOfSquares);

   if(isNaN(numOfSquares) || numOfSquares < 1 || numOfSquares > 100){
       alert("Please enter a valid number between 1 an 100.");
       return;
   };

   createGrid(numOfSquares);
});

//Creating a default grid on page-load
window.onload = () => createGrid(16);



