var canvas = document.getElementById("tabula_rasa");
var ctx = canvas.getContext("2d");
var radius = 0;
var rate = 0;
var requestID;

var update = function() {
    radius += rate;
    if(radius >= canvas.width/2 || radius <= 0) {
	    rate *= -1;
    }
};

var drawCircle = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, radius, 0, 2 * Math.PI);
    if(rate > 0) ctx.fillStyle = "green";
    else         ctx.fillStyle = "yellow";
    ctx.stroke();
    ctx.fill();
};

var animationLoop = function() {
    drawCircle();
    update();
    requestID = window.requestAnimationFrame(animationLoop);
};

var startListener = function() {
    radius = 0;
    rate = 1;
    requestID = window.requestAnimationFrame(animationLoop);
};

var stopListener = function() {
    window.cancelAnimationFrame(requestID);
    rate = 0;
};

document.getElementById("start").addEventListener("click", startListener);
document.getElementById("stop").addEventListener("click", stopListener);
