import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../core/services/mock-data.service';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './newsletter-form.html',
  styleUrl: './newsletter-form.css'
})
export class NewsletterForm {
  form!: FormGroup;
  submitted = false;
  success = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private mockDataService: MockDataService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    this.success = false;

    if (this.form.invalid) {
      return;
    }

    const email = this.form.get('email')?.value;
    this.mockDataService.submitNewsletter(email).subscribe(
      response => {
        if (response.success) {
          this.success = true;
          this.form.reset();
          this.submitted = false;
          // Hide success message after 3 seconds
          setTimeout(() => {
            this.success = false;
          }, 3000);
        } else {
          this.error = response.message;
        }
      },
      error => {
        this.error = 'An error occurred. Please try again.';
      }
    );
  }

  get email() {
    return this.form.get('email');
  }
}
