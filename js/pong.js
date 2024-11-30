// Detección de las colisiones 

function checkPaddleCollision (){
    if(
        ball.x - ball.radius <= paddle.x + paddle.width &&  // verifica si el borde izq de la pelota alcanzo o paso el borde derecho de la paleta 
        ball.y  >= paddle.y && // verifica si la pelota esta por debajo del borde superior de la paleta
        ball.y <= paddle.y + paddle.height  // verifica si la pelota esta por encima del borde inferior de la paleta
    ){
        ball.reverseDirection("x")
    }
    if( ball.x + ball.radius >= paddle2.x &&
        ball.y >= paddle2.y &&
        ball.y <= paddle2.y + paddle2.height
    ){
        ball.reverseDirection("x")
    }
}


// Manejo de controladores para las paletas
function setupControls(){
    document.addEventListener("keydown", (e) =>{  // una callback es una funcion anonima
        if(e.key === "w") paddle.dy = -paddle.speed; // Judador 1 (izq)
        if(e.key === "s") paddle.dy = paddle.speed;
        if(e.key === "ArrowUp") paddle2.dy = -paddle2.speed; // Jugador 2 (der)
        if(e.key === "ArrowDown") paddle2.dy = paddle2.speed;
    });
    document.addEventListener("keyup",(e)=>{
        if(e.key === "w" || e.key === "s") paddle.dy = 0; // Judador 1 (izq)
        if(e.key === "ArrowUp" || e.key === "ArrowDown") paddle2.dy = 0; // Jugador 2 (der)
    });
}

// Inicializar los controladores
setupControls();

// Lógica principal del juego
function updateGame(){
    paddle.move();
    paddle2.move();
    ball.updatePosition();
    checkPaddleCollision();
};

function drawGame(){
    paddle.draw();
    paddle2.draw();
    ball.draw();
}