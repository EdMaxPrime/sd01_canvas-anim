var canvas = document.getElementById("anim");
var ctx = canvas.getContext("2d");
var x = 0;
var requestID;

var drawCircle = function() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.arc(x, 250, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.stroke();
    ctx.fill();
    x++;
    requestID = window.requestAnimationFrame(drawCircle);
}

window.requestAnimationFrame(drawCircle);
