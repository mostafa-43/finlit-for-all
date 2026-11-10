import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../core/services/mock-data.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  form!: FormGroup;
  submitted = false;
  loading = false;
  success = false;
  error = '';
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private fb: FormBuilder,
    private mockDataService: MockDataService
  ) {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        agreeToTerms: [false, Validators.requiredTrue]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    this.success = false;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    const { email, password, confirmPassword } = this.form.value;

    this.mockDataService.submitSignup(email, password, confirmPassword).subscribe(
      response => {
        this.loading = false;
        if (response.success) {
          this.success = true;
          this.form.reset();
          this.submitted = false;
          // Redirect after success
          setTimeout(() => {
            window.location.href = '/login';
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

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get agreeToTerms() {
    return this.form.get('agreeToTerms');
  }
}
