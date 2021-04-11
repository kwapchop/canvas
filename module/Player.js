import {Rect} from "./Rect";

export class Player extends Rect {
    constructor({layer}) {
        super({x:0,y:0,w:50,h:50,vx:500,vy:500,layer});
        this.joystick = {
            KeyW: false,
            KeyS: false,
            KeyA: false,
            KeyD: false,
        }
        window.onkeydown = function (event) {
            this.keyDown(event)
        }.bind(this)
        window.onkeyup = function (event) {
            this.keyUp(event)
        }.bind(this)
    }

    update(layer, correction) {
        this.move(correction)
        this.colliderField(layer);

    }

    keyDown(event) {
        if (!this.joystick.hasOwnProperty(event.code)) return;
        this.joystick[event.code] = true;
    }

    keyUp(event) {
        if (!this.joystick.hasOwnProperty(event.code)) return;
        this.joystick[event.code] = false;
    }

    move(correction) {
        if (this.joystick.KeyW) {
            this.y += -this.vy * correction
        }
        if (this.joystick.KeyS) {
            this.y += this.vy * correction
        }
        if (this.joystick.KeyA) {
            this.x += -this.vx * correction
        }
        if (this.joystick.KeyD) {
            this.x += this.vx * correction
        }
    }

    colliderField(layer){
        if (this.x < 0) {
            this.x = 0
        }
        if (this.x + this.w > layer.w) {
            this.x = layer.w - this.w;
        }
        if (this.y < 0) {
            this.y = 0
        }
        if (this.y + this.h > layer.h) {
            this.y = layer.h - this.h;
        }
    }
}