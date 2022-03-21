import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalEvent = new EventEmitter<number>();
  interval;
  nums = 0;

  constructor() {
    console.log(this.nums);
  }

  ngOnInit(): void {
  }

  startCount() {
    this.interval = setInterval( () => {
        this.nums++;
        this.intervalEvent.emit(
          this.nums
        );
      }, 1000
    );
  }
  stopInterval() {
    this.nums = 0;
    clearInterval(this.interval);
  }

}
