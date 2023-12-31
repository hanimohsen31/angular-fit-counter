import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExcercisesService } from '../store/excercises.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `Hello Bitch`,
})
export class HomeComponent {
  constructor(private ExcercisesService: ExcercisesService) {}
  ngOnInit() {}
}
