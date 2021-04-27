var mouseEvent = " ";
var last_mouse_X, last_mouse_Y;
canvas = document.getElementById("myCanvas");
stronglikebull = canvas.getContext("2d");
stronglikebull.strokeStyle = "red";
stronglikebull.lineWidth = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + current_mouse_x + " , Y = " + current_mouse_y);
    if (mouseEvent == "mouseDown") {
        stronglikebull.beginPath();
        stronglikebull.moveTo(last_mouse_X, last_mouse_Y);
        stronglikebull.lineTo(current_mouse_x, current_mouse_y);
        stronglikebull.stroke();
    }
    last_mouse_X = current_mouse_x;
    last_mouse_Y = current_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);


function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

function CA(e) {
    stronglikebull.clearRect(0, 0, stronglikebull.canvas.width, stronglikebull.canvas.height);
}