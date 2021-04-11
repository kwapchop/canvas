import {App} from './app'

export class ReInitGame {
    constructor(engine) {
        this.container = engine.container;
    }

    reinit() {
        this.container.innerHTML = '';
        new App(this.container);
    }

}