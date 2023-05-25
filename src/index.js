import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import Particles from 'particlesjs';

window.onload = function () {
    Particles.init({
        selector: '.background',
        sizeVariations: 4,
        connectParticles: true,
        minDistance: 200,
        color: '#808080',
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 100,
                    color: '#D3D3D3',
                    minDistance: 70,
                    connectParticles: true,
                },
            },
            {
                breakpoint: 425,
                options: {
                    maxParticles: 100,
                    connectParticles: true,
                },
            },
            {
                breakpoint: 320,
                options: {
                    maxParticles: 0,
                },
            },
        ],
    });
};
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
