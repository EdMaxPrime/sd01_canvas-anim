var canvas = document.getElementById("tabula_rasa");
var ctx = canvas.getContext("2d");
var radius = 0;
var rate = 0;
var x = 250, y = 250, speedX = 2, speedY = 1;
var requestID;

var drawCircle = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    if(rate > 0) ctx.fillStyle = "green";
    else         ctx.fillStyle = "yellow";
    ctx.stroke();
    ctx.fill();
};

var growShrinkLoop = function() {
    drawCircle();
    radius += rate;
    if(radius >= canvas.width/2 || radius <= 0) {
        rate *= -1;
    }
    requestID = window.requestAnimationFrame(growShrinkLoop);
};

var dvdBounceLoop = function() {
    drawCircle();
    x += speedX;
    y += speedY;
    if(x - radius <= 0 || x + radius >= canvas.width) {speedX *= -1;}
    if(y - radius <= 0 || y + radius >= canvas.height) {speedY *= -1;}
    requestID = window.requestAnimationFrame(dvdBounceLoop);
}

var startListener = function(evt) {
    x = canvas.width/2;
    y = canvas.height/2;
    if(evt.srcElement.id == "start1") {
	radius = 0;
        rate = 1;
        requestID = window.requestAnimationFrame(growShrinkLoop);
    } else {
	radius = 20;
	speedX = 2;
	speedY = 1;
	requestID = window.requestAnimationFrame(dvdBounceLoop);
    }
};

var stopListener = function() {
    window.cancelAnimationFrame(requestID);
    rate = 0;
};

document.getElementById("start1").addEventListener("click", startListener);
document.getElementById("start2").addEventListener("click", startListener);
document.getElementById("stop").addEventListener("click", stopListener);
