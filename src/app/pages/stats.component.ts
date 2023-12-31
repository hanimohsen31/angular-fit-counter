import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { modules } from '../shared/shared/shared.module';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, FormsModule, ...modules],
  template: `<div class='container div-beta'><h1 class='h1-beta'>Beta Version ... Comming soon</h1></div>`,
})
export class StatsComponent {
  ngOnInit() {}
}
