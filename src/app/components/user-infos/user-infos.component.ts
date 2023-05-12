import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/users.interface';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss']
})
export class UserInfosComponent {
  @Input() user: User
}
