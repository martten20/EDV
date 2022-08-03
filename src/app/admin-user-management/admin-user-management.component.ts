import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class AdminUserManagementComponent implements OnInit {
  users: User[] = [];
  selectedUsers: User[] = [];

  constructor(private userService:UserService, private messageService:MessageService, private confirmationService:ConfirmationService){}
  
  ngOnInit(): void {
    this.users = this.userService.getData();
  }

  deleteSelectedUsers(){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected users?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter(val => !this.selectedUsers.includes(val));
        this.messageService.add({severity:'error', summary: 'Successful', detail: this.selectedUsers.length + ' Users Deleted'});
        this.selectedUsers = [];
      }
  });

  }

  AcceptUser(user:User){
    user.status = "Registered_User"
    this.messageService.add({severity:'success', summary: 'Successful', detail: user.firstname + ' ' + user.lastname + ' is accepted'});
  }

  DeleteUser(user:User){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.firstname + ' ' + user.lastname + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter(val => val.email !== user.email);
        this.selectedUsers = [];
        this.messageService.add({severity:'error', summary: 'Successful', detail: user.firstname + ' ' + user.lastname + ' Deleted'});
      }
  });
  }
}
