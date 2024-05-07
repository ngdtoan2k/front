// import { Component, inject } from '@angular/core';
// import { UserserviceService } from '../userservice.service';
// import { User } from '../user';
// import { CommonModule } from '@angular/common';
// import { UserdetailComponent } from "../userdetail/userdetail.component";

// @Component({
//     selector: 'app-user-list',
//     standalone: true,
//     templateUrl: './user-list.component.html',
//     styleUrl: './user-list.component.css',
//     imports: [CommonModule, UserdetailComponent]
// })
// export class UserListComponent {
// userService: UserserviceService = inject(UserserviceService);
// userlist:User[] =[];

// constructor(){
// }
// ngOnInit() {
//   this.userService.getAll()
//     .subscribe((data: User[]) => {
//       this.userlist = data;
//     });
// }
// }
import { Component, OnInit, inject } from '@angular/core';
import { userservice } from '../userservice.service';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { UserdetailComponent } from '../userdetail/userdetail.component';


@Component({
  selector: 'app-user-list',
  standalone:true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports :[CommonModule, UserdetailComponent]
})
export class UserListComponent  {
  userlist:User[]=[];
  userService: userservice = inject(userservice);

  constructor() {
    this.userService.getAll().then((userList: User[]) => {
      this.userlist = userList;
      
    });
  }

  

 
}
