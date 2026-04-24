// Activar animaciones (quitar not-loaded igual que el original)
window.onload = () => {
    document.body.classList.remove('not-loaded');
    startFloatingNames();
};

// ── Nombres flotantes "Shumira" ──────────────────────────────
function startFloatingNames() {
    const container = document.getElementById('floatingNames');
    const variants = [
        'Shumira','Shumira 🌻','❤️ Shumira','Shumira ✨',
        '✿ Shumira ✿','Mi Shumira','Shumira 💛','🌸 Shumira',
        'Para Shumira','Shumira 🌼'
    ];

    function spawnName() {
        const el = document.createElement('span');
        el.className = 'float-name';
        el.textContent = variants[Math.floor(Math.random() * variants.length)];
        const size  = 0.9 + Math.random() * 2.0;
        const left  = 2 + Math.random() * 90;
        const dur   = 10 + Math.random() * 14;
        const delay = Math.random() * 4;
        const rot   = (Math.random() - 0.5) * 22;
        const op    = 0.06 + Math.random() * 0.16;
        el.style.cssText = `
            left:${left}vw;bottom:-60px;
            font-size:${size}rem;
            --r:${rot}deg;--o:${op};
            animation-duration:${dur}s;
            animation-delay:${delay}s;
        `;
        container.appendChild(el);
        setTimeout(() => el.remove(), (dur + delay + 1) * 1000);
    }

    for (let i = 0; i < 18; i++) spawnName();
    setInterval(spawnName, 1100);
}
