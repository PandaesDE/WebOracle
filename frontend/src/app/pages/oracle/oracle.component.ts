import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OracleService, AskResponse } from '../../oracle.service';
import { Title, Meta } from '@angular/platform-browser';

type AppState = 'idle' | 'loading' | 'answered-short' | 'answered-long';

interface LogicMode {
    label: string;
}

@Component({
    selector: 'app-oracle',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './oracle.component.html',
    styleUrls: ['./oracle.component.scss']
})
export class OracleComponent {
    state: AppState = 'idle';
    question: string = '';
    response: AskResponse | null = null;

    modes: LogicMode[] = [
        { label: 'Yes or No' },
        { label: 'Daily Mood' },
        { label: 'Daily Number' }
    ];
    activeModeIndex: number = 0;
    baseAngle: number = 0;

    private oracleService = inject(OracleService);
    private titleService = inject(Title);
    private metaService = inject(Meta);

    @ViewChild('sphereInput') sphereInput!: ElementRef<HTMLTextAreaElement>;

    constructor() {
        this.titleService.setTitle('The Ethereal Oracle - Ask the Void');
        this.metaService.updateTag({ name: 'description', content: 'Consult the ethereal oracle for answers to your deepest questions using our magical interactive sphere.' });
    }

    selectMode(index: number) {
        if (this.state !== 'idle') return;

        const diff = index - this.activeModeIndex;
        let shortestDiff = diff;
        if (Math.abs(diff) > this.modes.length / 2) {
            if (diff > 0) shortestDiff -= this.modes.length;
            else shortestDiff += this.modes.length;
        }

        this.baseAngle -= shortestDiff * (360 / this.modes.length);
        this.activeModeIndex = index;

        setTimeout(() => {
            if (this.sphereInput) {
                this.sphereInput.nativeElement.focus();
            }
        });
    }

    askQuestion(event?: Event) {
        if (event) event.preventDefault();
        if (!this.question.trim() || this.state !== 'idle') return;

        this.state = 'loading';
        const activeMode = this.modes[this.activeModeIndex].label;
        const constructedQuestion = `[Mode: ${activeMode}] ${this.question}`;

        this.oracleService.ask(constructedQuestion).subscribe({
            next: (res) => {
                this.response = res;
                const delay = Math.floor(Math.random() * (7000 - 4000 + 1)) + 4000;
                setTimeout(() => {
                    this.state = 'answered-short';
                }, delay);
            },
            error: (err) => {
                console.error('Oracle is silent:', err);
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

    onSphereDoubleClick() {
        if (this.state === 'idle' && this.question.trim()) {
            this.askQuestion();
        }
    }

    readLongAnswer() {
        if (this.state === 'answered-short') {
            this.state = 'answered-long';
        }
    }

    reset() {
        this.state = 'idle';
        this.question = '';
        this.activeModeIndex = 0;
        this.baseAngle = 0;
        this.response = null;
    }
}
