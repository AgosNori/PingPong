
// obtener el canvas
const canvas = document.getElementById("miCanvas");
canvas.style.backgroundColor = "#000000";
const ctx = canvas.getContext("2d");

// Funcion para dibujar el grid system
function drawGridSystem(){
    ctx.strokeStyle = "#00FF00"; // color de la linea
    ctx.lineWidth = 0.25;  // tamaño de la linea
    ctx.fillStyle = "#009900"; // color de relleno

    for (let x = 0 ; x < canvas.width ; x += 10){
        ctx.beginPath(); // inciar un nuevo trazo/camino
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.lineWidth = x % 50 === 0 ? 0.5 : 0.25;
        ctx.stroke();
        if (x % 50 === 0) ctx.fillText(x, x, 10);
    }

    for (let y = 0 ; y < canvas.height ; y += 10){
        ctx.beginPath(); // inciar un nuevo trazo/camino
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width,y);
        ctx.lineWidth = y % 50 === 0 ? 0.5 : 0.25;
        ctx.stroke();
        if (y % 50 === 0) ctx.fillText(y, 0, y + 10);
    }
}

// Función para poder dibujar las coordenadas
function drawCoordinate(ctx,x,y){
    ctx.fillStyle= "#00FF00";
    ctx.fillText (`(${x},${y}),x,y`);
}