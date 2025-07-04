import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { NavbarTopComponent } from "./navbar-top/navbar-top.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NavbarTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ApiTask';
}
