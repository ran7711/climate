

function loadnavBar(){
    $.get("navbar.html", function(data){
        $(".nav").replaceWith(data);
    });
}
