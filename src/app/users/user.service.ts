import { Injectable } from "@angular/core";
import { User } from "../user.model";

@Injectable({providedIn: 'root'})

export class UserService {

    private users: User[] = [];

    getUsers() {
        return this.users;
    }

    setUsers(users: User[]) {
        this.users = users;
        console.log('new user list in service',this.users)
    }
}