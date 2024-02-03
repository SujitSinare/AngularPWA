import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundSyncService {
  constructor() {}

  setBackgroundSync(tag: string) {
    navigator.serviceWorker.ready
      .then((swRegistration: any) => swRegistration.sync.register(tag))
      .catch(console.log);
  }
}
