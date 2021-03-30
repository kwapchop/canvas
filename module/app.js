import {Layout} from "./layout";
import {Loop} from "./Loop";
import {Rect} from "./Rect";
import {Player} from "./Player";

class App {
    constructor(container) {
        this.layer = new Layout(container)

        this.rect = new Rect({
            x: 300,
            y: 300,
            w: 30,
            h: 30,
            vx: 500,
            vy: 500
        });
        this.rect2 = new Rect({
            x: 99,
            y: 99,
            w: 40,
            h: 40,
            vx: 400,
            vy: 400
        })
        this.rect3 = new Rect({
            x: 150,
            y: 150,
            w: 50,
            h: 50,
            vx: 500,
            vy: 500
        })
        this.player = new Player();


        this.loop = new Loop(this.update.bind(this), this.display.bind(this));
    }

    update(correction,loop) {
        this.rect.update(this.layer, correction);
        this.rect.collision(this.player,()=>this.gameOver(loop))
        this.rect2.update(this.layer, correction);
        this.rect2.collision(this.player,()=>this.gameOver(loop))
        this.rect3.update(this.layer, correction);
        this.rect3.collision(this.player,()=>this.gameOver(loop))

        this.player.update(this.layer, correction);
    }

    display() {
        this.layer.context.clearRect(0, 0, this.layer.w, this.layer.h);
        this.layer.context.fillStyle = 'orange';
        this.layer.context.fillRect(this.rect.rect.x, this.rect.rect.y, this.rect.rect.w, this.rect.rect.h);
        this.layer.context.fillStyle = 'green';
        this.layer.context.fillRect(this.rect2.rect.x, this.rect2.rect.y, this.rect2.rect.w, this.rect2.rect.h);
        this.layer.context.fillStyle = 'red';
        this.layer.context.fillRect(this.rect3.rect.x, this.rect3.rect.y, this.rect3.rect.w, this.rect3.rect.h);
        this.layer.context.fillStyle = 'blue';
        this.layer.context.fillRect(this.player.rect.x, this.player.rect.y, this.player.rect.w, this.player.rect.h);
    }

    gameOver(loop){
        // console.log(this)
        loop.stopGame()
        console.log('Game over')
        alert('Game over')
    }
}


onload = function () {
    new App(document.querySelector('body'));
}