// creamos el objeto ball y los metodos que se van a utilizar

const ball = {
  x: 100, // posición inicial en el x
  y: 50, // posición inicial en el y
  dx: 4, // velocidad con la que se va a mover en el eje x
  dy: 4, // velocidad con la que se va a mover en el eje y
  radius: 10, // radio de la pelota
  color: "#A6AEBF", // color de la pelota
  
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  },
  updatePosition: function () {
    // sumar 2 px a la posición x e y
    this.x += this.dx; // incrementar la posición dependiendo de la velocidad
    this.y += this.dy;
    this.checkCollision();
  },
  checkCollision: function () {
    // se detecta si hubo colision
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.reverseDirection("x");
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.reverseDirection("y");
    }
  },
  reverseDirection: function (axis) {
    if (axis === "x") {
      // si el eje es x  ( si choco con el eje x, va a cambiar el sentido de la velocidad)
      this.dx = -this.dx;
    } else if (axis === "y") {
      // si el eje es y  ( si choco con el eje x, va a cambiar el sentido de la velocidad)
      this.dy = -this.dy;
    }
  },
};
