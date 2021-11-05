import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dateOfBirth', 'action'];
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

  get dataSource() {
    return this.userService.getUsers();
  }

  openDialog() {

  }


}
