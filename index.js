$(document).ready(function(){
    $("#that").hover(calc, calc)
    $("#exampleModal").hover(calc, calc)
    });


function calc(){
var T = 0;
T = document.getElementById("that").value;
console.log(T);
T *= 18;
$(".price").html(T)



}



//ae1257b374cd65ed1a01692192620eb7
$(document).ready(function(){
    $(".submit").click(function(){

    var key = "ae1257b374cd65ed1a01692192620eb7";
    var uri = "https://api.openweathermap.org/data/2.5/weather?zip=77477,us&units=imperial&appid=" + key;
    console.log(uri);
    $.get(uri, onRes);
    });
    
    });
    
    function onRes(yes) {
        console.log(yes)
        $( ".lit" ).empty();
    $(".country").html(yes.sys.country);
    $(".temp").html(yes.main.temp);
    $(".city-name").html(yes.name);
    $(".weather").html(yes.weather[0].description);
    var pic = (yes.weather[0].icon);
    console.log(pic);
    pic = pic + ".png";
    console.log(pic);
    $(".lit").append('<img src="img/b/' + pic + '">');
    }



