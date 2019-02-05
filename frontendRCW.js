var entry = [];
var counter = 0;

function theQuestion(){

    while(true){
        var ask = prompt("Enter a word to continue. Enter 'N' to Quit.");
        if (ask.toLowerCase() !== "n") {
            // ask = prompt("Enter another word. Enter 'N' to Quit");
            entry.push(ask);
            counter+=1;
        } else {
            console.log(entry);
            console.log(counter);
            break;
        }
    }
}

var buttonClick = document.getElementById("button1");

buttonClick.onclick = theQuestion;

