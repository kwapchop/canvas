export class Loop {
    constructor(_update, _display) {
        this.update = _update;
        this.display = _display
        this.deltaTime = 0;
        this.lastUpdate = 0;
        this.maxInterval = 40;

        this.payse = false;
        this.stop = false;

        this.start = false;

        this.animate = this.animate.bind(this);
        this.animate();
    }

    animate(currentTime = 0) {
            this.start = requestAnimationFrame(this.animate)

        this.deltaTime = currentTime - this.lastUpdate
        if (this.deltaTime < this.maxInterval) {
            this.update(this.deltaTime / 1000,this);
            this.display();
        }

        this.lastUpdate = currentTime;
    }

    stopGame() {
        cancelAnimationFrame(this.start)
    }
}