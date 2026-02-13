const btnNon = document.getElementById('btn-non');
const btnOui = document.getElementById('btn-oui');
const quiz = document.getElementById('quiz');
const resultat = document.getElementById('resultat');

function fuirBouton(e) {
    if (e) e.preventDefault();
    const maxX = window.innerWidth - btnNon.offsetWidth - 20;
    const maxY = window.innerHeight - btnNon.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    btnNon.style.position = 'fixed';
    btnNon.style.left = `${x}px`;
    btnNon.style.top = `${y}px`;
    const rot = (Math.random() - 0.5) * 40;
    btnNon.style.transform = `rotate(${rot}deg)`;
}

btnNon.addEventListener('mouseover', fuirBouton);

btnNon.addEventListener('touchstart', fuirBouton);

btnNon.addEventListener('click', (e) => {
    e.preventDefault();
    fuirBouton();
});

btnOui.addEventListener('click', () => {
    quiz.classList.add('hidden');
    resultat.classList.remove('hidden');
});
