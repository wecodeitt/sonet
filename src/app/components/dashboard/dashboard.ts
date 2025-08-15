import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatCardModule, MatGridListModule, MatIconModule, MatButtonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  stats = [
    { title: 'Total Users', value: '12,426', icon: 'people', color: '#3f51b5' },
    { title: 'Revenue', value: '$45,890', icon: 'attach_money', color: '#4caf50' },
    { title: 'Orders', value: '1,245', icon: 'shopping_cart', color: '#ff9800' },
    { title: 'Growth', value: '+23%', icon: 'trending_up', color: '#f44336' }
  ];

  recentActivities = [
    { text: 'New user registered', time: '2 minutes ago' },
    { text: 'Order #1234 completed', time: '5 minutes ago' },
    { text: 'Server maintenance started', time: '1 hour ago' },
    { text: 'Weekly report generated', time: '2 hours ago' }
  ];
}
