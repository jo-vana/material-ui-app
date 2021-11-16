import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user.model";
import { UserService } from "./users/user.service";
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class DataStorageService {

    constructor(private http: HttpClient,
                private userService: UserService) {}

    
    fetchUsers() {
        // return this.http.get(`https://test-app-171e0-default-rtdb.firebaseio.com/users.json'`) as Observable<User[]>;
        this.http.get<User[]>('https://test-app-171e0-default-rtdb.firebaseio.com/users.json')
        .subscribe(users => {
            this.userService.setUsers(users);
            console.log('fetched users list', users);
        })
    }

    updateUser() {
        console.log('changed')
    }
}