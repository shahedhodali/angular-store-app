// import { Component, OnInit, ViewChild } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { HttpClient } from '@angular/common/http';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.scss']
// })
// export class AdminComponent implements OnInit {
//   displayedColumns: string[] = ['category', 'title', 'actions'];
//   productsDataSource: MatTableDataSource<any>; // Define MatTableDataSource without initial value
//   @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

//   newProduct: any = {};
//   updateProductData: any = {};

//   constructor(private authService: AuthService, private http: HttpClient, private router: Router) {
//     this.productsDataSource = new MatTableDataSource<any>(); // Initialize MatTableDataSource here
//   }

//   ngOnInit(): void {
//     this.fetchCategoriesAndProducts();
//   }

//   fetchCategoriesAndProducts(): void {
//     this.http.get<any[]>('https://fakestoreapi.com/products').subscribe(
//       (data: any[]) => {
//         this.productsDataSource.data = data; // Assign fetched data to MatTableDataSource
//         this.productsDataSource.paginator = this.paginator;
//       },
//       (error) => {
//         console.error('Error fetching data:', error);
//       }
//     );
//   }

//   addProduct(): void {
//     this.http.post('https://fakestoreapi.com/products', this.newProduct).subscribe(
//       (response: any) => {
//         // Refresh products after adding
//         this.fetchCategoriesAndProducts();
//         // Clear the newProduct object for the next entry
//         this.newProduct = {};
//       },
//       (error) => {
//         console.error('Error adding product:', error);
//       }
//     );
//   }

//   updateProduct(): void {
//     const productId = this.updateProductData.id;
//     const url = `https://fakestoreapi.com/products/${productId}`;

//     this.http.put(url, this.updateProductData).subscribe(
//       (response: any) => {
//         // Refresh products after updating
//         this.fetchCategoriesAndProducts();
//         // Clear the updateProductData object for the next update
//         this.updateProductData = {};
//       },
//       (error) => {
//         console.error('Error updating product:', error);
//       }
//     );
//   }
  
//   deleteProduct(productId: number): void {
//     const url = `https://fakestoreapi.com/products/${productId}`;

//     this.http.delete(url).subscribe(
//       () => {
//         // Refresh products after deletion
//         this.fetchCategoriesAndProducts();
//       },
//       (error) => {
//         console.error('Error deleting product:', error);
//       }
//     );
//   }

//   goToAddProductForm(): void {
//     this.router.navigate(['/add-product']);
//   }

//   isAdmin(): boolean {
//     return this.authService.userRole === 'admin';
//   }
// }


import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['category', 'title', 'actions'];
  productsDataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  newProduct: any = {};
  updateProductData: any = {};

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router // Inject the Router module
  ) {
    this.productsDataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.fetchCategoriesAndProducts();
  }

  fetchCategoriesAndProducts(): void {
    this.http.get<any[]>('https://fakestoreapi.com/products').subscribe(
      (data: any[]) => {
        this.productsDataSource.data = data;
        this.productsDataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  addProduct(): void {
    this.http.post('https://fakestoreapi.com/products', this.newProduct).subscribe(
      (response: any) => {
        this.fetchCategoriesAndProducts();
        this.newProduct = {};
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }

  updateProduct(): void {
    const productId = this.updateProductData.id;
    const url = `https://fakestoreapi.com/products/${productId}`;

    this.http.put(url, this.updateProductData).subscribe(
      (response: any) => {
        this.fetchCategoriesAndProducts();
        this.updateProductData = {};
      },
      (error) => {
        console.error('Error updating product:', error);
      }
    );
  }

  deleteProduct(productId: number): void {
    const url = `https://fakestoreapi.com/products/${productId}`;

    this.http.delete(url).subscribe(
      () => {
        this.fetchCategoriesAndProducts();
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }

  goToAddProductForm(): void {
    this.router.navigate(['/add-product']);
  }

  isAdmin(): boolean {
    return this.authService.userRole === 'admin';
  }
}



