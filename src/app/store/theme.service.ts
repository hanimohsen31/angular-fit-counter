import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  toggleTheme() {
    let bodyClass = document.body.classList;
    bodyClass.toggle('dark');
    if (bodyClass.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

  getTheme() {
    let currunt = localStorage.getItem('theme');
    // dark is the default: only an explicit 'light' choice opts out
    if (!currunt) {
      currunt = 'dark';
      localStorage.setItem('theme', currunt);
    }
    if (currunt == 'dark') {
      document.body.classList.add('dark');
    }
  }
}
