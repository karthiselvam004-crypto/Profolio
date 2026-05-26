import { BiLogoFirebase, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoRedux, BiLogoTailwindCss } from "react-icons/bi";
import { FaJava, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { TbApi, TbDatabase } from "react-icons/tb";
import WeatherImage from "../assets/We.jpg";
import digitalClock from "../assets/digital-clock.png";
import webCalculator from "../assets/web-calculator.png";





const ProjectsData = [
    // {
    //     id: "1",
    //     name: "Student Management System",
    //     image: "./student_management.png",
    //     icons: [FaJava, FaDatabase, FaGithub],
    //     description: "Integrated platform for efficiently managing student information, academic records, and administrative tasks.",
    //     github: "https://github.com/keerthivasan0108/Java_Projects/tree/main/studentdatabaseapp",
    //     demo: "https://social-media-feed-sepia.vercel.app",
    // },
    {
        id: "2",
        name: "Web Calculator Application",
        image: webCalculator,
        icons: [FaHtml5, FaCss3Alt,FaJsSquare, FaGithub],
        description: "A calculator with arithmetic operations (add, subtract, multiply, divide) and a user-friendly dynamic interface.",
        github: "https://github.com/Karthis7/Calculator",
        demo: "/",
    },
    {
        id: "3",
        name: "Digital Clock Application",
        image: digitalClock,
        icons: [FaHtml5, FaCss3Alt,FaJsSquare, FaGithub],
        description: "A dynamic digital clock that displays current time and date, showcasing real- time updates and customizable features.",
        github: "https://github.com/Karthis7/Digital-Clock",
        demo: "/",
    },
    {
        id: "4",
        name: "Weather App",
        image: WeatherImage,
        icons: [FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, AiOutlineApi],
        description: "A sleek and user-friendly weather app providing real-time forecasts and weather updates.",
        github: "https://github.com/Karthis7/Weather-app",
        demo: "https://subash-hotel.vercel.app",
    },

];

export default ProjectsData;