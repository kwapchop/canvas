import {Layout} from "./Layout";
import {Loop} from "./Loop";
import {Rect} from "./Rect";
import {Player} from "./Player";
import {ReInitGame} from './ReInitGame'
import {TotalTimeGame} from './TotalTimeGame'

export class App {
    constructor(container) {
        this.container = container
        this.layer = new Layout(container)

        this.rectArray = [
            new Rect({
                x: 300,
                y: 300,
                w: 30,
                h: 30,
                vx: 500,
                vy: 500,
                color: '#f19606',
                layer:this.layer
            }),
            new Rect({
                x: 99,
                y: 99,
                w: 40,
                h: 40,
                vx: 400,
                vy: 400,
                color: '#1dd210',
                layer:this.layer
            }), new Rect({
                x: 150,
                y: 150,
                w: 50,
                h: 50,
                vx: 500,
                vy: 500,
                color: '#d21010',
                layer:this.layer
            }),
            new Rect({
                x: 150,
                y: 150,
                w: 50,
                h: 50,
                vx: 800,
                vy: 800,
                color: '#122148',
                layer:this.layer
            })
        ];
        this.player = new Player({layer:this.layer});

        this.gameTime = new TotalTimeGame();

        window.addEventListener('keydown', function (event) {
            if (event.code === 'Space') {
                this.gameTime.stopTime();
            }
            if (event.code === 'Enter') {
                this.rectArray[this.rectArray.length] = new Rect({layer:this.layer})
            }
        }.bind(this))

        this.loop = new Loop(this.update.bind(this), this.display.bind(this), this.gameTime);
    }

    update(correction, loop) {

        this.gameTime.displayTime();

        //Противники
        this.rectArray.forEach((e, i) => {
            e.update(this.layer, correction);
            e.collision(this.player, () => this.gameOver(loop))
        })

        //Игрок
        this.player.update(this.layer, correction);
    }

    display() {
        this.layer.context.clearRect(0, 0, this.layer.w, this.layer.h);

        this.rectArray.forEach((e, i) => {
            this.layer.context.fillStyle = e.color;
            this.layer.context.fillRect(e.x, e.y, e.w, e.h);
        })

        this.layer.context.fillStyle = 'blue';
        this.layer.context.fillRect(this.player.x, this.player.y, this.player.w, this.player.h);
    }


    gameOver(loop) {
        loop.stopGame()
        alert('Game over')

        const reInit = new ReInitGame(this);
        reInit.reinit();
    }
}


onload = function () {
    new App(document.querySelector('body'));
}