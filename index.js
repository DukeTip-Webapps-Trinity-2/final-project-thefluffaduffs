$(document).ready(function(){
    $("#that").keypress(calc, calc)
    $("#that").keyup(calc, calc)
    $("#that").keydown(calc, calc)
    $("#that").click(calc, calc)
    $("#exampleModal").hover(calc, calc)
    $("#👌").hover(yeet, yeeet)
    $(".submit").hover(on, off)
    });


function calc(){
var T = 0;
T = document.getElementById("that").value;
console.log(T);
if(T < 0 || T % 1 != 0){
    $("#that").val("");
T = 0
$(".price").html(T)
}
T *= 25;
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
        $(".aa").animate({
            height: 'hide'
        }, 600);
        $(".lit").empty();
        $(".comment").empty();
    $(".country").html(yes.sys.country);
    $(".temp").html(yes.main.temp);
    $(".city-name").html(yes.name);
    $(".weather").html(yes.weather[0].description);
    var pic = (yes.weather[0].icon);
    console.log(pic);
    pic = pic + ".png";
    console.log(pic);
    $(".lit").append('<img src="b/' + pic + '">');

    if(pic == "01d.png" || pic == "02d.png" || pic == "01n.png" || pic == "02n.png"){
        $(".comment").html("There are clear skies at the moment! Perfect weather for a visit!");
        $(".aa").animate({
            height: 'show'
        },600);
    } else if ( pic == "03d.png" || pic == "04d.png" || pic == "03n.png" || pic == "04n.png"){
        $(".comment").html("There are lots of clouds, but hey, it's not raining, so the weather's still good for a visit!");
        $(".aa").animate({
            height: 'show'
        },600);
    } else if (pic == "09d.png" || pic == "10d.png" || pic == "10n.png" || pic == "09n.png"){
        $(".comment").html("It's currently raining, so if you don't like the rain, you have been warned.");
        $(".aa").animate({
            height: 'show'
        },600);
    }else if (pic == "11d.png" || pic == "11n.png"){
        $(".comment").html("I wouldn't reccomend visiting during a thunderstorm.");
        $(".aa").animate({
            height: 'show'
        },600);
    }else if (pic == "13d.png" || pic =="13n.png"){
        $(".comment").html("It's snowing, so I'd say it's up to you whether or not you should visit");
        $(".aa").animate({
            height: 'show'
        },600);
    }else if(pic == "50d.png" || pic =="50n.png"){
        $(".comment").html("There's some mist, so it's your choice ")
        $(".aa").animate({
            height: 'show'
        },600);
    }
    }


// henlo i exist REEEEEEEEEEEEEE


function yeet(){
    $("#heh").animate({
        width: '1%'
    }, 500);
}
function yeeet(){
    $("#heh").animate({
        width: '100%'
    }, 500);
}
    function on(){
        $(".submit").animate({
borderRadius: "2%"
        });
    }

    function off(){
        $(".submit").animate({
borderRadius: "50%"
        });
    }