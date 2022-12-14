canvas = document.getElementById("my_cunvs");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", mousedow);
mouseEvent="w";
function mousedow(e) {
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove",move_o_monse);
function move_o_monse(e)
{
    positionmouseX = e.clientX - canvas.offsetLeft;
    positionmousey = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        console.log("Current position of x and Y coordinates = ");
        console.log("x = " + positionmouseX + "y = " + positionmousey);
        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.lineWidth = 2;
        ctx.arc(positionmouseX, positionmousey, 30,0 , 2 * Math.PI )
        ctx.stroke();
    };
    
}; 