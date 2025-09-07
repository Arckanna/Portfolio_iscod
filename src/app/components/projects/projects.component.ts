import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

type Project = {
  title: string;
  role: string;
  stack: string[];
  tags: string[];   // mêmes libellés que les filtres
  img?: string;
  imgs?: string[];
  demo?: string;
  code?: string;
  descShort?: string;
  descLong?: string;
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  constructor(private dialog: MatDialog) {}

  filters = ['Tous', 'Angular', 'Spring', 'Unity', 'Robotique','Étude de cas'];
  active = 'Tous';

  projects: Project[] = [
    {
      title: 'Space Invaders (Unity3D)',
      role: 'Gameplay',
      stack: ['Unity', 'C#'],
      tags: ['Unity'],
      imgs: [
        'assets/projects/spaceinvaders/1.webp',
        //'assets/projects/spaceinvaders/2.webp'
      ],
      demo: 'https://arckanna.github.io/Cvsite/spaceInvaders/index.html',
      descShort: 'Remake du classique Space Invaders en C# avec Unity.',
      descLong:  'Boucle de jeu arcade, gestion des vagues, collisions, score et UI minimaliste. Focus sur le gameplay et la lisibilité du code.'
    },
    {
      title: 'Abrarobotix (bras robotique 3D + Arduino)',
      role: 'Maker / Contrôle',
      stack: ['Arduino', 'Impression 3D'],
      tags: ['Robotique'],
      imgs: [
        'assets/projects/abrarobotix/1.webp',
        //'assets/projects/abrarobotix/2.webp'
      ],
      demo: 'https://codepen.io/Arckamna/full/NJrVQY',
      descShort: 'Bras robotique imprimé en 3D, piloté par Arduino.',
      descLong:  'Conception, impression 3D, assemblage et contrôle de 4 servo-moteurs (rotation, vertical/horizontal, pince). Programmation Arduino (C++).'
    },
    {
      title: 'ITGlobe Solutions',
      role: 'Full-stack',
      stack: ['Angular', 'Spring'],
      tags: ['Angular', 'Spring', 'Étude de cas'],
      imgs: ['assets/projects/itglobe/1.webp','assets/projects/itglobe/2.webp'],
      // demo: 'https://…',
      descShort: 'App de réservation et suivi pour une SSII fictive.',
      descLong:  'Planification, réservations, Angular + API Spring Boot.'
    },
    {
      title: 'O’Fit',
      role: 'Frontend',
      stack: ['Angular'],
      tags: ['Angular'],
      imgs: [ 'https://picsum.photos/seed/itglobe1/1200/675',
        'https://picsum.photos/seed/itglobe2/1200/675'],
      // demo: 'https://…',
      descShort: 'Coaching sportif, UI intuitive & suivi de progression.',
      descLong:  'Responsive mobile-first, stats perso, Angular.'
    },
    {
      title: 'GAMESUP',
      role: 'Frontend',
      stack: ['Angular'],
      tags: ['Angular', 'Étude de cas'],
      imgs: ['assets/projects/itglobe/1.webp','assets/projects/itglobe/2.webp'],
      // demo: 'https://…',
      descShort: 'Moteur de recherche de jeux vidéo.',
      descLong:  'Filtrage, recherche multicritère, optimisations Angular.'
    },
    {
      title: 'PMT — Project Management Tool',
      role: 'Full-stack',
      stack: ['Angular', 'Spring'],
      tags: ['Angular', 'Spring', 'Étude de cas'],
      imgs: ['assets/projects/itglobe/1.webp','assets/projects/itglobe/2.webp'],
      // demo: 'https://…',
      descShort: 'Gestion de projet avec rôles, tâches, permissions.',
      descLong:  'Auth, autorisations, API REST Spring Boot + UI Angular.'
    },
    {
      title: 'Jeu Unity3D',
      role: 'Gameplay',
      stack: ['Unity', 'C#'],
      tags: ['Unity'],
      // img: 'assets/unity.webp',
      descShort: 'Prototype 3D d’exploration (C# + Unity).'
    }
  ];

  get filtered(): Project[] {
    return this.active === 'Tous'
      ? this.projects
      : this.projects.filter(p => p.tags?.includes(this.active));
  }

  setFilter(f: string) { this.active = f; }

  openDialog(mode: 'demo'|'code', p: Project) {
    this.dialog.open(ProjectDialogComponent, {
      data: { project: p, mode },
      panelClass: 'project-dialog-panel',
      maxWidth: '95vw',
      width: '900px'
    });
  }
}
