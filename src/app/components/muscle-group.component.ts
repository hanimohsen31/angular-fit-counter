import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { excercises } from "../store/excercises";
import { CardComponent } from "./card/card.component";

@Component({
  selector: "app-muscle-group",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, CardComponent],
  template: `
    <nav class="group-navbar px-4">
      <a routerLink="/excercises" class="app-name">FitCounter</a>
      <a routerLink="/excercises" class="back-button">&#8592; Back</a>
    </nav>
    <!-- placeholder that reserves the fixed navbar's height -->
    <div class="navbar-spacer" aria-hidden="true"></div>
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
  styles: `
    :host {
      --navbar-height: 3.5rem;
    }

    .group-navbar {
      position: fixed;
      height: var(--navbar-height);
      box-sizing: border-box;
      top: 0;
      left: 0;
      width: 100vw;
      max-width: none;
      z-index: 10;
      background-color: #333333;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.75rem 1rem;
    }

    /* occupies the space the fixed bar takes out of the flow */
    .navbar-spacer {
      height: var(--navbar-height);
    }

    .app-name {
      font-weight: 600;
      font-size: 1.1rem;
      color: inherit;
      text-decoration: none;
      cursor: pointer;
    }

    .back-button {
      border: 1px solid currentColor;
      border-radius: 4px;
      padding: 4px 14px;
      text-decoration: none;
      color: inherit;
    }
  `,
})
export class MuscleGroupComponent {
  excercisesList: any[] = [];

  // Bound from the route's `data.groups` via withComponentInputBinding()
  @Input() set groups(value: string | string[]) {
    const keys = Array.isArray(value) ? value : [value];
    this.excercisesList = keys.flatMap((key) => excercises?.[key] ?? []);
  }
}
