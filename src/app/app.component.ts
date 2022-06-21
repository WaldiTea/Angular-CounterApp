import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Counter';
  count = 0;
  increment = () => {
    this.count++;
    console.log(this.count);
  };
  decrement = () => {
    this.count--;
    console.log(this.count);
  };
}
