const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

let player, enemy;

function startGame() {
    player = new Player(100, canvas.height - 100);
    enemy = new Enemy(canvas.width - 150, canvas.height - 100);
    gameLoop();
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw player and enemy
    player.update();
    player.draw(ctx);

    enemy.update(player);
    enemy.draw(ctx);

    // Check for collisions
    checkCollisions(player, enemy);

    requestAnimationFrame(gameLoop);
}

window.onload = startGame;
// game.js

const images = {};
const sounds = {};

// Load images
function loadImages() {
    const imageNames = ['player', 'enemy', 'background', 'effects'];
    imageNames.forEach(name => {
        const img = new Image();
        img.src = `assets/images/${name}.png`;
        images[name] = img;
    });
}

// Load sounds
function loadSounds() {
    const soundNames = ['slash', 'victory', 'defeat'];
    soundNames.forEach(name => {
        const audio = new Audio(`assets/sounds/${name}.mp3`);
        sounds[name] = audio;
    });
}

// Initialize game
function init() {
    loadImages();
    loadSounds();
    // Other initialization code
}

// Call init to start the game
init();
