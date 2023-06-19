//event listener for when the DOM loads

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type")=== "submit") {
                alert("You Clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`you clicked ${gameType}`);
            }
        });
    }
});

/**The main game "loop", called when the script is first loaded, 
 * and after a users answer has been processed.
 */
function runGame() {
    //creates 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 +1);
}

function correctAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

}
function displayAdditionQuestion(){

}
function displaySubtractionQuestion(){

}
function displayMulitplyQuestion(){

}
function displayDivideQuestion(){

}
