'use strict';


function getText(){

    var textEleme = document.getElementById("textReverse");
    var wordsArr = textEleme.innerText.split(" ");
    textEleme.innerHTML = reverse_words(wordsArr);
}


function reverse_words(wordsArr){

    var reversedWords = [];

    for(var i = wordsArr.length; i >= 0; i--) {
        reversedWords.push(wordsArr[i]);
    }

    return reversedWords.join(" ").trim();
}

function remove(){

    document.getElementById("textReverse").innerHTML = "";
}