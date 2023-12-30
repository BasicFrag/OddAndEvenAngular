import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OddAndEven-Angular';
  oddAndEvenNumbers: number[] = []
  constructor() {

  }
  // Could have a more appropiate name like onIntervalFired?
  gameCounterStarted(eventNum: number) {
    this.oddAndEvenNumbers.push(eventNum);
  }
}
