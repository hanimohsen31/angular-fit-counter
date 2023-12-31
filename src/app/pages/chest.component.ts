import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { excercises } from '../store/excercises';
import { modules } from '../shared/shared/shared.module';

@Component({
  selector: 'app-chest',
  standalone: true,
  imports: [CommonModule, FormsModule, ...modules],
  template: `
    <div class="container">
      <app-card
        *ngFor="let elm of excercisesList"
        [title]="elm.title"
        [ex]="elm.ex"
        [img]="elm.img"
        [desc]="elm.desc"
      ></app-card>
    </div>
  `,
})
export class ChestComponent {
  ngOnInit() {}
  excercisesList: any = excercises?.chest;
}
