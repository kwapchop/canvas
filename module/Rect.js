import {Helpers} from "./Helpers";
import {Layout} from "./Layout";

export class Rect {
    constructor({x, y, w, h, vx, vy,color,layer}) {
        this.helpers = new Helpers();
        if(!w){
            this.w = this.helpers.randomInteger(10,layer.canvas.width/10);
        }else {
            this.w = w;
        }
        if(!h){
            this.h = this.helpers.randomInteger(10,layer.canvas.width/10);
        }else {
            this.h = h;
        }
        if(!x){
            this.x = this.helpers.randomInteger(100,layer.canvas.width - this.w);
        }else {
            this.x = x;
        }
        if(!y){
            this.y = this.helpers.randomInteger(100,layer.canvas.height - this.h);
        }else {
            this.y = y;
        }

        if(!vx){
            this.vx = this.helpers.randomInteger(10,800)
        }else {
            this.vx =  vx;
        }
        if(!vy){
            this.vy = this.helpers.randomInteger(10,800)
        }else {
            this.vy =  vy;
        }
        if(!color){
            this.color = this.helpers.getRandomColor();
        }else{
            this.color = color;
        }

    }

    update(layer, correction) {
        if (this.x <= 0 && this.vx < 0 || this.x + this.w > layer.w && this.vx > 0) {
            this.vx = -this.vx
        }
        if (this.y <= 0 && this.vy < 0 || this.y + this.h > layer.h && this.vy > 0) {
            this.vy = -this.vy
        }
        this.x += this.vx * correction;
        this.y += this.vy * correction;
    }

    collision(withWhom, whatToDo) {
        if (
            withWhom.y <= this.y + this.h && withWhom.y >= this.y && withWhom.x <= this.x + this.w && withWhom.x >= this.x ||
            withWhom.y + withWhom.h >= this.y && withWhom.y <= this.y + this.h && withWhom.x + withWhom.w >= this.x && withWhom.x <= this.x + this.w
        ) {
            whatToDo();
        }
    }
}