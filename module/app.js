import {Layout} from "./layout";
import {Loop} from "./Loop";
import {Rect} from "./Rect";
import {Player} from "./Player";

class App {
    constructor(container) {
        this.layer = new Layout(container)

        this.rect = new Rect({});
        this.rect2 = new Rect({
            x: 99,
            y: 99,
            w: 30,
            h: 30,
            vx: 50,
            vy: 50
        })
        this.i = 0;
        this.player = new Player();


        this.loop = new Loop(this.update.bind(this), this.display.bind(this));
    }

    update(correction) {
        this.rect.update(this.layer, correction);
        this.rect2.update(this.layer, correction);
        this.player.update(this.layer, correction);
        if (
            this.player.rect.y <= this.rect2.rect.y + this.rect2.rect.h && this.player.rect.y >= this.rect2.rect.y && this.player.rect.x <= this.rect2.rect.x + this.rect2.rect.w && this.player.rect.x >= this.rect2.rect.x ||
            // this.player.rect.y <= this.rect2.rect.y + this.rect2.rect.h && this.player.rect.x + this.player.rect.w >= this.rect2.rect.x ||
            // this.player.rect.y + this.player.rect.h >= this.rect2.rect.y && this.player.rect.x >= this.rect2.rect.x + this.rect2.rect.w ||
            this.player.rect.y + this.player.rect.h >= this.rect2.rect.y && this.player.rect.y <= this.rect2.rect.y + this.rect2.rect.h && this.player.rect.x + this.player.rect.w >= this.rect2.rect.x && this.player.rect.x <= this.rect2.rect.x + this.rect2.rect.w
            // this.rect2.rect.y >= this.player.rect.y && this.rect2.rect.y < this.player.rect.y + this.player.rect.w &&
            // this.rect2.rect.y + this.rect2.rect.w >= this.player.rect.y && this.rect2.rect.y + this.rect2.rect.w < this.player.rect.y + this.player.rect.w ||
            // this.rect2.rect.x > this.player.rect.x && this.rect2.rect.x < this.player.rect.x + this.player.rect.h &&
            // this.rect2.rect.x + this.rect2.rect.h > this.player.rect.x && this.rect2.rect.x + this.rect2.rect.h < this.player.rect.x + this.player.rect.h
        ) {
            this.loop.stopGame()
            console.log('Game over')
        }
    }

    display() {
        this.layer.context.clearRect(0, 0, this.layer.w, this.layer.h);
        this.layer.context.fillStyle = 'orange';
        this.layer.context.fillRect(this.rect.rect.x, this.rect.rect.y, this.rect.rect.w, this.rect.rect.h);
        this.layer.context.fillStyle = 'green';
        this.layer.context.fillRect(this.rect2.rect.x, this.rect2.rect.y, this.rect2.rect.w, this.rect2.rect.h);
        this.layer.context.fillStyle = 'blue';
        this.layer.context.fillRect(this.player.rect.x, this.player.rect.y, this.player.rect.w, this.player.rect.h);

    }
}


onload = function () {
    new App(document.querySelector('body'));
}