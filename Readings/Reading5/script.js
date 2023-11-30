const canvas = document.getElementById('chaosCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle class representing chaotic elements
class Particle {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.baseX = x;
    this.baseY = y;
    this.density = Math.random() * 40 + 5; // Adjust density for chaos
  }

  // Draw particle on the canvas
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  // Move particle in a chaotic manner
  update() {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx ** 2 + dy ** 2);
    const forceDirectionX = dx / distance;
    const forceDirectionY = dy / distance;
    const maxDistance = mouse.radius;
    const force = (maxDistance - distance) / maxDistance;
    const directionX = forceDirectionX * force * this.density;
    const directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        const dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        const dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

// Create an array of particles
const particles = [];
const particleColors = ['#ff0000', '#000000', '#230094', '#000fca', '#0067ab'];

// Initialize particles
function init() {
  for (let i = 0; i < 500; i++) {
    const size = Math.random() * 5 + 1;
    const x = Math.random() * (innerWidth - size * 2) + size;
    const y = Math.random() * (innerHeight - size * 2) + size;
    const color = particleColors[Math.floor(Math.random() * particleColors.length)];

    particles.push(new Particle(x, y, size, color));
  }
}

// Mouse object to track cursor position
const mouse = {
  x: null,
  y: null,
  radius: 150,
};

// Update mouse position
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const particle of particles) {
    particle.update();
    particle.draw();
  }

  requestAnimationFrame(animate);
}

// Start the chaos
init();
animate();
