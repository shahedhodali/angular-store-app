import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  newProduct: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  addProduct(): void {
    this.http.post('https://fakestoreapi.com/products', this.newProduct).subscribe(
      (response: any) => {
        this.router.navigate(['/admin']); // Navigate back to admin page after adding
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }
}

