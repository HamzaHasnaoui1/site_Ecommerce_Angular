import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed = false; // Variable pour suivre l'état du sider


  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
