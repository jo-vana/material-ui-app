import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataStorageService } from '../data-storage.service';
import { User } from '../user.model';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dateOfBirth', 'action'];
  

  constructor(private userService: UserService,
              private dataService: DataStorageService,
              public dialog: MatDialog) { }


  ngOnInit(): void {
    
  }

  get dataSource() {
    return this.userService.getUsers();
  }

  openDialog(id: number, firstName: string, lastName: string, dateOfBirth: string) :void {
    console.log('edit');
    const user = this.dataSource.find((u: any) => u.id === id);
    if (user) {
      user.firstName = firstName;
      user.lastName = lastName;
      user.dateOfBirth = dateOfBirth;
    } console.log(user?.firstName)
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: {firstName: firstName, lastName: lastName, dateOfBirth: dateOfBirth}
    })
    dialogRef.afterClosed().subscribe(result => {
      this.dataService.updateUser();
      console.log(result);
    })
  }


}
