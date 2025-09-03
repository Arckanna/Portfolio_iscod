
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements AfterViewInit {
  sections = ['accueil','competences','projets','experience','contact'];
  active = 'accueil';

  ngAfterViewInit(): void {
    // Sélectionne chaque section par son id
    const els = this.sections
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    // Observe l'entrée/sortie dans le viewport pour surligner le lien actif
    const io = new IntersectionObserver(
      (entries) => {
        // On prend la section la plus visible
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) this.active = visible.target.id;
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.01, 0.25, 0.5, 0.75, 1] }
    );

    els.forEach(el => io.observe(el));
  }
}

