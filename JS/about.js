const aboutBtn = document.querySelector('.about-btn');
const formationBtn = document.querySelector('.formation-btn');
const aboutText = document.querySelector('.about-me-text');
let spans = document.querySelectorAll('.about-me-text span');

const txt = "I began to learn coding last year. I ever been passionate by new technologies, but when I was a teenage, I thought that was too hard for me. So, I continue my studies and get my educator specialized diploma. After that, I work during a few years in South of France, but quickly, I felt out of place. I went to change something so I took my luggage and came in Reunion Island. After that, I took the plunge and started training as an online web developer with the Studi platform. Today, I've been self-taught for almost a year. My aim is to continue developing my skills and make a living from my passion.";

const txt2 = "I started out as a self-taught web developer, via online videos on platforms such as Youtube and Openclassrooms. I then joined a graduate web developer course with Studi, a distance learning school. I spent hours learning through online courses, videos and hands-on practice. This process has become a way of life, with me constantly striving to improve and become the best developer I can be. Currently still in training, I hope to finish it soon and continue my studies in this field. "

const words = txt.split(' ');
const words2 = txt2.split(' ');

// Function qui affiche le texte
function displayText(wordsArray) {
    aboutText.innerHTML = ''; // Clear existing content

    wordsArray.forEach((word, wordIndex) => {
        const div = document.createElement('div');
        aboutText.appendChild(div);

        const letters = word.split('');
        letters.forEach((letter, letterIndex) => {
            const span = document.createElement('span');
            span.textContent = letter;
            div.appendChild(span);
        });
    });

    spans = document.querySelectorAll('.about-me-text span'); // Mettre à jour les spans à chaque appel de fonction
}


// Function pour que les spans s'affichent et se masquent progressivement au scroll
function handleScroll() {
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
}

// Function pour adapter le texte selon le click sur le button.
function handleButtonClick(wordsArray) {
    displayText(wordsArray);
    handleScroll(); // On appelle handleScroll pour que seul le texte visible apparaisse au click

    // On active l'événement handlescroll
    document.addEventListener("scroll", handleScroll);
}

aboutBtn.addEventListener('click', () => {
    handleButtonClick(words);
    aboutBtn.classList.add('active');
    formationBtn.classList.remove('active');
});

formationBtn.addEventListener('click', () => {
    handleButtonClick(words2);
    formationBtn.classList.add('active');
    aboutBtn.classList.remove('active');
});

// Affichage initial
handleButtonClick(words);
