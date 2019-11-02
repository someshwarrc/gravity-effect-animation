import Circle from "./circle.js";

const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

let circle = [];

for (let i = 0; i < 50; i++) {
  let r = 10 + Math.random() * 10,
    x = 10 + Math.random() * (window.innerWidth - r * 2),
    y = Math.random() * (window.innerHeight - 200),
    dx = Math.random() * 1.5 - 1,
    dy = Math.random() * 3;
  circle[i] = new Circle(x, y, dx, dy, r);
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  circle.forEach(circle => {
    circle.update(ctx);
  });
}

animate();
