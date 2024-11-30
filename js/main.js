// Esta variable es del boton para incializar el juego
let on = true;
ball.draw();

function drawFrame(){
    ctx.clearRect(0,0,canvas.clientWidth, canvas.height);
    drawGridSystem(); // dibujar la cuadricula 
    ball.draw();  // Se dibuja la pelota
    ball.updatePosition();  // Se actualiza la posición de la pelota

}


// Bucle principal
setInterval(()=>{
    if(on) drawFrame();
},1000 / 60);