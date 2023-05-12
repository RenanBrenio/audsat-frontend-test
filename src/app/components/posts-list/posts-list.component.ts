import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, take } from 'rxjs';
import { Post } from './../../interfaces/posts.interface';
import { UsersService } from './../../services/users.service';
import { DeletePostDialogComponent } from '../delete-post-dialog/delete-post-dialog.component';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  @Input() userId: number
  panelOpenState = false;
  listPosts: Post[];
  isLoading: boolean = true

  constructor(
    private usersService: UsersService,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.usersService.getPostsFromUser(this.userId)
    .pipe(
      take(1),
      catchError(() => {
        this.isLoading = false;

        let snackBarRef = this._snackBar.open('Ops... Nenhum post foi encontrado', 'Recarregar');
        snackBarRef.afterDismissed().subscribe(() => location.reload());
        
        return [];
      })
    )
    .subscribe(data => {
      this.isLoading = false;
      this.listPosts = data
    })
  }

  openPostDetails(post: Post) {
    this.isLoading = true;
    this.usersService.getCommentsFromPost(post.id)
    .pipe(
      take(1),
      catchError(() => {
        this.isLoading = false;

        let snackBarRef = this._snackBar.open('Ops... Nenhum comentário foi encontrado', 'Recarregar');
        snackBarRef.afterDismissed().subscribe(() => location.reload());
        
        return [];
      })
    )
    .subscribe(data => {
      this.isLoading = false;
      post.comments = data
    })
  }

  clickOnDeletePost(post: Post) {
    const dialogRef = this._dialog.open(DeletePostDialogComponent, {
      data: { post: post },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}