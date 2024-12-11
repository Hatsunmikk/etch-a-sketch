
//Main grid container which will contain all the square within it
const gridContainer = document.getElementById("grid-container");

//A loop to create the squares
for(let i = 0; i < 256; i++){

    //creating each square as a div
    const square = document.createElement("div");
     
    //each created square is being assigned a class to target it for styling
    square.classList.add("grid-square");
     
    //Each square is being added to the main grid container
    gridContainer.appendChild(square);
}