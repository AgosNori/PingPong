const paddle = {
    x : 10, // posición inicial 
    y : canvas.height / 2 - 40, // centrada en el eje y
    width: 10,
    height : 80, 
    color: "#ffffff",
    speed: 5, // velocidad de movimiento
    dy : 0 , // cambio en y

    draw : function (){ // funciojn para dibujar la paleta
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y , this.width, this.height);
    },

    move : function (){
        this.y += this.dy;

        // limitar la posicion de las paletas dentro del canvas 
        if (this.y < 0) this.y = 0;
        if (this.y + this.height > canvas.height) this.y = canvas.height - this.height
    },
};
 // la paleta para el jugador dos es lo mismo que la paleta para el jugador uno, lo unico que cambia es la posicion 
const paddle2 = {
    ...paddle, // Este copia todas las propiedades del objeto ya creado (Operador de propagación)
    x: canvas.width - 20, // posicion inicial en el lado derecho
    dy: 0,
};