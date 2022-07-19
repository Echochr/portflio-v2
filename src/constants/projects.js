import pokedex from '../assets/projects/pokedex.png';
import yelpcamp from '../assets/projects/yelpcamp.png';
import todolist from '../assets/projects/todolist.png';
import booking_clone from '../assets/projects/booking_clone.png';

const PROJECTS = [
  {
    title: 'Booking clone',
    description: 'Hotel booking website clone. Backend API deployed on Heroku, frontend Web UI client deployed on Netlify.',
    appLink: 'https://booking-clone-client.netlify.app/',
    sourceCode: 'https://github.com/Echochr/booking-clone-server',
    img: booking_clone,
    skills: ['Typescript', 'React', 'TailwindCSS', 'Redux', 'Node.js', 'Express', 'REST API', 'MongoDB'],
  },
  {
    title: 'Pokedex',
    description: 'Pokedex showing all Pokemons from Gen 1-8',
    appLink: 'https://echochr.github.io/pokedex',
    sourceCode: 'https://github.com/Echochr/pokedex',
    img: pokedex,
    skills: ['HTML', 'CSS', 'Javascript'],
  },
  {
    title: 'Yelpcamp',
    description:
      "A campground review website project guided by Colt Steele's Web Developer Bootcamp on Udemy",
    appLink: 'https://yelpcamp-052021.herokuapp.com/',
    sourceCode: 'https://github.com/Echochr/yelpcamp',
    img: yelpcamp,
    skills: ['HTML', 'CSS', 'Javascript', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Todolist',
    description: 'A Todolist app with CRUD functions deployed on heroku',
    appLink: 'https://todolist-genhk.herokuapp.com/tasks',
    sourceCode: 'https://github.com/fewd02grp2/fewd02grp2.github.io',
    img: todolist,
    skills: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
];

export default PROJECTS;
