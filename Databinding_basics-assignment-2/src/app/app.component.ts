import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  userName = '';
  onUpdateUserName(event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName() {
    this.userName = '';
  }
}
