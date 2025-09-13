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
  highlights?: string[];
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private dialog: MatDialog) {}

  filters = ['Tous', 'Angular', 'Spring', 'Unity', 'Android', 'Robotique', 'Étude de cas'];
  active = 'Tous';

  projects: Project[] = [
    {
      title: 'Météo & Citation (Android)',
      role: 'Mobile',
      stack: ['Kotlin', 'Android', 'Views XML', 'Coroutines'],
      tags: ['Android'], // ← doit matcher le filtre
      imgs: [
        'assets/projects/meteo/1.webp',
        'assets/projects/meteo/2.webp',
        'assets/projects/meteo/3.webp',
        'assets/projects/meteo/4.webp',
        'assets/projects/meteo/5.webp',
      ],
      // demo: 'https://…',    // (lien Play Store / vidéo / APK si tu veux)
      // code: 'https://…',    // (repo si public)
      descShort:
        'App météo (actuelle • 24h • 7j) + citation liée au temps, recherche & favoris, thème dynamique.',
      descLong:
        'Kotlin + Coroutines, Views XML, Open-Meteo (forecast & geocoding), SharedPreferences. ' +
        'Build Gradle Kotlin DSL, R8/ProGuard (shrink/resources). Publication via Play Console (tests internes/fermés).',
      highlights: [
        'Prévisions : actuelle, 24h (heure par heure), 7 jours',
        'Recherche de villes (geocoding) + favoris persistants',
        'Thème dynamique (crossfade) selon code météo WMO',
        'Citations contextuelles + bouton “Nouvelle citation”',
        'Bouton “Envoyer un retour” (mailto) pré-rempli',
        'Optimisation taille (R8 + shrink resources), mapping R8 importé'
      ]
    },
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
      descLong:  'Boucle de jeu arcade, gestion des vagues, collisions, score et UI minimaliste. Focus sur le gameplay et la lisibilité du code.',
      highlights: [
        'Gestion des tirs & collisions (joueur / aliens / projectiles)',
        'Vie, Game Over & restart rapide',
        'Scripts C# modulaires (GameManager, Spawner, EnemyController)',
        'Build WebGL déployé sur GitHub Pages'
      ]
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
      // demo: 'https://…',
      descShort: 'Bras robotique imprimé en 3D, piloté par Arduino.',
      descLong:  'Conception, impression 3D, assemblage et contrôle de 4 servo-moteurs (rotation, vertical/horizontal, pince). Programmation Arduino (C++).',
      highlights: [
        'Conception & impression 3D des pièces (bras + pince)',
        '4 servomoteurs : rotation, vertical, horizontal, pince',
        'Pilotage Arduino (C++) — mapping angles → PWM',
        'Calibration des limites mécaniques & vitesses adoucies'
      ]
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
      imgs: [ 'assets/projects/ofit/1.webp',
        'https://picsum.photos/seed/itglobe2/1200/675'],
      // demo: 'https://…',
      descShort: 'Coaching sportif, UI intuitive & suivi de progression.',
      descLong:  'Responsive mobile-first, stats perso, Angular.'
    },
    {
      title: 'GamesUP',
      role: 'Frontend',
      stack: ['Angular', 'RxJS', 'TypeScript', 'HTML/CSS'],
      tags: ['E-commerce', 'Recherche', 'Filtrage', 'Performance', 'Étude de cas'],
      imgs: [
        'assets/projects/GameSup/1.webp','assets/projects/GameSup/2.webp',
        'assets/projects/GameSup/6.webp','assets/projects/GameSup/3.webp',
        'assets/projects/GameSup/4.webp','assets/projects/GameSup/5.webp'
      ],
      // demo: 'https://…',
      descShort: 'Catalogue e-commerce de jeux de société avec recherche instantanée, tri et filtres.',
      descLong:
        'Étude de cas Front Angular : catalogue + fiche produit, recherche multicritère (catégorie, éditeur, prix), tri/pagination, favoris, et optimisations de performance (OnPush/trackBy, lazy loading).',


      //problemSolutionImpact: {
      //  problem: 'Bugs et lenteurs sur la recherche entraînant des paniers perdus.',
       // solution: 'Refonte du front Angular : filtres réactifs (RxJS), debounce, pagination côté API, et stratégie OnPush.',
      //  impact: 'Interface plus fluide, temps de rendu réduit et parcours d’achat clarifié.'
     // },

      highlights: [
        'Filtres combinables en temps réel (catégorie, éditeur, prix, note).',
        'Tri & pagination avec état d’URL partageable.',
        'Virtual scroll / trackBy pour listes volumineuses.',
        'Services typés + interceptors (gestion erreurs/chargement).',
        'Tests unitaires clés (pipes, services) et accessibilité de base (ARIA).'
      ]
    },
    {
      title: 'PMT — Project Management Tool',
      role: 'Full-stack',
      stack: ['Angular', 'Spring'],
      tags: ['Angular', 'Spring', 'Étude de cas'],
      imgs: ['assets/projects/PMT/1.webp','assets/projects/itglobe/2.webp'],
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
