import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Counter';
  count = 0;
  incrementCounter = () => {
    this.count++;
  };
  decrementCounter = () => {
    this.count--;
  };
  resetCounter = () => {
    this.count = 0;
  };
}
