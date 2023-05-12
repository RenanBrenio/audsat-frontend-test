import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, take } from 'rxjs';
import { Post } from 'src/app/interfaces/posts.interface';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-delete-post-dialog',
  templateUrl: './delete-post-dialog.component.html',
  styleUrls: ['./delete-post-dialog.component.scss']
})
export class DeletePostDialogComponent {
  constructor(
    private usersService: UsersService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DeletePostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { post: Post },
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDeletePost() {
    this.usersService.deletePost(this.data.post.id)
    .pipe(
      take(1),
      catchError(() => {
        let snackBarRef = this._snackBar.open('Ops... Não foi possível apagar o post', 'Recarregar');
        snackBarRef.afterDismissed().subscribe(() => location.reload());
        return []
      })
    )
    .subscribe(data => {
      this._snackBar.open('Post deletado com sucesso', '', {
        duration: 3000
      });
      this.dialogRef.close();
    })
  }
}
