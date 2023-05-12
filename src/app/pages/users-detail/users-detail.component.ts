import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/users.interface';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent {
  id: number | undefined
  user: User;

	constructor(
		private router: Router,
	) {
		const state = this.router.getCurrentNavigation()?.extras.state;
		this.user = state ? state['user'] : undefined;
    this.id = this.user?.id
  }
}
