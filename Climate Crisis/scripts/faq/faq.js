"use strict";

    function renderData(){

        renderBtnAttributes();
        renderCardClasses();

    }
    function renderBtnAttributes(){

        var faqs = document.querySelectorAll(".btnSizing");

        for (var i = 0; i < faqs.length ; i++){

            faqs[i].setAttribute("onclick", "toggleFaq(" + i + ");");
        }
    }

    function renderCardClasses(){

        var hiddenCards = document.querySelectorAll(".collapse");

        for (var i = 0; i < hiddenCards.length ; i++){
            hiddenCards[i].setAttribute("class", "collapse hiddenCard" + i );
        }

    }

    function toggleFaq(i){
        $('.hiddenCard' + i).toggle();
    }

