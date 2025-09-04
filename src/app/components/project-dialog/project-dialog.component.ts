import { Component, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

type Project = {
  title: string;
  role: string;
  stack: string[];
  tags: string[];
  img?: string;
  imgs?: string[];            // ← carrousel
  demo?: string;              // lien externe éventuel
  code?: string;              // lien GitHub éventuel
  descShort?: string;
  descLong?: string;
};

type DialogData = { project: Project; mode: 'demo'|'code' };

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})

export class ProjectDialogComponent {
  mode: 'demo'|'code';
  p: Project;
  idx = 0;

  constructor(@Inject(MAT_DIALOG_DATA) data: DialogData) {
    this.p = data.project;
    this.mode = data.mode;
  }

  get images(): string[] {
    const arr = this.p.imgs ?? (this.p.img ? [this.p.img] : []);
    return arr.length ? arr : ['https://picsum.photos/seed/placeholder/1200/675']; // fallback
  }

  next() {
    if (this.images.length < 2) return;
    this.idx = (this.idx + 1) % this.images.length;
    // console.log('next idx', this.idx);
  }
  prev() {
    if (this.images.length < 2) return;
    this.idx = (this.idx - 1 + this.images.length) % this.images.length;
    // console.log('prev idx', this.idx);
  }

  setMode(m: 'demo'|'code') { this.mode = m; }

  /* Bonus: flèches clavier */
  @HostListener('document:keydown.arrowRight')
  onRight() { this.next(); }
  @HostListener('document:keydown.arrowLeft')
  onLeft() { this.prev(); }
}
