import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { UserService } from "./users/user.service";

@Injectable({providedIn: 'root'})

export class DataStorageService {

    constructor(private http: HttpClient,
                private userService: UserService) {}


    fetchUsers() {
        this.http.get<User[]>('https://test-app-171e0-default-rtdb.firebaseio.com/users.json')
        .subscribe(users => {
            this.userService.setUsers(users);
            console.log('fetched users list', users);
        })
    }
}