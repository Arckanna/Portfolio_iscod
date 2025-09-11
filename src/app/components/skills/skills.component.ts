import { Component } from '@angular/core';

type SkillCategory = { title: string; items: string[]; note?: string };

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    { title: 'Langages', items: ['Java', 'C#', 'Python', 'JavaScript', 'TypeScript', 'Kotlin'] },
    { title: 'Frameworks & Bibliothèques', items: ['Angular', 'Spring Boot', '.NET / WPF', 'Node.js'] },
    { title: 'DevOps & CI/CD', items: ['Git / GitHub', 'GitHub Actions (CI/CD)', 'Docker (bases)', 'NGINX (reverse proxy)', 'GitFlow / PR'] },
    {
      title: 'Qualité, Sécurité & Tests',
      items: ['Tests unitaires & e2e (JUnit, Jest/Cypress, MSTest/NUnit)', 'Revue de code / PR / lint (ESLint, Prettier)', 'Auth JWT/OAuth2, bonnes pratiques OWASP'],
      note: 'Mise en place de pipelines CI (build, tests) et bonnes pratiques sécurité Web.'
    },
    { title: 'Architecture & Méthodologies', items: ['UML / Modélisation', 'Design Patterns', 'Clean Architecture', 'REST API', 'Agile (Scrum/Kanban)'] },
    {
      title: 'Mobile & Android',
      items: [
        'Android Studio / Gradle (KTS)',
        'Views (Activity + XML), WindowInsets (edge-to-edge)',
        'Kotlin (Coroutines / Flow)',
        'Open-Meteo (forecast & geocoding), JSON (org.json)',
        'SharedPreferences (persistance)',
        'R8/ProGuard, App Bundle (.aab), Play Console (tests)'
      ]
    }
  ];

  trackByTitle = (_: number, g: SkillCategory) => g.title;
}
