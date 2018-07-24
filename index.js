$(document).ready(function(){
    $("#that").hover(calc, calc)
    $("#exampleModal").hover(calc, calc)
    });


function calc(){
var T = 0;
T = document.getElementById("that").value;
console.log(T);
T *= 20;
$(".price").html(T)



}