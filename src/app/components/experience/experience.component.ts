import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})

export class ExperienceComponent {
  items = [
    {
      titre: 'Apprentissage — Développeuse C# (Kipaware / Moduleo)',
      dates: '10/2023 – aujourd’hui',
      points: [
        'Développement C#/.NET WPF (pattern MVVM, ReactiveUI) sur l’application Moduleo',
        'Évolution & refonte UI/UX (écrans WPF), correctifs et petites features',
        'Qualité & livraisons : Git (PR), intégration continue GitHub Actions'
      ]
    },
    {
      titre: 'Mastère — Ingénierie Logicielle (ISCOD)',
      dates: '2024 – 2025',
      points: [
        'Angular & Spring Boot : études de cas (GamesUP, Book a Book) et projet Unity3D',
        'CI/CD (GitHub Actions), déploiement GitHub Pages, bonnes pratiques web',
        'Architecture : Front → API REST → MySQL ; tests & accessibilité'
      ]
    },
    {
      titre: 'Stage — Développeuse React (Alécol)',
      dates: '09/2022 – 11/2022',
      points: [
        'Montée en compétences rapide, priorisation des tâches, respect des délais',
        'Propositions d’optimisation via recherche et tests de solutions'
      ]
    },
    {
      titre: 'Stage — Développeuse Full-Stack (IKOR Édition)',
      dates: '09/2018 – 10/2018',
      points: [
        'Conception d’un logiciel de comptabilité (HTML5/CSS3/JS/PHP7)',
        'Git en équipe, Bootstrap, jQuery, AJAX'
      ]
    },
    {
      titre: 'Manager en restauration rapide',
      dates: '2002 – 2014',
      points: [
        'Encadrement d’équipes 10–20 pers., recrutement & planning',
        'Pilotage qualité/service (temps d’attente, satisfaction), gestion des stocks & caisses',
        'Formation des nouveaux, gestion des rushs, amélioration continue des process'
      ]
    }
  ];
}
