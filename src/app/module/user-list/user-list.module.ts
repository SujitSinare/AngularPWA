import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, UserListRoutingModule, HttpClientModule],
  providers: [UserService],
})
export class UserListModule {}
