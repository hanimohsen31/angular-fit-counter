import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';
import { NavbarComponent } from '../../navbar/navbar.component';

export const modules = [NavbarComponent, CardComponent];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class SharedModule {}
