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

// PopUp Window
const projects = [
  {
    name: 'International Festival of Yucatecan Music',
    description: 'An online platform that promotes and celebrates the musical heritage of the Yucatán Peninsula. It provides users with information about the festival, its lineup, schedules, and various events. The website aims to create an immersive experience for visitors interested in Yucatecan music and culture.',
    featuredImage: 'Sources/InternationalFestival.svg',
    technologies: ['CSS', 'HTML', 'JavaScript'],
    liveDemo: 'https://jhonatanerosa.github.io/Capstone_International-Festival-of-Yucatecan-Music/',
    sourceURL: 'https://github.com/JhonatanErosa/Capstone_International-Festival-of-Yucatecan-Music',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'Sources/SnapshootPortfolio.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveDemo: 'https://jhonatanerosa.github.io/Portfolio/',
    sourceURL: 'https://github.com/JhonatanErosa/Portfolio',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'Sources/Dashboard.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveDemo: 'https://jhonatanerosa.github.io/Portfolio/',
    sourceURL: 'https://github.com/JhonatanErosa/Portfolio',
  },
  {
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'Sources/WebSitePortfolio.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveDemo: 'https://jhonatanerosa.github.io/Portfolio/',
    sourceURL: 'https://github.com/JhonatanErosa/Portfolio',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'Sources/SnapshootPortfolio.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveDemo: 'https://jhonatanerosa.github.io/Portfolio/',
    sourceURL: 'https://github.com/JhonatanErosa/Portfolio',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'Sources/Dashboard.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveDemo: 'https://jhonatanerosa.github.io/Portfolio/',
    sourceURL: 'https://github.com/JhonatanErosa/Portfolio',
  },
  {
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'Sources/WebSitePortfolio.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveDemo: 'https://jhonatanerosa.github.io/Portfolio/',
    sourceURL: 'https://github.com/JhonatanErosa/Portfolio',
  },
];

const projectsSection = document.querySelector('#projectsSection');

// popUp function
function showModal(index) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  const project = projects[index];
  const projectName = project.name;
  const projectDescription = project.description;
  const projectImage = project.featuredImage;
  const projectLiveDemo = project.liveDemo;
  const projectSourceURL = project.sourceURL;
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
  const closeButton2 = modalContent.querySelector('.modalHeader');
  const xButton = closeButton2.querySelector('img');
  modal.appendChild(modalContent);
  projectsSection.appendChild(modal);
  modal.style.display = 'block';
  xButton.addEventListener('click', () => {
    modal.style.display = 'none';
    projectsSection.removeChild(modal);
  });
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      projectsSection.removeChild(modal);
    }
  });
}

// Create main card function
const mainCard = document.createElement('div');
mainCard.classList.add('mainCard');
projectsSection.appendChild(mainCard);

const cardImage = document.createElement('div');
cardImage.classList.add('cardImage');
cardImage.innerHTML = `<img src="${projects[0].featuredImage}">`;
mainCard.appendChild(cardImage);

const mainCardContent = document.createElement('div');
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

const projectButton = mainCardContent.querySelector('.projectsButton');
projectButton.addEventListener('click', () => {
  showModal([0]);
});

// Create cards function
function createProjectCard(project, index) {
  const card = document.createElement('div');
  card.classList.add('genericCard1');
  card.setAttribute('id', 'genericCard');
  card.style.backgroundImage = `url(${project.featuredImage})`;

  const cardContent = document.createElement('div');
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

  const projectButton2 = cardContent.querySelector('.projectsButton2');
  projectButton2.addEventListener('click', () => {
    showModal(index);
  });

  return card;
}

for (let i = 1; i < projects.length; i += 1) {
  const card = createProjectCard(projects[i], i);
  projectsSection.appendChild(card);
}

// Validate email form
const form = document.getElementById('form');
const emailValidation = document.querySelector('.emailValidation');
const email = document.getElementById('email');

function validateInputs() {
  const valueEmail = email.value;
  if (valueEmail !== valueEmail.toLowerCase()) {
    emailValidation.classList.add('invalidEmail');
    return false;
  }
  emailValidation.classList.remove('invalidEmail');
  return true;
}

form.addEventListener('submit', (elem) => {
  elem.preventDefault();
  const valid = validateInputs();
  if (valid === true) {
    form.submit();
  }
});

// Local Storage
const userName = document.querySelector('#user-name');
const userEmail = document.querySelector('#email');
const userMessage = document.querySelector('#msg');

function saveUserData() {
  const userData = {
    name: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
}

function getUSerData() {
  if (localStorage.getItem('userData')) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    userName.value = userData.name;
    userEmail.value = userData.email;
    userMessage.value = userData.message;
  }
}

userName.addEventListener('change', () => {
  saveUserData();
});

userEmail.addEventListener('change', () => {
  saveUserData();
});

userMessage.addEventListener('change', () => {
  saveUserData();
});

getUSerData();