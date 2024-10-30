import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'segundo-projeto-angular';
  
  cor = 'vermelho';

  textColor = 'blue';
  fontSize = '20px';

  aceitoTermos: boolean = false;
  
  mostrarTexto = true;

  nome = ''


  lista = [
    {nome :'eduardo',
     numero : '1'
    },
    {nome :'lucas',
      numero : '2'
    },
    {nome :'oldinei',
      numero : '3'
    }
  ]

  tornarTextoVisivel(): void {
    this.mostrarTexto = !this.mostrarTexto;
  }

  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
