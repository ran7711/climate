"use strict";

$(function() {

    $("#contact_form").submit(function(event) {

        /* Preventing Page from Refreshing*/
        event.preventDefault();

        /* Serializing form into one Object */
        var form = $( this ).serializeArray();

        /* Looping threw each key in form */
        for (var key of form) {
            if(key.name === 'email'){
                key.value = cleanEmail(key.value);
            }
        }

        /* sending Ajax to a backend server */
        sendForm(form);
    });
});

/* On Radio Button (Event) Select */
function onRadioBtnC(){

    if (document.getElementById("male").checked) {
        document.getElementById("subject_input").selectedIndex = 2;
    } else if (document.getElementById("female").checked){
        document.getElementById("subject_input").selectedIndex = 1;
    }
}

function cleanEmail(email){

    var notAllowedCharsARR = ["!","#","$","%","^","&","*","(",")","=","+","[","]",";","\"","\\","'",":","/"];

    for (var i = 0; i < email.length ; i++){
        for (var j = 0; j < notAllowedCharsARR.length ; j++){
            if (email[i] === notAllowedCharsARR[j]){
                email = email.replace(notAllowedCharsARR[j],"");
            }
        }
    }
    return email;
}

function sendForm(form){

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "form_handler.php", /* Backend Server URL should catch the form */
        data: form,
        success: function() {
            // callback code here
            console.log("Success");
        },
        error: function (data) {
            console.log("An error occurred.");
            console.log(form);
            console.log(data);
        }
    });
}