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


function runGame(){

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
