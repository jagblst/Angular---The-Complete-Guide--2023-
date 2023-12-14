import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstoObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstoObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.firstoObsSubscription = customIntervalObservable.subscribe((data) =>
      console.log(data)
    );
  }

  ngOnDestroy(): void {
    this.firstoObsSubscription.unsubscribe();
  }
}
