import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, take } from 'rxjs';
import { User } from './../../interfaces/users.interface';
import { UsersService } from './../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'username', 'email', 'phone'];
  listUsers: User[] | undefined;
  isLoading: boolean = true
  hasError: boolean = false
  dataSource: any;

  constructor(
    private usersService: UsersService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngOnInit() {
    this.usersService.getAllPosts()
    .pipe(
      take(1),
      catchError(() => {
        this.isLoading = false;
        this.hasError = true;
        this.listUsers = undefined;

        let snackBarRef = this._snackBar.open('Ops... Nenhum usuário foi encontrado', 'Recarregar');
        snackBarRef.afterDismissed().subscribe(() => location.reload());
        
        return [];
      })
    )
    .subscribe(data => {
      this.isLoading = false;
      this.hasError = false;
      this.listUsers = data
      this.dataSource = new MatTableDataSource(this.listUsers)
      this.dataSource.paginator = this.paginator;
      // console.log(this.listUsers);
    })
  }
}