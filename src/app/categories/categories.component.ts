import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { AuthService } from '../auth.service';
import { fadeInOutAnimation } from '../animations';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: [fadeInOutAnimation]
})

export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(public authService: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    // Use HttpClient to fetch categories from the API
    this.http.get<any[]>('https://fakestoreapi.com/categories').subscribe((data: any[]) => {
      this.categories = data;
    });
  }
}

