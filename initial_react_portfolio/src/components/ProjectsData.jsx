import { BiLogoCss3, BiLogoMongodb, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress, SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import port from '../assets/Images/basic.png';
import devhob from '../assets/Images/image.png';
import student from '../assets/images/studmarkman.png';
import express from '../assets/images/express.png';
import workji from '../assets/images/workji.png';
import tailwind from '../assets/images/tailwind.png';
import java from '../assets/images/java.png';
import python from '../assets/images/python.png';

const ProjectsData = [
  {
    id: "1",
    name: "Basic Portfolio",
    image: port,
    icons: [BiLogoReact, BiLogoCss3, SiJavascript],
    description: "This website provides A preview of  data works as a portfolio for many people",
    github: "https://github.com/SathwikUK/portfolio",
    demo: "https://portfolio-peach-six-47.vercel.app/",
  },
  {
    id: "2",
    name: "Workout-JI",
    image: workji,
    icons: [BiLogoReact, BiLogoCss3, SiJavascript,SiExpress,BiLogoMongodb,FaNodeJs],
    description: "This website insights gives scheduling our workouts.",
    github: "https://github.com/SathwikUK/workout-ji",
    demo: "https://workout-ji-mj3w.vercel.app/",
  },
  {
    id: "3",
    name: "Developers-HUB",
    image: devhob,
    icons: [BiLogoReact, BiLogoCss3, SiJavascript,SiExpress,BiLogoMongodb,FaNodeJs],
    description: "In This Website Developers Hire Each other and get their work done.",
    github: "https://github.com/SathwikUK/Developer-Hub",
    demo: "https://developer-hub-api.vercel.app/",
  },
  {id: "4",
    name: "Student Marks Management",
    image: student,
    icons: [BiLogoReact, BiLogoCss3, SiJavascript,SiExpress,BiLogoMongodb,FaNodeJs],
    description: "This website insights Managing Student Marks in a Organisation.",
    github: "https://github.com/SathwikUK/StudentMarksManagement",
    demo: "https://student-marks-management-client.vercel.app/",
  },
  
];

export default ProjectsData;