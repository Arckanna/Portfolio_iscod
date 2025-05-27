import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navItems = [
    { path: '/', label: 'Accueil', icon: 'home' },
    { path: '/integration', label: 'Intégration', icon: 'integration_instructions' },
    { path: '/architecture', label: 'Architecture', icon: 'architecture' },
    { path: '/gestion', label: 'Gestion Client', icon: 'groups' },
    { path: '/pilotage', label: 'Pilotage', icon: 'trending_up' }
  ];
} 