import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, MatSidenavModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  menuItems = [
    { icon: 'dashboard', text: 'Dashboard', route: '/dashboard' },
    { icon: 'people', text: 'Users', route: '/users' },
    { icon: 'settings', text: 'Settings', route: '/settings' },
    { icon: 'analytics', text: 'Analytics', route: '/analytics' },
    { icon: 'help', text: 'Help', route: '/help' }
  ];
}
