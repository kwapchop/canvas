import {Painter} from "./Painter";
import KeyboardControl from "./KeyboardControl";

export class DrawControl{
    constructor() {
        this.KeyboardControl = KeyboardControl;
    }

    startDraw(context){
        this.painter = new Painter(context).startListen();
    }
}