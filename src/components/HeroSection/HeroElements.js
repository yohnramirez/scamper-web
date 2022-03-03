import styled from "styled-components";
import Bg from '../../images/background.svg';
import { MdArrowForwardIos, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url(${Bg});
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    padding: 8px 24px;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2
    col1 col1'` : `'col1 col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1'
        'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    grid-area: col1;
`
export const Column2 = styled.div`
    padding: 0 15px;
    grid-area: col2;
`



export const HeroH1 = styled.h1`
color: #141E27;
    font-size: 48px;
    text-align: left;
    @media screen and (max-width: 768px){
        font-size: 40px;
        text-align: center;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #141E27;
    font-size: 24px;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px){
        text-align: center;
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const Img = styled.img`
    display: block;
    width: 550px;
    height: 400px;

    @media screen and (max-width: 1020px){
        width: 450px;
        height: 300px;
    }
    @media screen and (max-width: 916px){
        width: 350px;
        height: 200px;
    }
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 768px){
        align-items: center;
    }

`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdArrowForwardIos)`
    margin-left: 8px;
    font-size: 14px;
`