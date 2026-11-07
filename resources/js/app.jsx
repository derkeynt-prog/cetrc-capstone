import { createRoot } from 'react-dom/client';

function App() {
    return <h1>Hello from React!</h1>;
}

const rootElement = document.getElementById('app');
if (rootElement) {
    createRoot(rootElement).render(<App />);
}