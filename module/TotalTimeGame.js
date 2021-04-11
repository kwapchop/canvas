export class TotalTimeGame {
    constructor() {
        this.gameTime = {
            start: new Date().getTime(),
            end: null,
            duration: 0,
            timePause: 0,
            pauseStart: 0,
        };
        this.gameStop = false;
    }

    updateTime() {
        if (!this.gameStop) {
            //Подсчет общего времени в игре
            this.gameTime.duration = new Date().getTime() - this.gameTime.start - this.gameTime.timePause;
        }
    }

    stopTime() {
        this.gameStop = !this.gameStop;
        if (this.gameStop) {
            this.pauseStart = new Date().getTime();
        } else {
            this.gameTime.timePause += new Date().getTime() - this.pauseStart;

        }
    }

    displayTime() {
        if (!this.gameStop) {
            console.log('Play', Math.floor((this.gameTime.duration / 1000).toFixed(3)))
        }
    }


}