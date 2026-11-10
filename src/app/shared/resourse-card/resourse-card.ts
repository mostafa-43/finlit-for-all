import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resource } from '../../core/services/mock-data.service';

@Component({
  selector: 'app-resourse-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resourse-card.html',
  styleUrl: './resourse-card.css'
})
export class ResourseCard {
  @Input() resource!: Resource;
}
