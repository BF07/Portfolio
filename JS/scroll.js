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






