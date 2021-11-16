import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { User } from "src/app/user.model";
import { UserService } from "../user.service";

@Component ({
    selector: 'app-dialog-box',
    templateUrl: './dialog-box.component.html',
    styleUrls: ['./dialog-box.scss']
})

export class DialogBoxComponent {

    constructor(private userService: UserService,
        public dialogRef: MatDialogRef<DialogBoxComponent>,
        @Inject(MAT_DIALOG_DATA) public data: User) {}

    ngOnInit() {
        
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    
}