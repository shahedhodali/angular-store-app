// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.sass']
// })
// export class LoginComponent {

// }


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    const isAuthenticated = this.authService.login(this.username, this.password);
    if (isAuthenticated) {
      console.log('Login successful');
      if (this.authService.userRole === 'admin') {
        console.log('Logged in as admin');
        // You can redirect the admin user to an admin-specific page here
      } else {
        console.log('Logged in as user');
        // Redirect the regular user to a different page
      }
    } else {
      console.log('Login failed');
    } 
  }
}
