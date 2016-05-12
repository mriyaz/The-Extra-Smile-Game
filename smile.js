/**
 * Created by Riyaz on 1/12/2016.
 */

//Global variable declarations
var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

//In this function the faces are created in a loop
function generateFaces() {

    for (i = 0; i < numberOfFaces; i++) {
        var smileImg = document.createElement("img");

        smileImg.src = "smile.png";
        smileImg.style.top = Math.floor(Math.random() * 400 + 1) + "px";
        smileImg.style.left = Math.floor(Math.random() * 400 + 1) + "px";

        //Add the newly created image to the leftSide div using appendChild()
        document.getElementById("leftSide").appendChild(smileImg);


    }//End of while loop

    //copy the leftSide div
    var leftSideImages = theLeftSide.cloneNode(true);

    //Then, delete the last child of leftSideImages
    leftSideImages.removeChild(leftSideImages.lastChild);

    //Then, add leftSideImages to the rightSide div
    theRightSide.appendChild(leftSideImages);

    //Get a hold on the last child, before it gets destroyed by the GC
    theLeftSide.lastChild.onclick = nextLevel;

}//End of generateFaces() function


function nextLevel(event) {
    //alert("reached");
    //Stop processing for other elements & for more than one click
    event.stopPropagation();

    //Increment the number of faces to be shown by 5
    numberOfFaces += 5;

    //Remove all the faces
    removeFaces();

    //Call the generateFaces() function
    generateFaces();
}

//Deletes the faces
function removeFaces() {
    //Remove leftSide nodes
    while (theLeftSide.hasChildNodes())
        theLeftSide.removeChild(theLeftSide.firstChild);

    //Remove rightSide nodes
    while (theRightSide.hasChildNodes())
        theRightSide.removeChild(theRightSide.firstChild);
}

theBody.onclick = function gameOver() {
    alert("Game Over!");
    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
};

