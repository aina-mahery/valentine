const btnNon = document.getElementById('btn-non');
const btnOui = document.getElementById('btn-oui');
const quiz = document.getElementById('quiz');
const resultat = document.getElementById('resultat');

let tentatives = 0;
const MAX_TENTATIVES = 30;

function fuirBouton(e) {
    if (e) e.preventDefault();
    tentatives++;

    if (tentatives >= MAX_TENTATIVES) {
        btnNon.style.display = 'none';
        activerModePoursuite();
        return;
    }

    const padding = 20;
    const x = Math.random() * (window.innerWidth - btnNon.offsetWidth - padding);
    const y = Math.random() * (window.innerHeight - btnNon.offsetHeight - padding);

    btnNon.style.position = 'fixed';
    btnNon.style.left = `${Math.max(padding, x)}px`;
    btnNon.style.top = `${Math.max(padding, y)}px`;
}

function activerModePoursuite() {
    btnOui.style.position = 'fixed';
    btnOui.style.transition = 'transform 0.1s ease-out';
    btnOui.style.transform = 'scale(1.5)';
    btnOui.style.zIndex = '9999';
  
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX - btnOui.offsetWidth / 2;
        const y = e.clientY - btnOui.offsetHeight / 2;
        btnOui.style.left = `${x}px`;
        btnOui.style.top = `${y}px`;
    });

    window.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const x = touch.clientX - btnOui.offsetWidth / 2;
        const y = touch.clientY - btnOui.offsetHeight / 2;
        btnOui.style.left = `${x}px`;
        btnOui.style.top = `${y}px`;
    });
}

btnNon.addEventListener('mouseover', fuirBouton);
btnNon.addEventListener('touchstart', fuirBouton);
btnNon.addEventListener('click', fuirBouton);

btnOui.addEventListener('click', () => {
    quiz.classList.add('hidden');
    resultat.classList.remove('hidden');
});
