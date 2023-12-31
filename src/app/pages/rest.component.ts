import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { excercises } from '../store/excercises';
import { modules } from '../shared/shared/shared.module';

@Component({
  selector: 'app-rest',
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
export class RestComponent {
  ngOnInit() {}
  excercisesList: any = excercises?.rest;
}
