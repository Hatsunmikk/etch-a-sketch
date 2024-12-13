# etch-a-sketch

This project is an attempt to practice and understand the various DOM manipulation methods.

<br>

A breakdown of the code:

1. I started off with an html boilerplate but instead of making the grid through html, I made it 
using javascript in order to enable dynamic rendering and resizing according to the user's preferences.

2. I added a button to the html file and accessed it in logic.js using DOM methods. When clicked, the 
button triggers a prompt that allows the user to select the number of squares (a maximum of 100 per side)
in the grid.

3. Once entered, we are guided to the createGrid() function that first clears the grid. It then calculates
the dimensions each square should be in order to fit into the fixed dimensions of the grid-container
according to the number of squares the user has chosen. Instead of assigning the squares width and height
using CSS, we assign these dynamically using js logic within createGrid().

4. A function called getRandomColor() is used within createGrid() to assign each square a random colour.
Furthermore, we add hover effects to the squares such that the opacity of each square increases progressively
by 10% for upto 10 hovers (after that it remains unchanged).

5. Each square is assigned these features and appended as a child element to the grid-container div.

<br>

The problem I faced:

While this project functions as expected on desktops and laptops, it fails to function properly on mobile and
other touchscreen devices where hover effects do not work. I tried to alter the functionality to 'touch and drag'
for touchscreen devices, in order to emulate a drawing pad effect. Despite my attempts I could not implement
this functionality for touchscreen devices. The most I could achieve was an increase in the opacity everytime
a specific square was touched but when the user dragged their finger over the screen, the other squares remained
uresponsive. I have still not been able to fix this issue but I hope to correct it soon.

<br>
In all, this has been fun to work on. Thanks to anyone going through this!


