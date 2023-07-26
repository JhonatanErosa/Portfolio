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

