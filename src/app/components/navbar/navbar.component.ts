import { Component } from '@angular/core';
import { routes } from './../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  routes = routes.slice(0,-1)
  constructor(){
    // console.log("NAav")
  }
}
