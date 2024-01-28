import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name?: string;
  username?: string;
  phone?: number;
  website?: string;
  email?: string;
  address?: {
    street?: string;
    suite?: any;
    city?: string;
    zipcode?: number;
    geo?: {
      lat?: number;
      lng?: number;
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  public users: User[] = [];
  constructor() {}
  setUsers(users: User[]) {
    this.users = users;
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
