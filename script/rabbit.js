var time = 0;

window.onload = function(){
    setInterval('draw()', 100);
}

function draw() {
    var ctx = document.getElementById("helloCanvas").getContext("2d");;
    ctx.clearRect(0, 0, 600, 400);
    ctx.fillRect(0, 0, 600, 400);

    var rabbit = new Image();
    rabbit.src = "images/rabbit.png";
    ctx.drawImage(rabbit, 50, 150);
    if(time < 15){
        ctx.translate(10,0);
        time++;
    } else {
        ctx.translate(-150,0);
        time = 0;
    }
}
