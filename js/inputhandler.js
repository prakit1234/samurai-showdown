function handleInput(player) {
    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowLeft': player.x -= player.speed; break;
            case 'ArrowRight': player.x += player.speed; break;
            case 'ArrowUp': player.y -= player.speed; break;
            case 'ArrowDown': player.y += player.speed; break;
            case ' ': player.attacking = true; break; // Attack action
        }
    });
}
