import React, { useState } from 'react'
import { Button } from '../ButtonElement'
import HeroImg from '../../images/hero-2.png'
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    Column1,
    Column2,
    HeroH1,
    HeroP,
    Img,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
    <HeroContainer id='/'>
        <HeroBg/>
        <HeroContent>
            <Column1>
                <HeroH1>Software Development</HeroH1>
                <HeroP>
                    We create quality software for your business 
                    offering you the best solutions.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="services" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true">
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </Column1>
            <Column2>
                <Img src={HeroImg}/>
            </Column2>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection