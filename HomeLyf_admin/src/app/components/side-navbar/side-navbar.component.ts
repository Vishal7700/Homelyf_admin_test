import { Component, EventEmitter, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatListModule, MatIcon,NgClass],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css',
})
export class SideNavbarComponent {
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  isExpanded: boolean = true;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    this.toggle.emit(this.isExpanded); // Emitting boolean value
  }
}
