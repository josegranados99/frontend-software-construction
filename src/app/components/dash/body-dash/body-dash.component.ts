import { Component } from '@angular/core';
import { SidebarDashComponent } from '../sidebar-dash/sidebar-dash.component';
import { HeaderDashComponent } from '../header-dash/header-dash.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body-dash',
  imports: [SidebarDashComponent, HeaderDashComponent, RouterOutlet],
  templateUrl: './body-dash.component.html',
  styleUrl: './body-dash.component.css'
})
export class BodyDashComponent {

}
