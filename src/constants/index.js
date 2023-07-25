import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  tesla,
  reactnative,
  googleseo,
  reactcrud,
  threejs,
  bootstrap,
  phpsql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP & SQL",
    icon: phpsql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [

  {
    title: "Front end developer",
    company_name: "no IT-experience",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Myself doing a lot of projects to develop my web developing skills, i learned form mistakes initially i took more time to solve my problems for output of projects after that lot of practices i do my best.",
      "My best books for develop my skills- OReilly HTML and CSS, OReilly Learning React, OReilly Headfirst PHP & SQL, OReilly Headfirst Javascript Programming",
      "Also learn coding from freecodecamp, udacity, udemy, googlefreecourses, and youtube channels",
    ],
  },

];

const projects = [
  {
    name: "Find Job",
    description:
      "Mobile-application that allows users to search their relative jobs and easily get interactive with job details and its provides quick apply with google jobs.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "Rapid-API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: reactnative,
    source_code_link: "https://github.com/",
  },
  {
    name: "Blog",
    description:
      "This blog gives a detailed information about google search engine optimization, this give idea, how to ranking your webpage in top google ranking.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: googleseo,
    source_code_link: "https://infoscience.in/",
  },
  {
    name: "React CRUD",
    description:
      "CRUD operations plays important role in IT industries for data managment, This is a simple react Crud operations with json-server",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "json-server",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: reactcrud,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
