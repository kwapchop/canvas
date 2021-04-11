export class Painter {
    constructor(context) {
        this.mouseIsDown = false;
        this.context = context;
    }


    mouseHandlerDown(event) {
        this.mouseIsDown = true;
        this.context.beginPath();
        this.context.moveTo(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop)
    }

    mouseHandlerUp() {
        this.mouseIsDown = false;
    }

    mouseHandlerMove(event) {
        if (this.mouseIsDown) {
            this.draw(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop);
        }
    }

    draw(x, y) {
        this.context.lineTo(x, y);
        // this.context.strokeStyle = "red";
        this.context.stroke();
    }


    startListen() {
        window.addEventListener('mousedown', this.mouseHandlerDown.bind(this))
        window.addEventListener('mouseup', this.mouseHandlerUp.bind(this))
        window.addEventListener('mousemove', this.mouseHandlerMove.bind(this))
    }

    endListen() {
        window.removeEventListener('mousedown', this.mouseHandlerDown.bind(this))
        window.removeEventListener('mouseup', this.mouseHandlerUp.bind(this))
        window.removeEventListener('mousemove', this.mouseHandlerMove.bind(this))
    }

}