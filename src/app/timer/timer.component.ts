import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
// @Injectable({ providedIn: 'root' })
export class TimerComponent implements OnInit {
  title = 'Get Input Box Value';
  displayVal = '';
  getValue(val: string) {
    console.warn(val);
    this.displayVal = val;
  }

  constructor() {
    // Called first time before the ngOnInit()
    let counter: number = 5;
    (function repeat() {
      if (counter > 0) {
        setTimeout(() => {
          counter = counter - 1;
          console.log(counter);
          repeat();
        }, 1000);
      }
    })();
    // let counter: number = 5;
    // this.counter = counter;
    // for (let i = 0; i < 5; i++) {
    //   setTimeout(() => {
    //     this.counter = this.counter - 1;
    //   }, 1000);
    // }

    // let i2 = 0;
    // let max2 = 5;

    // (function repeat() {
    //   if (++i2 > 5) return;
    //   setTimeout(function () {
    //     console.log('waited for: ' + i2 + ' seconds');
    //     repeat();
    //   }, 1000);
    //   if (i2 >= 5){
    //     console.log('yayayayayayaya, waited for 5 seconds')
    //   }
    // })();

    //   private subscription: Subscription;

    //   public dateNow = new Date();
    //   public dDay = new Date('Jan 01 2021 00:00:00');
    //   milliSecondsInASecond = 1000;
    //   hoursInADay = 24;
    //   minutesInAnHour = 60;
    //   SecondsInAMinute  = 60;

    //   public timeDifference;
    //   public secondsToDday;
    //   public minutesToDday;
    //   public hoursToDday;
    //   public daysToDday;

    //   private getTimeDifference () {
    //       this.timeDifference = this.dDay.getTime() - new  Date().getTime();
    //       this.allocateTimeUnits(this.timeDifference);
    //   }

    // private allocateTimeUnits (timeDifference) {
    //       this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    //       this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    //       this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    //       this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  ngOnInit(): void {
    // Called after the constructor and called  after the first ngOnChanges()
  }
}
