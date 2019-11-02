let color = ["#182C61", "#55E6C1", "#58B19F", "#3d0e1e"];

export default class Circle {
  constructor(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = r;
    this.color = color[Math.floor(Math.random() * 4)];
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  }
  update(ctx) {
    this.draw(ctx);

    this.y += this.dy;
    this.x += this.dx;

    if (this.x + this.radius >= window.innerWidth || this.x - this.radius <= 0)
      this.dx = -this.dx;

    if (this.y + this.radius + this.dy >= window.innerHeight)
      this.dy = -this.dy * 0.9;
    else this.dy += 1;
  }
}
