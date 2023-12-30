import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { modules } from './shared/shared/shared.module';
import { excercises } from './store/excercises';
import { ExcercisesService } from './store/excercises.service';

let shared = [...modules];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ...shared],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fit-counter';
  constructor(private ExcercisesService: ExcercisesService) {}
  excercisesList = excercises;
  
  console() {
    this.ExcercisesService.allListData$.subscribe((res: any) =>
      console.log(res)
    );
  }
}
