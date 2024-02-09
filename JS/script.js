const cursor = document.querySelector('.cursor');
// Création d'un curseur personnalisé
document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 15)+'px; left:'+(e.pageX - 15)+'px;')
})
// Ajout d'un effet au click pour le curseur
document.addEventListener('click', () => {
    cursor.classList.add('expand');

    setTimeout(() => {
        cursor.classList.remove('expand');
    }, 500)
})


const hamburgerButton = document.querySelector('.nav-toggler');
const navigation = document.querySelector('nav');
// Activation du click sur le burger button
hamburgerButton.addEventListener('click', toggleNav)
// Function pour faire défiler les items de la navbar version mobile
function toggleNav () {
    hamburgerButton.classList.toggle('active')
    navigation.classList.toggle('active')
}


