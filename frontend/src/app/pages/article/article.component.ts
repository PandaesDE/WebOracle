import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-article',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="page-container" *ngIf="article">
      <div class="stars-bg"></div>
      
      <main class="content-box">
        <a routerLink="/blog" class="back-link">← Back to Chronicles</a>
        
        <article class="glass-panel">
            <header class="article-header">
                <span class="date">{{ article.date }}</span>
                <h1>{{ article.title }}</h1>
            </header>
            
            <div class="article-body">
                <p class="lead">{{ article.excerpt }}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, tellus sit amet tincidunt venenatis, lorem justo luctus ex, at malesuada justo arcu sit amet nisi. Pellentesque vehicula velit vitae dui cursus, eu pharetra libero lacinia. Quisque a mauris imperdiet, feugiat ipsum a, ullamcorper ipsum.</p>
                
                <h2>The Harmonic Convergence</h2>
                <p>Nunc non ipsum vel libero efficitur sagittis. In cursus augue nec diam malesuada, vel tincidunt odio elementum. Fusce quis turpis varius, congue justo sit amet, condimentum leo. Proin ultrices libero at dapibus blandit. Aenean elementum dolor magna, vel tempus enim tempus sed. Aenean sollicitudin nisl non tellus congue, a gravida sapien vulputate.</p>
                
                <blockquote>
                    "The void does not shout its secrets; it whispers them to those who are quiet enough to listen."
                </blockquote>
                
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam at augue turpis. Mauris ut libero nulla. Nulla id velit aliquet, luctus purus quis, venenatis justo. In ullamcorper in ligula vitae convallis.</p>
            </div>
        </article>
      </main>
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
                radial-gradient(circle at 50% 10%, rgba(88, 28, 135, 0.15), transparent 50%),
                #05010a;
                
            &::after {
                content: '';
                position: absolute;
                inset: 0;
                background-image:
                    radial-gradient(1px 1px at 40px 60px, #fff, transparent),
                    radial-gradient(1.5px 1.5px at 120px 100px, rgba(255, 255, 255, 0.4), transparent);
                background-repeat: repeat;
                background-size: 200px 200px;
                opacity: 0.2;
            }
        }
    }

    .content-box {
        width: 100%;
        max-width: 800px;
        color: #fff;
        font-family: 'Outfit', sans-serif;
        
        .back-link {
            display: inline-block;
            color: #d8b4fe;
            text-decoration: none;
            font-size: 0.95rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
            margin-bottom: 2rem;
            transition: color 0.3s ease;
            
            &:hover {
                color: #fff;
            }
        }
    }

    .glass-panel {
        background: rgba(20, 10, 40, 0.6);
        border: 1px solid rgba(168, 85, 247, 0.3);
        border-radius: 20px;
        backdrop-filter: blur(12px);
        padding: 3rem 4rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        
        @media (max-width: 768px) {
             padding: 2rem;
        }

        .article-header {
            text-align: center;
            margin-bottom: 3rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid rgba(168, 85, 247, 0.2);

            .date {
                font-size: 0.9rem;
                color: #d8b4fe;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: 600;
                display: block;
                margin-bottom: 1rem;
            }

            h1 {
                font-family: 'Playfair Display', serif;
                font-size: 3rem;
                color: #fff;
                line-height: 1.2;
                text-shadow: 0 0 15px rgba(216, 180, 254, 0.4);
                
                @media (max-width: 768px) {
                    font-size: 2rem;
                }
            }
        }
        
        .article-body {
            p {
                color: #d4d4d8;
                font-size: 1.15rem;
                line-height: 1.8;
                font-weight: 300;
                margin-bottom: 1.5rem;
                
                &.lead {
                    font-size: 1.3rem;
                    color: #fff;
                    font-weight: 400;
                    margin-bottom: 2rem;
                }
            }
            
            h2 {
                font-family: 'Playfair Display', serif;
                font-size: 2rem;
                color: #e9d5ff;
                margin: 3rem 0 1.5rem;
            }
            
            blockquote {
                margin: 3rem 0;
                padding: 2rem;
                background: rgba(168, 85, 247, 0.1);
                border-left: 4px solid #a855f7;
                border-radius: 0 10px 10px 0;
                font-family: 'Playfair Display', serif;
                font-size: 1.4rem;
                font-style: italic;
                color: #d8b4fe;
                line-height: 1.6;
            }
        }
    }
  `]
})
export class ArticleComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private titleService = inject(Title);
    private metaService = inject(Meta);

    // Mock DB lookup
    posts = [
        { slug: 'decoding-spiritual-runes', title: 'Decoding Spiritual Runes of the Web', date: 'October 14, 2026', excerpt: 'How the oracle interprets the digital currents of standard HTML into profound cosmic insights.' },
        { slug: 'finding-inner-peace', title: 'Finding Inner Peace Amidst Chaos', date: 'September 28, 2026', excerpt: 'A brief guide on centering your energy before asking the Oracle your daily questions.' },
        { slug: 'the-meaning-of-numbers', title: 'The Hidden Meaning of Your Daily Number', date: 'September 12, 2026', excerpt: 'Dive into numerology and how the void assigns numerical significance to your daily aura.' }
    ];

    article: any;

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const slug = params.get('slug');
            this.article = this.posts.find(p => p.slug === slug);

            if (this.article) {
                this.titleService.setTitle(`${this.article.title} - The Ethereal Oracle`);
                this.metaService.updateTag({ name: 'description', content: this.article.excerpt });

                // Dynamic JSON-LD for SEO / AI Search Engines
                this.injectStructuredData();
            }
        });
    }

    injectStructuredData() {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": this.article.title,
            "description": this.article.excerpt,
            "datePublished": new Date(this.article.date).toISOString(),
            "author": {
                "@type": "Organization",
                "name": "Ethereal Oracle"
            }
        });
        document.head.appendChild(script);
    }
}
