import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  listUsers: User[] = []

  constructor(private _userService: UserService, private toastr: ToastrService ){  }

  ngOnInit(): void{
    this.getlistUsers()
  }

  getlistUsers(){
    this._userService.getlistUsers().subscribe((data: User[]) =>{
      this.listUsers = data;
    })
  }

  deleteUser(staff_num:number) {
    this._userService.deleteUser(staff_num).subscribe(() => {
      this.getlistUsers();
      this.toastr.warning('Usuario eliminado con Exito! ','Usuario Eliminado');
    })
  }

}
