import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resource } from '../../core/services/mock-data.service';
import { MockDataService } from '../../core/services/mock-data.service';
import { ResourseCard } from '../../shared/resourse-card/resourse-card';

@Component({
  selector: 'app-resourses',
  standalone: true,
  imports: [CommonModule, ResourseCard],
  templateUrl: './resourses.html',
  styleUrl: './resourses.css'
})
export class Resourses implements OnInit {
  resources: Resource[] = [];
  selectedCategory: string = '';
  loading = true;
  categories: string[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.loadResources();
    this.loadCategories();
  }

  loadResources() {
    this.loading = true;
    if (this.selectedCategory) {
      this.mockDataService.getResourcesByCategory(this.selectedCategory).subscribe(
        resources => {
          this.resources = resources;
          this.loading = false;
        },
        error => {
          console.error('Error loading resources:', error);
          this.loading = false;
        }
      );
    } else {
      this.mockDataService.getAllResources().subscribe(
        resources => {
          this.resources = resources;
          this.loading = false;
        },
        error => {
          console.error('Error loading resources:', error);
          this.loading = false;
        }
      );
    }
  }

  loadCategories() {
    // Extract unique categories from resources
    this.mockDataService.getAllResources().subscribe(
      resources => {
        const uniqueCategories = [...new Set(resources.map(r => r.category))].sort();
        this.categories = uniqueCategories;
      },
      error => {
        console.error('Error loading categories:', error);
      }
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category === this.selectedCategory ? '' : category;
    this.loadResources();
  }
}
