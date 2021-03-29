import {Rect} from "./Rect";

export class Player extends Rect {
    constructor() {
        super({});
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
            this.rect.y += -this.rect.vy * correction
        }
        if (this.joystick.KeyS) {
            this.rect.y += this.rect.vy * correction
        }
        if (this.joystick.KeyA) {
            this.rect.x += -this.rect.vx * correction
        }
        if (this.joystick.KeyD) {
            this.rect.x += this.rect.vx * correction
        }
    }

    colliderField(layer){
        if (this.rect.x < 0) {
            this.rect.x = 0
        }
        if (this.rect.x + this.rect.w > layer.w) {
            this.rect.x = layer.w - this.rect.w;
        }
        if (this.rect.y < 0) {
            this.rect.y = 0
        }
        if (this.rect.y + this.rect.h > layer.h) {
            this.rect.y = layer.h - this.rect.h;
        }
    }
}