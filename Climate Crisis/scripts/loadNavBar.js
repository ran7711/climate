
/* Loading Nav Bar Dynamctly for each page*/
function loadnavBar(){

    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1] + '/Climate%20Crisis';
    var data = buildNav(baseUrl);
    $(".nav").replaceWith(data);
}

/* Building HTML Navbar Element*/
function buildNav(baseUrl){
    var htmlEle = '<div class="nav-scroller py-1 mb-2">';
    htmlEle += '<nav class="nav d-flex justify-content-between">';
    htmlEle += '<a class="p-2 text-muted" href=' + baseUrl + '/text-manipulation.html>Text-Manipulation</a>';
    htmlEle += '<a class="p-2 text-muted" href=' + baseUrl + '/articles/Australia\'s%20deadly%20wildfires/australia\'s-deadly-wildfires.html>Article 1</a>';
    htmlEle += '<a class="p-2 text-muted" href=' + baseUrl + '/articles/Disturbing%20evidence%20of%20climate%20change/Disturbing%20evidence%20of%20climate%20change.html>Article 2</a>';
    htmlEle += '<a class="p-2 text-muted" href=' + baseUrl + '/articles/What%20is%20Global%20Warming/What%20is%20Global%20Warming.html>Article 3</a>';
    htmlEle += '<a class="p-2 text-muted" href=' + baseUrl + '/articles/Climate%20Crisis/Climate%20Crisis.html>Article 4</a>';
    htmlEle += '<a class="p-2 text-muted" href=' + baseUrl + '/articles/Mitigation%20and%20Adaptation/Mitigation%20and%20Adaptation.html>Article 5</a>';
    htmlEle += '<a class="p-2 text-muted" href=' + baseUrl + '/articles/Responding%20to%20Climate%20Change/Responding%20to%20Climate%20Change.html>Article 6</a>';
    htmlEle += '<a class="p-2 text-muted" href=' + baseUrl + '/faq.html>FAQ</a>';
    htmlEle += '<a class="p-2 text-muted" href=' + baseUrl + '/contact-us.html>Contact Us</a>';
    htmlEle += '</nav></div>';
    return htmlEle;
}











