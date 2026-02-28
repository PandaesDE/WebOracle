import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-data-transparency',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <div class="stars-bg"></div>
      
      <div class="glass-panel content-box">
        <h1>Data Transparency</h1>
        <p class="subtitle">Our covenant with your digital soul.</p>

        <section class="policy-section">
          <h2>1. The Ethereal Logs</h2>
          <p>When you ask the void a question, we process the text momentarily to conjure an answer. We do not store your words in an eternal database. Once the session ends, the energies dissipate, and the inquiry is forgotten.</p>
        </section>

        <section class="policy-section">
          <h2>2. Amazon Recommendations</h2>
          <p>We provide mystical tools and affiliate recommendations. If you choose to follow these paths (links), Amazon may track your journey. We do not correlate your oracle queries with your personal identity.</p>
        </section>

        <section class="policy-section">
          <h2>3. Cookies & Local Spirits</h2>
          <p>We only use essential local storage to maintain the state of the oracle during your visit. No tracking cookies are used to haunt you across the internet.</p>
        </section>
      </div>
    </div>
  `,
    styles: [`
    .page-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4rem 2rem;
        min-height: calc(100vh - 80px);
        position: relative;
        z-index: 1;

        .stars-bg {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: -1;
            background: 
                radial-gradient(circle at 20% 80%, rgba(88, 28, 135, 0.2), transparent 40%),
                radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.1), transparent 50%),
                #05010a;
                
            &::after {
                content: '';
                position: absolute;
                inset: 0;
                background-image:
                    radial-gradient(2px 2px at 40px 60px, #fff, transparent),
                    radial-gradient(1px 1px at 120px 100px, rgba(255, 255, 255, 0.6), transparent),
                    radial-gradient(2px 2px at 200px 30px, #a855f7, transparent);
                background-repeat: repeat;
                background-size: 300px 300px;
                opacity: 0.3;
            }
        }
    }

    .glass-panel {
        background: rgba(20, 10, 40, 0.6);
        border: 1px solid rgba(168, 85, 247, 0.3);
        border-radius: 20px;
        backdrop-filter: blur(12px);
        padding: 4rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }

    .content-box {
        width: 100%;
        max-width: 800px;
        color: #fff;
        font-family: 'Outfit', sans-serif;

        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3rem;
            color: #d8b4fe;
            margin-bottom: 0.5rem;
            text-align: center;
            text-shadow: 0 0 15px rgba(216, 180, 254, 0.5);
        }

        .subtitle {
            text-align: center;
            color: #a1a1aa;
            font-size: 1.2rem;
            margin-bottom: 3rem;
            letter-spacing: 1px;
        }

        .policy-section {
            margin-bottom: 2.5rem;

            h2 {
                color: #e9d5ff;
                font-size: 1.5rem;
                margin-bottom: 1rem;
                border-bottom: 1px solid rgba(168, 85, 247, 0.3);
                padding-bottom: 0.5rem;
            }

            p {
                color: #d4d4d8;
                font-size: 1.1rem;
                line-height: 1.8;
                font-weight: 300;
            }
        }
    }
  `]
})
export class DataTransparencyComponent {
    private titleService = inject(Title);
    private metaService = inject(Meta);

    constructor() {
        this.titleService.setTitle('Data Transparency - The Ethereal Oracle');
        this.metaService.updateTag({ name: 'description', content: 'Our data transparency policy detailing how we respect your privacy and manage your digital inquiries without saving them.' });
    }
}
