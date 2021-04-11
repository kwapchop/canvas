export class Layout {
    constructor(container) {
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d');
        container.appendChild(this.canvas)

        this.fitToContainer = this.fitToContainer.bind(this)
        this.fitToContainer(this.canvas);
        addEventListener('resize', () => this.fitToContainer(this.canvas))
    }

    fitToContainer(canvas) {
        this.w = this.canvas.width = canvas.offsetWidth;
        this.h = this.canvas.height = canvas.offsetHeight;
    }

}