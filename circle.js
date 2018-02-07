var canvas = document.getElementById("anim");
var ctx = canvas.getContext("2d");
var radius = 0;
var rate = 0;
var requestID;

var update = function() {
    radius += rate;
    if(radius >= canvas.width || radius <= 0) {
	rate *= -1;
    }
}

var drawCircle = function() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.arc(250, 250, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.stroke();
    ctx.fill();
}

var animationLoop = function() {
    drawCircle();
    update();
    requestID = window.requestAnimationFrame(drawCircle);
}

window.requestAnimationFrame(animationLoop);
