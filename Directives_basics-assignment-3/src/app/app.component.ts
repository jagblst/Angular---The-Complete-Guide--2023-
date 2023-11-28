import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showParagraph = false;
  count = [];

  onCount() {
    this.count.push(this.count.length + 1);
  }
}
