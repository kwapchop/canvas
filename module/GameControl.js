import {Rect} from "./Rect";
import {Player} from "./Player";
import {TotalTimeGame} from "./TotalTimeGame";
import {Loop} from "./Loop";
import KeyboardControl from "./KeyboardControl";

export class GameControl {
    constructor(app) {
        this.app = app;
        this.KeyboardControl = KeyboardControl;
        this.gameTime = '';

        window.addEventListener('keydown', function (event) {
            if (event.code === this.KeyboardControl.pauseGame) {
                this.pauseGame();
            }
            if (event.code === this.KeyboardControl.addFigure) {
                this.rectArray[this.rectArray.length] = new Rect({layer: this.app.layer})
            }
        }.bind(this))
    }

    startGame() {
        this.rectArray = [
            new Rect({
                x: 300,
                y: 300,
                w: 30,
                h: 30,
                vx: 500,
                vy: 500,
                color: '#f19606',
                layer: this.app.layer
            }),
            // new Rect({
            //     x: 99,
            //     y: 99,
            //     w: 40,
            //     h: 40,
            //     vx: 400,
            //     vy: 400,
            //     color: '#1dd210',
            //     layer: this.layer
            // }),
            // new Rect({
            //     x: 150,
            //     y: 150,
            //     w: 50,
            //     h: 50,
            //     vx: 500,
            //     vy: 500,
            //     color: '#d21010',
            //     layer: this.layer
            // }),
            // new Rect({
            //     x: 150,
            //     y: 150,
            //     w: 50,
            //     h: 50,
            //     vx: 800,
            //     vy: 800,
            //     color: '#122148',
            //     layer: this.layer
            // })
        ];
        this.player = new Player({layer: this.app.layer});

        this.gameTime = new TotalTimeGame();

        this.loop = new Loop(this.update.bind(this), this.display.bind(this), this.gameTime);
    }

    pauseGame() {
        this.gameTime.stopTime();
    }

    stopGame() {
        this.loop.stopGame();
        this.loop = '';
        this.rectArray = [];
        this.player = '';
        this.gameTime = '';
    }

    restartGame() {
        this.stopGame(this.loop);
        alert('Game over')

        this.startGame()

        // const reInit = new ReInitGame(this.app);
        // reInit.reinit();
    }


    update(correction, loop) {

        this.gameTime.displayTime();

        //Противники
        this.rectArray.forEach((e, i) => {
            e.update(this.app.layer, correction);
            e.collision(this.player, () => this.restartGame(loop))
        })

        //Игрок
        this.player.update(this.app.layer, correction);
    }

    display() {
        this.app.layer.context.clearRect(0, 0, this.app.layer.w, this.app.layer.h);

        this.rectArray.forEach((e, i) => {
            this.app.layer.context.fillStyle = e.color;
            this.app.layer.context.fillRect(e.x, e.y, e.w, e.h);
        })

        this.app.layer.context.fillStyle = 'blue';
        this.app.layer.context.fillRect(this.player.x, this.player.y, this.player.w, this.player.h);
    }
}