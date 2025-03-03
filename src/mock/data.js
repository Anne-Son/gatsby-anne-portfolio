import { nanoid } from 'nanoid';
import giphyGif from '../images/studentApp.gif';
import roseGif from '../images/roseApp.gif';
import doctorPocket from '../images/doctorPocket.gif';
import portfolio from '../images/portfolio.gif';
import uniWP from '../images/uniWP.gif';

// HEAD DATA
export const headData = {
  title: 'Anne Developer',
  lang: 'en',
  description: 'Welcome to my website',
};

// HEADER DATA
export const headerData = {
  title: 'AnneSonLogo',
  img: 'annesonlog.png',
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// LOGOS DATA
export const logoData = [
  {
    id: nanoid(),
    img: 'react.png',
    alt: 'react',
  },
  {
    id: nanoid(),
    img: 'node-js.png',
    alt: 'node',
  },
  {
    id: nanoid(),
    img: 'javascript.png',
    alt: 'javascript',
  },
  {
    id: nanoid(),
    img: 'html.png',
    alt: 'html',
  },
  {
    id: nanoid(),
    img: 'css3.png',
    alt: 'css3',
  },
  {
    id: nanoid(),
    img: 'sass.png',
    alt: 'sass',
  },
  {
    id: nanoid(),
    img: 'jquery.png',
    alt: 'jquery',
  },
  {
    id: nanoid(),
    img: 'wordpress.png',
    alt: 'wordpress',
  },
  {
    id: nanoid(),
    img: 'github.png',
    alt: 'github',
  },
  {
    id: nanoid(),
    img: 'php.png',
    alt: 'php',
  },
  {
    id: nanoid(),
    img: 'java.png',
    alt: 'html',
  },
  {
    id: nanoid(),
    img: 'csharp.png',
    alt: 'csharp',
  },
  {
    id: nanoid(),
    img: 'sql.png',
    alt: 'sql',
  },
  {
    id: nanoid(),
    img: 'illustrator.png',
    alt: 'illustrator',
  },
  {
    id: nanoid(),
    img: 'photoshop.png',
    alt: 'photoshop',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    gif: portfolio,
    isGif: true,
    category: 'Web Development',
    title: 'Portfolio',
    info: `React Portfolio to show some of my projects. It is a forked repo from gatsby simplefolio. However I have changed 
    almost all of it. I added more features, like css animations, backgrounds with my own edited photos and another page for
    projects with a navbar with buttons according the categories that I have in my projects. Project deployed with github and
    a third party deployment service deployhq.com `,
    info2: 'Technologies: Gatsby, GraphQL, React, Bootstrap 4, Sass, Git, Photoshop',
    url: 'https://www.anneson.com/',
    repo: 'https://github.com/Anne-Son/gatsby-anne-portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    gif: uniWP,
    isGif: true,
    category: 'Web Development',
    title: 'WordPress site',
    info: `WordPress website created using custom theme, custom posts, some plugins for managing the size of images, for importing and exporting all the website for deployment, etc., google map API, REST API, AJAX, AXIOS. Project deployed with plugins `,
    info2: 'Technologies: Javascript, PHP, JQuery, Bootstrap 4, webpack, node, mySql',
    url: 'https://www.uni.anneson.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gap.png',
    isGif: false,
    category: 'Email Development',
    title: 'Transactional HTML Email',
    info: `I duplicate an email from GAP that I have received and I converted it into a Transactional HTML Email `,
    info2: 'Technologies: Javascript, HMTL5, CSS3, email on acid, Illustrator',
    url: 'https://www.transactionalemail.anneson.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'graphic-design.jpg',
    isGif: false,
    category: 'Graphic Design',
    title: 'Orthé graphic design materials',
    info: `I was part of the opening team for a dental office, called Orthé. I became versed in several fields of communication technology to help the business grow and I apply these methods proficiently. I learned how to build a website in Squarespace, edit photos in Photoshop, create logos and design graphic materials for the workspace. `,
    info2: 'Technologies: Squarespace, Photoshop, Illustrator, HTML5, CSS3',
    url: 'https://www.graphic.anneson.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    gif: doctorPocket,
    isGif: true,
    category: 'Software Development',
    title: 'DoctorPocket',
    info: `Android Application to find doctors available in your area and book an appointment. In this project I wrote the code for signing up, 
    displaying the doctors list, the calendar, and implementing the design for the UI according to a Figma file.`,
    info2: 'Technologies: Java, SQLite as database and Source Control Git',
    url: '',
    repo: 'https://github.com/Anne-Son/PocketDoctor', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    gif: roseGif,
    isGif: true,
    category: 'Software Development',
    title: 'Rose Purchase Management App',
    info: `My role in this project was Team leader. As a team leader I organized the meetings, 
    discussed the parts that each team will be working on, and taught them how to work with github.
    I had brought the idea for the app, and created the ER diagram, database with mock data and develop the purchase agent section
    of the app.`,
    info2: 'Technologies: C#, ado.net, Entity Framework 6, SQL as database and Source Control Git',
    url: '',
    repo: 'https://github.com/Anne-Son/RosePurchaseManagementApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    gif: giphyGif,
    isGif: true,
    category: 'Software Development',
    title: 'Student Registration App',
    info: 'The student registration app was a team project. The application was created using Winforms, linq',
    info2: 'Technologies: C#, ado.net, Entity Framework 6, SQL as database and Source Control Git',
    url: '',
    repo: 'https://github.com/Anne-Son/StudentRegistrationApp', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'annesontech@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/annesontech',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anneson/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Anne-Son',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
