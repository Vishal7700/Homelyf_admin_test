import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatButtonModule,
  ],
  providers: [UserService, HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  // loginForm = new FormGroup({
  //   emailAddress: new FormControl(''),
  //   password: new FormControl(''),
  //   type: new FormControl('A'),
  //   location: new FormControl('string'),
  // });

  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      type: ['A'],
      location: ['string'],
    });
  }

  ngOnInit() {
    this.getVendors();
  }

  fieldTextType: boolean = false;

  togglePasswordVisibility(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  adminLogin(formData: any) {
    this.userService.login(formData).subscribe(
      (resp: any) => {
        console.log(resp);
        console.log('resp');
        alert('Login successful');
      },
      (error: any) => {
        alert('Login failed. Please check your credentials.');
      }
    );
  }

  getVendors() {
    this.userService.getAllVendors().subscribe((resp: any) => {});
  }
}




