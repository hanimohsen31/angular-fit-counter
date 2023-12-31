import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { modules } from '../shared/shared/shared.module';

@Component({
  selector: 'app-triceps',
  standalone: true,
  imports: [CommonModule, FormsModule, ...modules],
  template: ` <h1 class='h1-beta'>Beta Version ... Comming soon</h1> `,
})
export class TricepsComponent {
  ngOnInit() {}
}
