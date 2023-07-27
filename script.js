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

let projectsSection = document.querySelector('#projectsSection');

//popUp function
function showModal(index) {
  let modal = document.createElement('div');
  modal.classList.add('modal');
  let modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  let project = projects[index];
  let projectName = project.name;
  let projectDescription = project.description;
  let projectImage = project.featuredImage;
  let projectLiveDemo = project.liveDemo;
  let projectSourceURL = project.sourceURL;
  modalContent.innerHTML = `
  <div class='modalHeader'>
    <h3>${projectName}</h3>
    <img id='closeButton' src="Sources/Icons/IconCancel.svg" alt="">
  </div>
  <ul class='categories'>
      ${project.technologies.map((element) => `<li>${element}</li>`).join('')}
  </ul>
  <div id='contentModal'>
    <img src='${projectImage}' alt=''>
    <div id='descriptionModal'>
      <p>${projectDescription}</p>
      <ul class='modalLinks'>
        <li>
          <a href='${projectLiveDemo}'>See live</a>
          <img src="Sources/Icons/IconSeeLive.svg" alt="">
        </li>
        <li>
          <a href='${projectSourceURL}'>See source</a>
          <img src="Sources/Icons/IconSeeSource.svg" alt="">
        </li>
      </ul>
    </div>
  </div>
  `;
  let closeButton2 = modalContent.querySelector('.modalHeader');
  let xButton = closeButton2.querySelector('img');
  modal.appendChild(modalContent);
  projectsSection.appendChild(modal);
  modal.style.display = 'block';
  xButton.addEventListener('click', function () {
    modal.style.display = 'none';
    projectsSection.removeChild(modal);
  });
  window.addEventListener('click', function(event) {
    if(event.target === modal) {
      modal.style.display = 'none';
      projectsSection.removeChild(modal);
    }
  });
};

//Create main card function
let mainCard = document.createElement('div');
mainCard.classList.add('mainCard');
projectsSection.appendChild(mainCard)

let cardImage = document.createElement('div');
cardImage.classList.add('cardImage');
cardImage.innerHTML = `<img src="${projects[0].featuredImage}">`;
mainCard.appendChild(cardImage);

let mainCardContent = document.createElement('div');
mainCardContent.classList.add('cardContent');
mainCardContent.innerHTML = `
<h3>${projects[0].name}</h3>
<p>${projects[0].description}</p>
<ul class="mainCategories">
  ${projects[0].technologies.map((element) => `<li>${element}</li>`).join('')}
</ul>
<a class='projectsButton'>See project</a>
`;
mainCard.appendChild(mainCardContent);

let projectButton = mainCardContent.querySelector('.projectsButton',);
projectButton.addEventListener('click', function () {
  showModal([0]);
});

//Create cards function
function createProjectCard (project, index) {
  let card = document.createElement('div');
  card.classList.add('genericCard1');
  card.setAttribute('id', 'genericCard')
  card.style.backgroundImage = `url(${project.featuredImage})`;

  let cardContent = document.createElement('div');
  cardContent.classList.add('cardContent2');
  cardContent.innerHTML = `
  <h2>${project.name}</h2>
  <p>${project.description}</p>
  <ul class='categories'>
    ${project.technologies.map((element) => `<li>${element}</li>`).join('')}
  </ul>
  <a class='projectsButton2'>See project</a>
  `;
  card.appendChild(cardContent);

  let projectButton2 = cardContent.querySelector('.projectsButton2',);
  projectButton2.addEventListener('click', function () {
    showModal(index);
  });

  return card;
};

for (let i = 1 ; i < projects.length; i += 1) {
  let card = createProjectCard(projects[i], i);
  projectsSection.appendChild(card);
};