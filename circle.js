var canvas = document.getElementById("tabula_rasa");
var ctx = canvas.getContext("2d");
var requestID;
var animating;

var startListener = function(evt) {
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
    };

    var radius = 0;
    var rate = 0;
    var x = canvas.width/2, y = canvas.height/2;
    var speedX = 2, speedY = 3;
    
    if(evt.srcElement.id == "start1" && animating != "radius") {
	    radius = 0;
        rate = 1;
        stopListener();
        requestID = window.requestAnimationFrame(growShrinkLoop);
    } else if(evt.srcElement.id == "start2" && animating != "bounce") {
	    radius = 20;
        stopListener();
    	requestID = window.requestAnimationFrame(dvdBounceLoop);
    }
};

var stopListener = function() {
    window.cancelAnimationFrame(requestID);
    animating = "";
};

document.getElementById("start1").addEventListener("click", startListener);
document.getElementById("start2").addEventListener("click", startListener);
document.getElementById("stop").addEventListener("click", stopListener);
