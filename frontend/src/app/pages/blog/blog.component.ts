import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="page-container">
      <div class="stars-bg"></div>
      
      <div class="content-box">
        <h1>Chronicles of the Void</h1>
        <p class="subtitle">Whispers, insights, and teachings from beyond.</p>

        <div class="articles-grid">
            <article class="glass-panel" *ngFor="let post of posts">
                <div class="article-content">
                    <span class="date">{{ post.date }}</span>
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.excerpt }}</p>
                    <a [routerLink]="['/blog', post.slug]" class="read-more">Read Chronicle <span>→</span></a>
                </div>
            </article>
        </div>
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
                radial-gradient(circle at 10% 20%, rgba(88, 28, 135, 0.2), transparent 40%),
                radial-gradient(circle at 90% 80%, rgba(46, 16, 101, 0.1), transparent 50%),
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

    .content-box {
        width: 100%;
        max-width: 1000px;
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

        .articles-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
        }

        .glass-panel {
            background: rgba(20, 10, 40, 0.6);
            border: 1px solid rgba(168, 85, 247, 0.3);
            border-radius: 20px;
            backdrop-filter: blur(12px);
            padding: 2rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(168, 85, 247, 0.3);
                border-color: rgba(216, 180, 254, 0.6);
            }

            .article-content {
                display: flex;
                flex-direction: column;
                height: 100%;

                .date {
                    font-size: 0.85rem;
                    color: #d8b4fe;
                    margin-bottom: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 600;
                }

                h2 {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    color: #fff;
                    margin-bottom: 1rem;
                    line-height: 1.3;
                }

                p {
                    color: #d4d4d8;
                    font-size: 1rem;
                    line-height: 1.6;
                    font-weight: 300;
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                }

                .read-more {
                    align-self: flex-start;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #d8b4fe;
                    font-weight: 600;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: color 0.3s ease;

                    span {
                        transition: transform 0.3s ease;
                    }

                    &:hover {
                        color: #fff;
                        span {
                            transform: translateX(5px);
                        }
                    }
                }
            }
        }
    }
  `]
})
export class BlogComponent {
    private titleService = inject(Title);
    private metaService = inject(Meta);

    posts = [
        { slug: 'decoding-spiritual-runes', title: 'Decoding Spiritual Runes of the Web', date: 'October 14, 2026', excerpt: 'How the oracle interprets the digital currents of standard HTML into profound cosmic insights.' },
        { slug: 'finding-inner-peace', title: 'Finding Inner Peace Amidst Chaos', date: 'September 28, 2026', excerpt: 'A brief guide on centering your energy before asking the Oracle your daily questions.' },
        { slug: 'the-meaning-of-numbers', title: 'The Hidden Meaning of Your Daily Number', date: 'September 12, 2026', excerpt: 'Dive into numerology and how the void assigns numerical significance to your daily aura.' }
    ];

    constructor() {
        this.titleService.setTitle('Chronicles - The Ethereal Oracle Blog');
        this.metaService.updateTag({ name: 'description', content: 'Read the latest teachings and insights from the Ethereal Oracle in our mystical chronicles.' });
    }
}
