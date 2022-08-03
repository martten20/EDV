import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getData(): User[]{
    let data: User[] = [
      new User("Mohamed","Adnan","Mohamed@gmail.com","Waiting for Confirmation"),
      new User("Mohamed","Reda","Reda@gmail.com","Waiting for Confirmation"),
      new User("Amr","Hazem","amr@gmail.com","Admin"),
      new User("Martten","Amgad","Martten@gmail.com","Registered_User")
    ]

    return data;

  }
  AcceptUserRegistration(user:User): void{}

  DeleteUser(user:User):void{}

  DeleteMultipleUsers(users:User[]) :void{}
}
