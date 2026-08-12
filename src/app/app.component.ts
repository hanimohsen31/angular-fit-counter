import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ThemeService } from "./store/theme.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(private ThemeService: ThemeService) {}

  ngOnInit() {
    this.getTheme();
  }

  getTheme() {
    this.ThemeService.getTheme();
  }
}
