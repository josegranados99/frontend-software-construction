import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-welcome',
  imports: [MenuComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {}
