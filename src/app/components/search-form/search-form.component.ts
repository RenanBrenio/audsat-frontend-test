import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  searchForm = this.fb.group({
    name: [''],
    username: [''],
    email: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  onSubmit() {
    let query: {
      name?: string
      username?: string
      email?: string
    } = Object.fromEntries(Object.entries(this.searchForm.value).filter(([_, v]) => v != ''));

    // const asString = new URLSearchParams(query).toString();
    this.router.navigate(
      ['/users'],
      { queryParams: query }
    )
  }
}
