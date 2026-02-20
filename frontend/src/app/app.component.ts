import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OracleService, AskResponse } from './oracle.service';

type AppState = 'idle' | 'loading' | 'answered-short' | 'answered-long';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  state: AppState = 'idle';
  question: string = '';
  response: AskResponse | null = null;

  private oracleService = inject(OracleService);

  askQuestion(event: Event) {
    event.preventDefault();
    if (!this.question.trim() || this.state !== 'idle') return;

    this.state = 'loading';

    // Fire API call
    this.oracleService.ask(this.question).subscribe({
      next: (res) => {
        this.response = res;

        // Random frontend delay between 3000ms and 12000ms
        const delay = Math.floor(Math.random() * (12000 - 3000 + 1)) + 3000;

        setTimeout(() => {
          this.state = 'answered-short';
        }, delay);
      },
      error: (err) => {
        console.error('Oracle is silent:', err);
        // Provide fallback
        this.response = {
          shortAnswer: "The connection is lost.",
          longAnswer: "The energies are too turbulent to form a clear connection. Make sure the spiritual backend is running.",
          recommendations: []
        };
        setTimeout(() => {
          this.state = 'answered-short';
        }, 3000);
      }
    });
  }

  readLongAnswer() {
    if (this.state === 'answered-short') {
      this.state = 'answered-long';
    }
  }

  reset() {
    this.state = 'idle';
    this.question = '';
    this.response = null;
  }
}
