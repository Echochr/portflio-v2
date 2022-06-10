import pokedex from '../assets/projects/pokedex.png';
import yelpcamp from '../assets/projects/yelpcamp.png';
import todolist from '../assets/projects/todolist.png';
import find_the_crown from '../assets/projects/find_the_crown.png';

const PROJECTS = [
  {
    title: 'Pokedex',
    description: 'Pokedex showing all Pokemons from Gen 1-8',
    appLink: 'https://echochr.github.io/pokedex',
    sourceCode: 'https://github.com/Echochr/pokedex',
    img: pokedex,
  },
  {
    title: 'Yelpcamp',
    description:
      "A campground review website project guided by Colt Steele's Web Developer Bootcamp on Udemy",
    appLink: 'https://yelpcamp-052021.herokuapp.com/',
    sourceCode: 'https://github.com/Echochr/yelpcamp',
    img: yelpcamp,
  },
  {
    title: 'Todolist',
    description: 'A Todolist app with CRUD functions deployed on heroku',
    appLink: 'https://todolist-genhk.herokuapp.com/tasks',
    sourceCode: 'https://github.com/fewd02grp2/fewd02grp2.github.io',
    img: todolist,
  },
  {
    title: 'Find The Crown',
    description:
      "A simple web game to find the crown. Original concept from Codecademy's Javascript capstone project",
    appLink: 'https://echochr.github.io/find_the_crown/',
    sourceCode: 'https://github.com/Echochr/find_the_crown',
    img: find_the_crown,
  },
];

export default PROJECTS;