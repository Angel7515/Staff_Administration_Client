import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  listUsers: User[] = [
    {id: 1, last_name: 'name user1', name:'user1', position: 'position user1', supervisor: 'supervisor name1'},
    {id: 2, last_name: 'name user2', name:'user2', position: 'position user2', supervisor: 'supervisor name2'}
  ]
}
