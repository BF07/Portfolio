/* Défilement vertical au scroll */
const skillsSection = document.querySelector('.skills-content');
const aboutSection = document.querySelector('.about-me');
// Création d'une variable pour informer du scroll vers le bas ou vers le haut
let prevScrollTop = 0;

window.addEventListener('scroll', () => {
    // Récupération des propriétés de défilement
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    const scrollDirection = scrollTop > prevScrollTop ? 'down' : 'up';
    // Met à jour la position précédente du défilement
    prevScrollTop = scrollTop;
    // Vérifie si l'utilisateur a atteint le bas de la section des compétences
    if (scrollTop >= skillsSection.scrollHeight && scrollDirection === 'down') {
        // Défilement horizontal vers la droite
        skillsSection.scrollBy(4, 0); 
    } else if (scrollTop < aboutSection.scrollHeight && scrollDirection === 'up') {
        skillsSection.scrollBy(-4, 0);
    }


});

const aboutText = document.querySelector('.about-me-text');
const txt = "I began to learn coding last year. I ever been passionate by new technologies, but when I was a teenage, I thought that was too hard for me. So, I continue my studies and get my educator specialized diploma. After that, I work during a few years in South of France, but quickly, I felt out of place. I went to change something so I took my luggage and came in Reunion Island. After that, I took the plunge and started training as an online web developer with the Studi platform. Today, I've been self-taught for almost a year. My aim is to continue developing my skills and make a living from my passion.";
const words = txt.split(' ');


words.forEach((word, wordIndex) => {
    // On créé une div pour chaque mot
    const div = document.createElement('div');
    aboutText.appendChild(div);

    const letters = word.split('');
    // On créé un span pour chaque lettre
    letters.forEach((letter, letterIndex) => {
        const span = document.createElement('span');
        span.textContent= letter;
        // On fait en sorte que chaque div contiennent le nombre de span nécessaire pour le mot
        div.appendChild(span)
        })
});

const spans = document.querySelectorAll('.about-me-text span');

document.addEventListener("scroll", (e) => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    let scrolled =  scrollTop / (scrollHeight - clientHeight) * spans.length;
    spans.forEach(function(span, i) {
      if ((scrolled - i) > aboutText.getBoundingClientRect().top)
        span.style.opacity = '1'
      else if ((scrolled - i) < aboutText.getBoundingClientRect().top)
        span.style.opacity = "0"
      else
        span.style.opacity = (scrolled - i);
    });
  });




