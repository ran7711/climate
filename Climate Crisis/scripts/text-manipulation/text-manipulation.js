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


function redirect(){
    var link = "https://www.google.com/search?sxsrf=ALeKk01OinCsS5rzDqzTD67p7bCGgZkdwg%3A1582929176816&ei=GJVZXoe3MZCyat3gv7gB&q=Climate+Crisis&oq=Climate+Crisis&gs_l=psy-ab.3..35i39j0l2j0i20i263l2j0l5.64027.65886..66032...0.1..0.162.1716.0j14......0....1..gws-wiz.......0i71j0i273j0i131j0i67j0i203j0i10.zEtPWILJwno&ved=0ahUKEwiHo6fapvXnAhUQmRoKHV3wDxcQ4dUDCAs&uact=5";
    window.location = link;

}