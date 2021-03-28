import {Layout} from "./layout";
import {Loop} from "./Loop";

class App {
    constructor(container) {
        this.layer = new Layout(container)

        this.rect = {
            x:0,
            y:0,
            w:32,
            h:32,
            vx:500,
            vy:500
        }
        this.rect2 = {
            x:99,
            y:10,
            w:30,
            h:30,
            vx:600,
            vy:600
        }
        new Loop(this.update.bind(this),this.display.bind(this))
    }
    update(correction){
        if(this.rect.x <= 0 && this.rect.vx < 0 || this.rect.x + this.rect.w > this.layer.w && this.rect.vx > 0){
            this.rect.vx = -this.rect.vx
        }
        if(this.rect.y <= 0 && this.rect.vy < 0 || this.rect.y + this.rect.h > this.layer.h && this.rect.vy > 0){
            this.rect.vy = -this.rect.vy
        }
        this.rect.x += this.rect.vx * correction;
        this.rect.y += this.rect.vy * correction;

        if(this.rect2.x <= 0 && this.rect2.vx < 0 || this.rect2.x + this.rect2.w > this.layer.w && this.rect2.vx > 0){
            this.rect2.vx = -this.rect2.vx
        }
        if(this.rect2.y <= 0 && this.rect2.vy < 0 || this.rect2.y + this.rect2.h > this.layer.h && this.rect2.vy > 0){
            this.rect2.vy = -this.rect2.vy
        }
        this.rect2.x += this.rect2.vx * correction;
        this.rect2.y += this.rect2.vy * correction;
    }
    display(){
            this.layer.context.clearRect(0,0,this.layer.w,this.layer.h);
            this.layer.context.fillStyle = 'orange';
            this.layer.context.fillRect(this.rect.x,this.rect.y,this.rect.w,this.rect.h);
        this.layer.context.fillStyle = 'green';
        this.layer.context.fillRect(this.rect2.x,this.rect2.y,this.rect2.w,this.rect2.h);
    }
}


onload = function () {
    new App(document.querySelector('body'));
}