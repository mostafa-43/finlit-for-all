import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Category } from '../../core/services/mock-data.service';
import { MockDataService } from '../../core/services/mock-data.service';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './topics.html',
  styleUrl: './topics.css'
})
export class Topics implements OnInit {
  categories: Category[] = [];
  loading = true;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.mockDataService.getAllCategories().subscribe(
      categories => {
        this.categories = categories;
        this.loading = false;
      },
      error => {
        console.error('Error loading categories:', error);
        this.loading = false;
      }
    );
  }
}
