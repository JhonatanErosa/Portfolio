const hamburger = document.querySelector('.hamburger');
const mainLinks = document.querySelector('#navItems-links');
const linksPopUp = document.querySelectorAll('.menu-navItems');
const closeIcon = document.querySelector('.close-button');

function openWindow() {
  mainLinks.classList.replace('navItems', 'navItems-menu');
}

function closeWindow() {
  mainLinks.classList.replace('navItems-menu', 'navItems');
}

hamburger.addEventListener('click', openWindow);
closeIcon.addEventListener('click', closeWindow);
for (let i = 0; i < linksPopUp.length; i += 1) {
  linksPopUp[i].addEventListener('click', closeWindow);
}

//PopUp Window
let projects = [
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'Sources/MultiPostStories.svg',
    technologies: ['CSS','HTML', 'Bootstrap', 'Ruby'],
    liveDemo: 'https://jhonatanerosa.github.io/Portfolio/',
    sourceURL: 'https://github.com/JhonatanErosa/Portfolio'
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'Sources/SnapshootPortfolio.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveDemo: 'https://jhonatanerosa.github.io/Portfolio/',
    sourceURL: 'https://github.com/JhonatanErosa/Portfolio'
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'Sources/Dashboard.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveDemo: 'https://jhonatanerosa.github.io/Portfolio/',
    sourceURL: 'https://github.com/JhonatanErosa/Portfolio'
  },
  {
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'Sources/WebSitePortfolio.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveDemo: 'https://jhonatanerosa.github.io/Portfolio/',
    sourceURL: 'https://github.com/JhonatanErosa/Portfolio'
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'Sources/SnapshootPortfolio.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveDemo: 'https://jhonatanerosa.github.io/Portfolio/',
    sourceURL: 'https://github.com/JhonatanErosa/Portfolio'
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'Sources/Dashboard.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveDemo: 'https://jhonatanerosa.github.io/Portfolio/',
    sourceURL: 'https://github.com/JhonatanErosa/Portfolio'
  },
  {
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'Sources/WebSitePortfolio.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveDemo: 'https://jhonatanerosa.github.io/Portfolio/',
    sourceURL: 'https://github.com/JhonatanErosa/Portfolio'
  },
];