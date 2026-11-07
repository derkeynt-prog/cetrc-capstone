import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './hello.css';

function App() {
    const [clicks, setClicks] = useState(0);

    return (
        <main className="hello-page">
            <div className="hello-glow hello-glow-top" aria-hidden="true"></div>
            <div className="hello-glow hello-glow-bottom" aria-hidden="true"></div>

            <header className="hello-header">
                <div className="hello-brand">
                    <span className="hello-brand-mark">L</span>
                    <span>Laravel <span className="hello-brand-divider">+</span> React</span>
                </div>
                <span className="hello-edition">YOUR FIRST PAGE <span>01</span></span>
            </header>

            <section className="hello-content" aria-labelledby="hello-title">
                <div className="hello-copy">
                    <p className="hello-eyebrow"><span></span> A little something is working</p>
                    <h1 id="hello-title">Hello,<br /><span>world.</span></h1>
                    <p className="hello-description">
                        Your first React page is alive inside Laravel. A small start, with a whole lot of room to grow.
                    </p>
                    <div className="hello-stack">
                        <span><i className="stack-dot laravel-dot"></i> Laravel</span>
                        <span><i className="stack-dot react-dot"></i> React</span>
                        <span><i className="stack-dot vite-dot"></i> Vite</span>
                    </div>
                </div>

                <aside className="hello-demo" aria-label="Interactive React demo">
                    <div className="demo-topbar">
                        <span className="demo-indicator"><i></i> LIVE COMPONENT</span>
                        <span className="demo-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                    </div>
                    <div className="demo-body">
                        <div className="demo-icon" aria-hidden="true">
                            <svg viewBox="0 0 48 48" fill="none">
                                <path d="M24 7v34M7 24h34M12 12l24 24m0-24L12 36" />
                                <circle cx="24" cy="24" r="5" />
                            </svg>
                        </div>
                        <p className="demo-label">A tiny bit of interactivity</p>
                        <p className="demo-count" aria-live="polite">{clicks}</p>
                        <p className="demo-caption">
                            {clicks === 0 ? 'Tap the button and watch React update this number.' : `Nice! You clicked ${clicks} ${clicks === 1 ? 'time' : 'times'}.`}
                        </p>
                        <button className="demo-button" onClick={() => setClicks((currentClicks) => currentClicks + 1)}>
                            Click me <span aria-hidden="true">↗</span>
                        </button>
                    </div>
                    <div className="demo-footer">
                        <span>STATE</span>
                        <span>count <b>{clicks}</b></span>
                    </div>
                </aside>
            </section>

            <footer className="hello-footer">
                <span>BUILT ONE STEP AT A TIME</span>
                <span className="footer-sparkle" aria-hidden="true">✳</span>
                <span>YOU’RE OFF TO A GOOD START</span>
            </footer>
        </main>
    );
}

const element = document.getElementById('app');

if (!element) {
    throw new Error('React mount element #app was not found.');
}

createRoot(element).render(<App />);