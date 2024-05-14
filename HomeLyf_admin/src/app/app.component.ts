import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './service/user.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { DeleteAlertComponent } from './notifications/delete-alert/delete-alert.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, DashboardComponent, NavbarComponent, SideNavbarComponent,DeleteAlertComponent],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'HomeLyf_admin';
}
