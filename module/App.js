import {Layout} from "./Layout";
import {GameControl} from "./GameControl";
import {DrawControl} from "./DrawControl";
import KeyboardControl from "./KeyboardControl";

export class App {
    constructor(container) {
        this.container = container
        this.layer = new Layout(this.container)

        this.KeyboardControl = KeyboardControl;

        this.gameControl = new GameControl(this);
        this.drawControl = new DrawControl();

        window.addEventListener('keydown', function (event) {
            if (event.code === this.KeyboardControl.paint) {
                this.drawControl.startDraw(this.layer.context);
                if (this.gameControl.loop)
                    this.gameControl.stopGame(this.gameControl.loop);
            }
            if (event.code === this.KeyboardControl.game) {
                if(!this.gameControl.gameTime){
                    this.gameControl.startGame();
                }
            }
        }.bind(this))
    }
}


onload = function () {
    new App(document.querySelector('body'));
}