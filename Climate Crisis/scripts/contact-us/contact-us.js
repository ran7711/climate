"use strict";

$(function() {

    $("#contact_form").submit(function(event) {

        /* Preventing Page from Refreshing*/
        event.preventDefault();

        var form = $( this ).serializeArray();
        console.log($("contact_form"));
        console.log(form);

        // $.ajax({
        //     type: "POST",
        //     dataType: "json",
        //     url: "form_handler.php",
        //     data: $("contact_form").serialize(),
        //     success: function() {
        //         // callback code here
        //         console.log('Success');
        //     },
        //     error: function (data) {
        //         console.log('An error occurred.');
        //         console.log(data);
        //     }
        // });
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
