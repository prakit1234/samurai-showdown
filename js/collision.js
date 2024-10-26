function checkCollisions(player, enemy) {
    // Basic collision detection between player and enemy
    if (player.attacking && Math.abs(player.x - enemy.x) < 50) {
        enemy.health -= 10; // Decrease enemy health on successful attack
        player.attacking = false;
    }

    if (enemy.attacking && Math.abs(enemy.x - player.x) < 50) {
        player.health -= 10; // Decrease player health on enemy attack
        enemy.attacking = false;
    }
}
