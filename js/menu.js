 window.onload = function () {
    var xhttp = new XMLHttpRequest();
    var oeMenu = document.getElementById("menu");
    xhttp.open("GET", "header.html", false);
    xhttp.send();
    oeMenu.innerHTML = xhttp.responseText;

        
};





