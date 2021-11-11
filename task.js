/*function that change the color of Myidentity  in the profile identificatiom */
$("#identity").css("transition", "3s");
var arr = ["#f00", "#0f0", "#00f", "white"];

function changeColor() {
    $("#identity").css({
        color: arr[parseInt(Math.random() * 4)],
        
    });
}
changeColor();
setInterval(changeColor, 1000);
/*****************************************************/