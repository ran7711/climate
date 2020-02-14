"use strict";

$(function() {

    $("#contact_form").submit(function(event) {
        /* Preventing Page from Refreshing*/
        event.preventDefault();
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "form_handler.php",
            data: $("contact_form").serialize(),
            success: function() {
                // callback code here
                console.log('Success');
            },
            error: function (data) {
                console.log('An error occurred.');
                console.log(data);
            }
        });
    })
});

