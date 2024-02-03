import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularPWA';
  private readonly publicKey =
    'BM5l3YqTaemxPP0-O0Z1triMXQvwZWjFt2uvW9cnVuyb1CIvlQ5Z7mQwKLinzIWwsVOOogD9NiagzJp8AxbAkMM';

  constructor(private router: Router, private swPush: SwPush) {}

  ngOnInit() {
    this.pushSubscription();

    this.swPush.notificationClicks.subscribe(({ action, notification }) => {
      window.open(notification.data.url);
    });
  }

  handleClick(type: string) {
    if (type == 'about') {
      this.router.navigateByUrl('/about');
    } else {
      this.router.navigateByUrl('/user-list');
    }
  }

  pushSubscription() {
    if (!this.swPush.isEnabled) {
      console.log('Push Notification not enabled.');
      return;
    }

    this.swPush
      .requestSubscription({
        serverPublicKey: this.publicKey,
      })
      .then((subscription) => console.log(JSON.stringify(subscription)))
      .catch((err) => console.log(err));
  }
}
