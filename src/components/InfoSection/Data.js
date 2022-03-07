import img1 from '../../images/section-1.svg';
import img2 from '../../images/section-2.svg';
import img3 from '../../images/section-3.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'encabezado',
    headLine: 'About Us',
    description: 'descripcion',
    buttonLabel: 'Our Services',
    imgStart: false,
    img: `${img1}`,
    alt: 'Team',
    primary: true,
    darkText: false
}
export const homeObjTwo = {
    id: '',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'encabezado',
    headLine: 'Titulo Sección',
    description: 'descripcion',
    buttonLabel: 'Botón',
    imgStart: true,
    img: `${img2}`,
    alt: 'Team',
    primary: true,
    darkText: true
}
export const homeObjThree = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'encabezado',
    headLine: 'Titulo Sección',
    description: 'descripcion',
    buttonLabel: 'Botón',
    imgStart: false,
    img: `${img3}`,
    alt: 'Team',
    primary: true,
    darkText: true
}