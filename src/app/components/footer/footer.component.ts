import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { routes } from "./../../app.routes";
import { ThemeService } from "../../store/theme.service";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { ExcercisesService } from "../../store/excercises.service";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  routes = routes.slice(1, -1);

  constructor(
    private ThemeService: ThemeService,
    private Router: Router,
    private ExcercisesService: ExcercisesService
  ) {
    this.Router.events.subscribe((event: any) => {
      // console.log(event);
      this.route = event.url?.replace("/", "");
    });
  }

  route = "";

  updaingStyles = new BehaviorSubject(localStorage.getItem("theme"));
  updaingStyles$ = this.updaingStyles.asObservable();

  switchTheme() {
    // console.log('theme');
    this.ThemeService.toggleTheme();
    this.updaingStyles.next(localStorage.getItem("theme"));
    // console.log(localStorage.getItem('theme'));
  }

  getCurrentRoute(): void {
    const currentRoute = this.Router.url;
    // console.log('Current Route:', currentRoute);
  }

  syncData() {
    // this.ExcercisesService.syncData().subscribe()
  }
}
