import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

export const modules = [NavbarComponent, CardComponent, FooterComponent];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class SharedModule {}
