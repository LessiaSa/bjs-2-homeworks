class AlarmClock {
    constructor (intervalId = null) {
        this.intervalId = intervalId;
        this.alarmCollection = [];
    }
    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error("Отсутствуют обязательные аргументы");
        } else if (this.alarmCollection.find(clock => clock.time === time)) {
            console.warn("Уже присутствует звонок на это же время");
        }
        return this.alarmCollection.push({time, callback, canCall:true});
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
    }
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, 5);
    }

    start() {
        if (this.intervalId !== null) {
            return;
        } else if (this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(clock => {
                if(clock.time === this.getCurrentFormattedTime() && clock.canCall) {
                    clock.canCall = false;
                    clock.callback();
                }
            })
        }, 1000));
        return;
    }

    stop() {
        if(this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetAllCalls() {
            this.alarmCollection.forEach(clock => clock.canCall = true);
        }
    

    clearAlarms() {
        this.stop();
        return this.alarmCollection = [];
    }
}

let clock;
clock = new AlarmClock();
const callback = f => f;
clock.addClock("10-00",f => f);
clock.addClock("10-00", f => f);
clock.addClock("10-00", f => f);
clock.clearAlarms();
 console.log(clock.alarmCollection.length)
clock.addClock("10-00", f => f);
clock.addClock("10-00", f => f);
clock.addClock("10-00", f => f);
console.log(clock.alarmCollection.length)
