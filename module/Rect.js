export class Rect {
    constructor({x, y, w, h, vx, vy}) {
        this.rect = {
            x: x || 0,
            y: y || 0,
            w: w || 32,
            h: h || 32,
            vx: vx || 500,
            vy: vy || 500
        }
    }

    update(layer, correction) {
        if (this.rect.x <= 0 && this.rect.vx < 0 || this.rect.x + this.rect.w > layer.w && this.rect.vx > 0) {
            this.rect.vx = -this.rect.vx
        }
        if (this.rect.y <= 0 && this.rect.vy < 0 || this.rect.y + this.rect.h > layer.h && this.rect.vy > 0) {
            this.rect.vy = -this.rect.vy
        }
        this.rect.x += this.rect.vx * correction;
        this.rect.y += this.rect.vy * correction;
    }

    collision(withWhom, whatToDo,_this) {
        if (
            withWhom.rect.y <= this.rect.y + this.rect.h && withWhom.rect.y >= this.rect.y && withWhom.rect.x <= this.rect.x + this.rect.w && withWhom.rect.x >= this.rect.x ||
            withWhom.rect.y + withWhom.rect.h >= this.rect.y && withWhom.rect.y <= this.rect.y + this.rect.h && withWhom.rect.x + withWhom.rect.w >= this.rect.x && withWhom.rect.x <= this.rect.x + this.rect.w
        ) {
            whatToDo(_this);
        }
    }
}