import deved from '../../public/dev-ed-wave.png'
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";

export const AboutMe = {
    name: 'Vania Savosko',
    position: 'Front-end developer',
    title: 'I am a Front-end developer from Ukraine! I get a kick out of code! I like to bring designs to life, and I understand that I have found my calling.',
    img: deved
}

export const Offer = {
    title: 'Services I offer',
    desc: `I started my journey in "it" with web-design, but I was always drawn to coding. So currently I'm a beginner frontend developer! And I am maximally satisfied with it`,
    desc2: 'I have been studying for a long time and I can boast of such skills:'
}

export const Skills = [
    {
        id: 'design',
        img: design,
        name: 'Designs',
        desc: 'Due to my background as a web designer, I know and use programs such as:',
        value: 'Tools I Use:',
        instrument: ['Photoshop', 'Illustrator', 'Figma']
    },
    {
        id: 'code',
        img: code,
        name: 'Code',
        desc: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
        value: 'Languages I speak:',
        instrument: ['HTML', 'CSS', 'JavaScript', 'Git']
    },
    {
        id: 'consulting',
        img: consulting,
        name: 'libraries and Frameworks',
        desc: 'Coding on pure js is not as cool as using libraries and frameworks',
        value: 'What I Use:',
        instrument: ['React.js', 'Next.js', 'Vite.js', 'Tailwind']
    } 
];

export const Work = {
    title: 'Portfolio',
    desc: `Here are a few past projects I've worked on.`
}

export const footer = {
    title: `"Living, learning & leveling up one day at a time." This is my favorite quote. She probably shows me completely from the inside`
}