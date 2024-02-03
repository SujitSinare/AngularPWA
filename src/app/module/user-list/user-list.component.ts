import { Component } from '@angular/core';
import { BackgroundSyncService } from 'src/app/common/service/background-sync.service';
import { UserService } from 'src/app/module/user-list/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  userList: any;

  constructor(
    private userService: UserService,
    private backgroundSync: BackgroundSyncService
  ) {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUserList().subscribe(
      (data) => {
        this.userList = data;
      },
      (error) => {
        console.log('Error:', error);
        this.backgroundSync.setBackgroundSync('get-data');
      }
    );
  }
}
