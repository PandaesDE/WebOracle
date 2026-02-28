import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-imprint',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <div class="stars-bg"></div>
      
      <div class="glass-panel content-box">
        <h1>Imprint</h1>
        <p class="subtitle">The architects of the void.</p>

        <div class="grid-section">
            <section class="info-section">
            <h2>Provider Information</h2>
            <p><strong>Mystic Web Services LLC</strong></p>
            <p>123 Oracle Way</p>
            <p>Suite 404, The Void</p>
            <p>Digital Realm, Earth</p>
            </section>

            <section class="info-section">
            <h2>Contact</h2>
            <p>Email: <em>high.priest&#64;ethereal-oracle.com</em></p>
            <p>Phone: <em>+1 (555) 888-VOID</em></p>
            </section>
        </div>

        <section class="info-section legal">
          <h2>Disclaimer</h2>
          <p>The guidance provided by the Ethereal Oracle is for entertainment purposes only and should not replace professional, medical, legal, or psychological advice. Do not peer too deeply into the void, or the void may peer back.</p>
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
                radial-gradient(circle at 80% 80%, rgba(88, 28, 135, 0.2), transparent 40%),
                radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.1), transparent 50%),
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

        .grid-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
            
            @media (max-width: 600px) {
                grid-template-columns: 1fr;
            }
        }

        .info-section {
            margin-bottom: 1.5rem;

            h2 {
                color: #e9d5ff;
                font-size: 1.3rem;
                margin-bottom: 1rem;
                border-bottom: 1px solid rgba(168, 85, 247, 0.3);
                padding-bottom: 0.5rem;
            }

            p {
                color: #d4d4d8;
                font-size: 1.1rem;
                line-height: 1.6;
                font-weight: 300;
                margin-bottom: 0.25rem;
            }

            &.legal p {
                font-size: 0.95rem;
                color: #a1a1aa;
                font-style: italic;
            }
        }
    }
  `]
})
export class ImprintComponent {
    private titleService = inject(Title);
    private metaService = inject(Meta);

    constructor() {
        this.titleService.setTitle('Imprint - The Ethereal Oracle');
        this.metaService.updateTag({ name: 'description', content: 'Legal imprint and contact information for the architects of the Ethereal Oracle.' });
    }
}
