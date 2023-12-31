import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { modules } from './shared/shared/shared.module';
import { ThemeService } from './store/theme.service';

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

  constructor(private ThemeService: ThemeService) {}

  ngOnInit() {
    this.getTheme();
  }

  getTheme() {
    this.ThemeService.getTheme();
  }
}
