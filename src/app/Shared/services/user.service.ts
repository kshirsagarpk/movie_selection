import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: 1,
      fullName: "Prachi Kshirsagar",
      email: "prachi@gmail.com",
      password: "123456",
      mobileNo: 8888888888,
      city: "Pune",
    }
  ]

  constructor() { }

  save(user: User) {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

  isMobileNoValid(mobileNo: number): boolean {
    return this.users.find(x => x.mobileNo === mobileNo) ? false : true;
  }

  isValid(mobileNo: number, password: string): boolean {
    return this.users.find(x => x.mobileNo === mobileNo && x.password === password) ? true : false;
  }
}
