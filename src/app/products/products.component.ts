import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fadeInOutAnimation } from '../animations'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [fadeInOutAnimation] 
})
export class ProductsComponent implements OnInit {
  @Input() categoryId: string | undefined;
  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    // Use HttpClient to fetch products by categoryId from the API
    this.http.get<any[]>(`https://fakestoreapi.com/products/category/${this.categoryId}`).subscribe((data: any[]) => {
      this.products = data;
    });
  }
}

