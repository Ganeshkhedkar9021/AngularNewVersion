import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any = [];
  isList:boolean = true;
  userInfo:any={};

  constructor(private user:UsersService) { }
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.isList = true;
    this.user.getuserlist().subscribe(data=>{
      if(!data.error){
        this.users = data.result;
      }
    },
    error=>{
      alert("something wrong");
    });
  }
  addUser(){
    this.isList = false;
      if(Object.keys(this.userInfo).length > 0){
        this.user.adduser(this.userInfo).subscribe(data=>{
          if(!data.error){
            this.users = data.result;
            this.userInfo={};
            this.isList = true;
            this.getUsers();
          }

        },
        error=>{
          alert("something wrong");
        });
      }
  }
  editUser(userInfo){
    this.isList = false;
    this.userInfo = userInfo;
  }
}
