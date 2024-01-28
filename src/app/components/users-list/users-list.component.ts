import { Component } from '@angular/core';
import { UserApiServiceService } from '../../services/userApiService/user-api-service.service';
import {
  User,
  UserServiceService,
} from '../../services/userService/user-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  constructor(
    private userApiService: UserApiServiceService,
    public usersService: UserServiceService
  ) {}

  ngOnInit() {
    this.userApiService.getUsers().subscribe((response: any) => {
      this.usersService.setUsers(response);
    });
  }

  deleteUser(user: User) {
    this.usersService.deleteUser(user.id);
  }
}
