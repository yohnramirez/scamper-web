import img1 from '../../images/section-1.svg';
import img3 from '../../images/section-2.svg';
import img2 from '../../images/section-3.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Group work',
    headLine: 'About Us',
    description: 'We are systems engineering students from the University of Cundinamarca specialized in software architecture and development.',
    buttonLabel: 'Our Services',
    imgStart: false,
    img: `${img1}`,
    alt: 'Team',
    primary: true,
    darkText: false,
    link: 'services'
}
export const homeObjTwo = {
    id: 'stack',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'The best stack web',
    headLine: 'Technologies stack',
    description: 'We use the most modern technologies for the creation of software for our clients including Angular, React JS, Node JS, MySQL, etc.',
    buttonLabel: 'See Stack',
    imgStart: true,
    img: `${img2}`,
    alt: 'Team',
    primary: true,
    darkText: true,
    link: ''
}
export const homeObjThree = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Chat with us',
    headLine: 'Contact',
    description: 'Chat with us and tell us about your business idea.',
    buttonLabel: 'Send a email',
    imgStart: false,
    img: `${img3}`,
    alt: 'Team',
    primary: true,
    darkText: true,
    link: ''
}