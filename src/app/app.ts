import { Component } from '@angular/core';
import { NavBar } from './NavBar/NavBar';
import { RouterOutlet } from '@angular/router';
import { promo } from "./Promo/promo";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar, promo],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'Menu';
}
