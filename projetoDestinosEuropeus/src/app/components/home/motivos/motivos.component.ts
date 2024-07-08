import { Component } from '@angular/core';

@Component({
  selector: 'app-motivos',
  templateUrl: './motivos.component.html',
  styleUrl: './motivos.component.css'
})

export class MotivosComponent {
  Aparecer: number | null = null;

  mostrar(secao: number): void {
    if (this.Aparecer === secao) {
      this.Aparecer = null;
    } else {
      this.Aparecer = secao;
    }
  }
}
