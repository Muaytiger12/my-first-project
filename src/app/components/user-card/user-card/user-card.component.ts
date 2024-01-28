import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../services/userService/user-service.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
@Input({required: true}) user!: User;
@Output() deleteUser = new EventEmitter<User>();
}
