import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  num = 0;
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.num + 1);
      this.num++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
