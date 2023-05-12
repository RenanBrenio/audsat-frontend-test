import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/users.interface';
import { Post } from '../interfaces/posts.interface';
import { Comment } from '../interfaces/comments.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<User[]> {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  getPostsFromUser(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
  }

  getCommentsFromPost(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
}
