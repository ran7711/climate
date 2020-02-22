"use strict";

    function renderData(){

        renderBtnAttributes();
        renderCardClasses();

    }
    function renderBtnAttributes(){

        var faqs = document.querySelectorAll(".btnSizing");

        for (var i = 0; i < faqs.length ; i++){

            // faqs[i].addEventListener("click",toggleFaq(i))
            faqs[i].setAttribute("onclick", "toggleFaq(" + i + ");");
        }
    }

    function renderCardClasses(){

        var hiddenCards = document.querySelectorAll(".collapse");

        for (var i = 0; i < hiddenCards.length ; i++){

            // faqs[i].addEventListener("click",toggleFaq(i))
            hiddenCards[i].setAttribute("class", "collapse hiddenCard" + i );
        }

    }

    function toggleFaq(i){
        console.log('clicked',i);
        $('.hiddenCard' + i).toggle();
    }

