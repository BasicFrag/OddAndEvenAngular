import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() numCounter = new EventEmitter<number>();
  intervalId: number = 0;
  counter: number = 0;

  constructor() {}
  onStartGame() {
    const intervalId = window.setInterval(() => {
      this.numCounter.emit(this.counter++);
    }, 1000);
    this.intervalId = intervalId;
  }

  onPauseGame() {
    if (this.intervalId <= 0) return;
    clearInterval(this.intervalId);
  }

  onStopGame() {
    if (this.intervalId <= 0) return;
    clearInterval(this.intervalId);
    this.counter = 0;
  }
}
