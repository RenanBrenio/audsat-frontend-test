import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersDetailComponent } from './pages/users-detail/users-detail.component';
import { UserInfosComponent } from './components/user-infos/user-infos.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DeletePostDialogComponent } from './components/delete-post-dialog/delete-post-dialog.component';

const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatCardModule,
  MatIconModule,
  MatExpansionModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatMenuModule,
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchFormComponent,
    UsersListComponent,
    UsersComponent,
    UsersDetailComponent,
    UserInfosComponent,
    PostsListComponent,
    CommentsComponent,
    DeletePostDialogComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
