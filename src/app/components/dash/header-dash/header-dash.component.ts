import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SecurityService } from '../../../service/guard/security.service';

@Component({
  selector: 'app-header-dash',
  imports: [RouterModule],
  templateUrl: './header-dash.component.html',
  styleUrl: './header-dash.component.css',
})
export class HeaderDashComponent {
  constructor(private securityService: SecurityService) {}

  public logout(): void {
    this.securityService.logout();
  }
}
