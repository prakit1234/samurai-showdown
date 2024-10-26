class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 80;
        this.health = 100;
        this.speed = 3;
        this.attacking = false;
    }

    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        // Draw health bar above enemy
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y - 10, this.health, 5);
    }

    update(player) {
        // Simple AI: Move towards player and attack
        if (this.x > player.x + player.width) this.x -= this.speed;
        else if (this.x < player.x - this.width) this.x += this.speed;
        
        if (Math.random() < 0.01) this.attacking = true; // Randomly attack
    }
}
