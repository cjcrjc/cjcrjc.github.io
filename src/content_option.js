const logotext = "Cameron Chin";
const meta = {
    title: "Cameron Chin",
    description: "I’m Cameron Chin, a nanotechnology engineer who loves learning and designing new things",
};

import bg from './images/bg.png'
const introdata = {
    title: "Cameron Chin",
    animated: {
        first: "Nanotechnology",
        second: "Embedded Systems",
        third: "Computational Science",
    },
    description: "Second year Nanotechnology Engineering student with strong background in embedded systems, microcontrollers, and software engineering. Experience with Raspberry Pis, Arduino, Python, SolidWorks, Altium, 3D printing, web development, and mobile programming.",
    your_img_url: bg,
};

const dataabout = {
    title: "Cameron Chin",
    aboutme: "Second year Nanotechnology Engineering student with strong background in embedded systems, microcontrollers, and software engineering. Experience with Raspberry Pis, Arduino, Python, SolidWorks, Altium, 3D printing, web development, and mobile programming.",
};
const worktimeline = [

    {
        jobtitle: "Hardware Engineer",
        where: "Hub for Neuroengineering Solutions",
        date: "Jan 2024 – Apr 2024",
    }, {
        jobtitle: "AI Nanostructures Research Assistant",
        where: "University of Waterloo",
        date: "Sep 2023 – Apr 2024",
    }, {
        jobtitle: "Advanced Engineering Co-op",
        where: "Molded Precision Components",
        date: "May 2023 – Sep 2023",
    },
];

const skills = [{
    name: "Python",
    value: 90,
},
{
    name: "SolidWorks",
    value: 85,
},
{
    name: "Altium Designer",
    value: 75,
},
{
    name: "C++",
    value: 75,
},
{
    name: "Web Development",
    value: 70,
},
];

import img1 from './images/door.png'
import img2 from './images/scrapper.png'
import img3 from './images/pharma4.png'
import img4 from './images/golf.png'
import img5 from './images/comp2.jpg'
const dataportfolio = [
    {
        img: img1,
        description: "Embedded microcontroller running bypass server",
        link: "https://github.com/cjcrjc/nodemcuServer",
    }, {
        img: img2,
        description: "Webscrapper for collecting nanostructure images from research",
        link: "https://github.com/cjcrjc/researchWebscrapper",
    }, {
        img: img4,
        description: "JamHacks6 Hackathon winning project, 3D multigravity golf game",
        link: "https://devpost.com/software/galactigolf",
    }, {
        img: img5,
        description: "In the works 8-bit computer from ICs",
        link: "#",
    }, {
        img: img3,
        description: "Pharmacy utility mobile application for pharmacist appointments",
        link: "https://github.com/cjcrjc/pharmaFlow",
    },
];

const contactConfig = {
    YOUR_EMAIL: "cjchin@uwaterloo.ca",
    YOUR_FONE: "(519)-771-9394",
    description: "Feel free to send a message for any questions or problems!",
    YOUR_SERVICE_ID: "service_6le2eiq",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/cjcrjc",
    linkedin: "https://linkedin.com/in/camchin",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
