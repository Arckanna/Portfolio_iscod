import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

export interface ProblemSolutionImpact {
  problem: string;
  solution: string;
  impact: string;
}

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
  problemSolutionImpact?: ProblemSolutionImpact;
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private dialog: MatDialog) {}

  filters = ['Tous', 'C#/.NET', 'Angular',  'Android','Unity', 'Robotique'];
  active = 'Tous';

  projects: Project[] = [
    {
      title: 'Moduleo — Outil versions BDD (interne)',
      role: 'Utilitaire équipe',
      stack: ['C#/.NET', 'WPF', 'SQL'],
      tags: ['C#/.NET'],
      imgs: [
        'assets/projects/moduleo/1.webp',
        'assets/projects/moduleo/2.webp'
      ],
      descShort:
        'Mises à niveau sensibles → outil d’inspection & upgrade guidé → versions maîtrisées, erreurs évitées.',
      descLong:
        'Petit utilitaire pour l’équipe : détecte la version de schéma, propose une cible, enchaîne scripts/migrations et trace les résultats. ' +
        'Objectif : sécuriser les mises à jour et gagner du temps lors des demandes de support.',
      highlights: [
        'Détection de la version de schéma + choix de la version cible',
        'Exécution pas à pas des scripts/migrations avec journalisation',
        'Vérifications préalables (validation) et messages d’erreur clairs',
        'UX simple pour l’équipe (moins d’allers-retours, moins de risques)'
      ]
    },
    {
      title: 'Moduleo — Maintenance & petites features',
      role: '',
      stack: ['C#', '.NET', 'WPF', 'XAML'],
      tags: ['C#/.NET'],
      imgs: [
        'assets/projects/moduleo/1.webp',
        'assets/projects/moduleo/2.webp'
      ],
      descShort:
        'Tickets utilisateurs ,repro , correctifs et petites features.',
      descLong:
        'Traitement de demandes et bugs : reproduction, corrections, PR/reviews et validation. ' +
        'Améliorations ciblées d’UI/UX, micro-optimisations et ajustements de workflows au fil des retours.',
      highlights: [
        'Repro des tickets, corrections et PR systématiques',
        'Améliorations UI : libellés, états de validation, raccourcis',
        'Micro-optimisations (listes, chargements, navigation)',
        'Collaboration support/QA, communication claire des changements'
      ]
    },
    {
      title: 'Moduleo — Refonte WPF (MVVM & UX)',
      role: '',
      stack: ['C#', '.NET', 'WPF', 'MVVM'],
      tags: ['C#/.NET'],
      imgs: [
        'assets/projects/moduleo/1.webp',
        'assets/projects/moduleo/2.webp'
      ],
      descShort:
        'Logique couplée → MVVM + XAML factorisé → parcours plus clairs & maintenance simplifiée.',
      descLong:
        'Harmonisation XAML (styles/templates), composants réutilisables, navigation et validations plus nettes. ' +
        'Séparation ViewModel/Command, réduction du code-behind et amélioration de l’accessibilité. ' +
        'Qualité renforcée via PR, analyzers et build CI.',
      highlights: [
        'Architecture MVVM : ViewModels/Commands, découplage propre',
        'Styles/templates unifiés, composants réutilisables',
        'Navigation & validations : flux plus lisibles',
        'Accessibilité : focus, libellés, ordre de tabulation',
        'Qualité : PR/reviews, analyzers, build CI'
      ]
    },
    {
      title: 'Météo & Citation (Android)',
      role: 'Mobile',
      stack: ['Kotlin', 'Android', 'Views XML', 'Coroutines'],
      tags: ['Android'],
      imgs: [
        'assets/projects/meteo/1.webp',
        'assets/projects/meteo/2.webp',
        'assets/projects/meteo/3.webp',

      ],
      demo: 'https://play.google.com/store/apps/details?id=com.valerie.meteoquote&pcampaignid=web_share',

      descShort:
        'App météo (actuelle • 24h • 7j) + citation liée au temps, recherche et favoris, thème dynamique.',
      descLong:
        'Kotlin , Coroutines, Views XML, Open-Meteo (forecast et geocoding), SharedPreferences. ' +
        'Build Gradle Kotlin DSL, R8/ProGuard (shrink/resources). Publication via Play Console (tests internes/fermés).',
      highlights: [
        'Prévisions : actuelle, 24h (heure par heure), 7 jours',
        'Recherche de villes (geocoding) , favoris persistants',
        'Thème dynamique (crossfade) selon code météo WMO',
        'Citations contextuelles , bouton “Nouvelle citation”',
        'Bouton “Envoyer un retour” (mailto) pré-rempli',
        'Optimisation taille (R8 , shrink resources), mapping R8 importé'
      ]
    },
    {
      title: 'Space Invaders (Unity3D)',
      role: 'Gameplay',
      stack: ['Unity', 'C#'],
      tags: ['Unity'],
      imgs: [
        'assets/projects/spaceinvaders/1.webp',
        'assets/projects/spaceinvaders/2.webp',
        'assets/projects/spaceinvaders/3.webp',
        'assets/projects/spaceinvaders/4.webp'
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
      stack: ['Arduino', 'Impression 3D', 'C++', 'Snap4Arduino'],
      tags: ['Robotique'],
      imgs: [
        'assets/projects/abrarobotix/1.webp',
        'assets/projects/abrarobotix/2.webp'
      ],
      descShort:
        'Créer un bras accessible , contrôle précis et look “roi des machines”.',
      descLong:
        'Bras robotique 3 axes avec pince, ~20 pièces imprimées en 3D. Programmation via Snap4Arduino/Arduino : ' +
        'contrôle clavier des 4 servos, enregistrement de poses et lecture séquencée pour des mouvements fluides.',
      highlights: [
        '3 axes + pince (4 DOF) — ~20 pièces 3D à assembler',
        'Pilotage clavier par pas de 2° (0→180°) sur 4 servos',
        'Moteurs sur pins 4, 7, 8, 9 (M1, M2, M3, MP)',
        'Raccourcis : q/a (M1), s/z (M2), d/e (M3), ↑/↓ (MP)',
        'Enregistrement de poses (touche P) dans des listes',
        'Lecture automatique de la séquence (Espace) avec tempo'
      ]
    },
    {
      title: 'ITGlobe Solutions — SIRH (étude de cas)',
      role: 'Architecture & CDC',
      stack: ['Angular', 'Spring Boot', 'PostgreSQL'],
      tags: ['Étude de cas', 'Angular', 'Spring'],

      imgs: [
        'assets/projects/itglobe/1.webp',
        'assets/projects/itglobe/2.webp'
      ],
      descShort:
        'RH éclatées & manuelles → SIRH unifié et automatisation → données fiables et décisions éclairées.',
      descLong:
        'Étude de cas RH : proposition d’un SIRH centralisé pour un e-commerçant multi-pays. ' +
        'Livrables : cahier des charges, diagramme d’architecture (SPA Angular + API Spring + DB), intégrations (Salesforce/HubSpot), ' +
        'exigences RGPD & sécurité, et étude comparative chiffrée (Rippling, Bizneo HR, Factorial).',

      highlights: [
        'Constats initiaux : systèmes disparates, peu d’automatisation, données RH sous-exploitées, suivi formation absent.',
        'Objectifs : unifier, automatiser, analyser (dashboards), s’adapter aux pays et soutenir la croissance.',
        'Modules cibles : Recrutement, Employés, Performances, Formation, Congés, Analytics, Administration.',
        'Architecture proposée : SPA Angular, API Spring Boot, BD centrale, intégrations Salesforce/HubSpot, Slack/Zoom.',
        'Non-fonctionnels : RGPD, sécurité (auth/roles), interopérabilité, performance & scalabilité.',
        'Benchmark & macro-chiffrage : comparaison Rippling / Bizneo HR / Factorial avec budgets & calendriers.'
      ]
    },
    {
      title: "O’Fit — Santé connectée (étude de cas)",
      role: "Chef de projet (pilotage)",
      stack: ["Agile/Scrum", "RGPD", "WBS", "KPI & Risques", "UX/Design ops"],
      tags: [],
      imgs: [
        "assets/projects/ofit/1.webp",
        "assets/projects/ofit/2.webp"
      ],
      descShort:
        "Équipe à distance & retards → V1 centrée (activité, journal, sommeil, dashboard) + cadre RGPD → roadmap claire & suivi factuel.",
      descLong:
        "Cadrage produit d’une app santé : spécifications sous user stories, WBS par domaines et V1 priorisée (activité, journal alimentaire, sommeil, tableau de bord). " +
        "Mise en place d’indicateurs (sprints, burndown, tests, bugs, satisfaction) et matrice des risques, puis audit de l’organisation remote avec plan d’amélioration (outils, rituels, responsabilités) conforme RGPD.",
      highlights: [
        "Objectifs : intuitivité/engagement, personnalisation, sécurité & confidentialité (RGPD).",
        "V1 priorisée : Suivi activité • Journal alimentaire • Sommeil • Dashboard.",
        "WBS & domaines fonctionnels → lots de travail cohérents.",
        "KPI : progression des sprints, burndown, taux de tests, bugs, satisfaction.",
        "Matrice des risques : techniques, humains, juridiques, délais + mitigations.",
        "Audit équipe remote : JIRA/Trello, Slack/Teams, Confluence, ajout Miro & rituels ; clarification des rôles."
      ]
    },
    {
      title: 'GamesUP',
      role: 'Frontend',
      stack: ['Angular', 'RxJS', 'TypeScript', 'HTML/CSS'],
      tags: ['Angular'],
      imgs: [
        'assets/projects/GameSup/1.webp','assets/projects/GameSup/2.webp',
        'assets/projects/GameSup/6.webp','assets/projects/GameSup/3.webp',
        'assets/projects/GameSup/4.webp','assets/projects/GameSup/5.webp'
      ],
      // demo: 'https://…',
      descShort: 'Catalogue e-commerce de jeux de société avec recherche instantanée, tri et filtres.',
      descLong:
        'Étude de cas Front Angular : catalogue , fiche produit, recherche multicritère (catégorie, éditeur, prix), tri/pagination, favoris, et optimisations de performance (OnPush/trackBy, lazy loading).',
      problemSolutionImpact: {
        problem: 'Bugs et lenteurs sur la recherche entraînant des paniers perdus.',
        solution: 'Refonte du front Angular : filtres réactifs (RxJS), debounce, pagination côté API, et stratégie OnPush.',
        impact: 'Interface plus fluide, temps de rendu réduit et parcours d’achat clarifié.'
      },
      highlights: [
        'Filtres combinables en temps réel (catégorie, éditeur, prix, note).',
        'Tri & pagination avec état d’URL partageable.',
        'Virtual scroll / trackBy pour listes volumineuses.',
        'Services typés , interceptors (gestion erreurs/chargement).',
        'Tests unitaires clés (pipes, services) et accessibilité de base (ARIA).'
      ]
    },
    {
      title: 'PMT — Project Management Tool',
      role: 'Full-stack',
      stack: ['Angular', 'Spring Boot', 'JWT', 'PostgreSQL'],
      tags: ['Étude de cas', 'Angular', 'Spring'],
      imgs: [
        'assets/projects/PMT/1.webp',
        'assets/projects/PMT/2.webp'
      ],
      descShort:
        'Organisation des tâches peu claire → app Angular + Spring (rôles, permissions, workflow) → assignations plus rapides & meilleure visibilité.',
      descLong:
        'Conception d’un outil de gestion de projet : rôles & permissions, tâches, statuts, commentaires et audits. ' +
        'Refacto après revue : architecture 3 couches (Controller → Service → Repository) + DTO/validation ; ' +
        'pipeline CI/CD découpé en jobs (lint, tests, build, packaging).',
      highlights: [
        'Sécurité : Auth JWT, guards côté front, RBAC (rôles/permissions)',
        'Architecture : Controller → Service (@Transactional) → Repository',
        'DTO + Bean Validation (Jakarta) + mappers (MapStruct ou manuel)',
        'Gestion erreurs : exceptions métier → handlers globaux (RFC7807)',
        'Tests : JUnit/Mockito back, Cypress/Jest front (selon besoin)',
        'CI/CD : jobs séparés (lint/test/build) + cache + artefacts'
      ]
    }
    ,
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
