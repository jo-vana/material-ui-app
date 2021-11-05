import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = "Material UI App";
  notifications = 5;
  constructor(private dataStorage: DataStorageService) { }

  ngOnInit(): void {
  }

  onFetchUsers() {
    this.dataStorage.fetchUsers();
  }

}
