import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ThemeService } from "./store/theme.service";
import { BackExitService } from "./store/back-exit.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  private backExit = inject(BackExitService);
  readonly showExitHint = this.backExit.showExitHint;

  constructor(private ThemeService: ThemeService) {}

  ngOnInit() {
    this.getTheme();
    this.backExit.init();
  }

  getTheme() {
    this.ThemeService.getTheme();
  }
}
