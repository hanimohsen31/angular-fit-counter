import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { modules } from '../shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-excercises',
  standalone: true,
  imports: [CommonModule, FormsModule, ...modules, RouterModule],
  template: `
    <div
      class="container d-flex flex-wrap justify-content-center align-items-center my-5"
    >
      <a
        *ngFor="let elm of routes"
        [routerLink]="'/'+elm.path"
        class="card text-decoration-none m-2 p-1 text-uppercase text-center d-flex justify-content-center align-items-center"
        routerLinkActive="active"
        >{{ elm.path }}</a
      >
    </div>
  `,
  styles: `a {width : 90px ; height: 50px}`,
})
export class ExcercisesComponent {
  ngOnInit() {}
  routes = routes.slice(1, -4);
  // excercisesList: any = excercises?.back;
}
