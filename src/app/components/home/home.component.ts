import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  domains = [
    {
      name: 'Intégration & Déploiement',
      icon: 'integration_instructions',
      route: '/integration',
      class: 'integration-button'
    },
    {
      name: 'Architecture Logicielle',
      icon: 'architecture',
      route: '/architecture',
      class: 'architecture-button'
    },
    {
      name: 'Gestion Client',
      icon: 'groups',
      route: '/gestion',
      class: 'gestion-button'
    },
    {
      name: 'Pilotage de Projet',
      icon: 'trending_up',
      route: '/pilotage',
      class: 'pilotage-button'
    }
  ];

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }
} 