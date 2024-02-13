let output = document.getElementById('output-dom');
let words = [
    "BEST QUALITY FOOD",
    "DELICIOUS FOOD",
    "TASTY FOOD",
    "ORGANIC FOOD"
]
let charTurn = 0;
let wordTurn = 0;
printWord();
function printWord(){
    if(charTurn<=words[wordTurn].length){
        output.innerHTML = words[wordTurn].substr(0,charTurn);
        charTurn++;
        setTimeout(printWord,300);
    }
    else{
        setTimeout(deleteWord,1000);
    }
}
function deleteWord(){
    if(charTurn>=0){
        output.innerHTML = words[wordTurn].substr(0,charTurn);
        charTurn--;
        setTimeout(deleteWord,200);
    }
    else{
        if(wordTurn<words.length-1){
            wordTurn++;
        }else{
            wordTurn=0;
        }
        charTurn=0;
        setTimeout(printWord,300);
    }
}