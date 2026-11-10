import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../core/services/mock-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  form!: FormGroup;
  submitted = false;
  loading = false;
  success = false;
  error = '';
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private mockDataService: MockDataService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    this.success = false;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    const { email, password } = this.form.value;

    this.mockDataService.submitLogin(email, password).subscribe(
      response => {
        this.loading = false;
        if (response.success) {
          this.success = true;
          // In a real app, save the token
          localStorage.setItem('token', response.token || '');
          // Redirect after success
          setTimeout(() => {
            // Navigate to home or dashboard
            window.location.href = '/';
          }, 1500);
        } else {
          this.error = response.message;
        }
      },
      error => {
        this.loading = false;
        this.error = 'An error occurred. Please try again.';
      }
    );
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
