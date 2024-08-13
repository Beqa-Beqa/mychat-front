import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App.tsx';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);