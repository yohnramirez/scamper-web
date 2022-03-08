import React from 'react'
import Icon1 from '../../images/service-1.svg'
import Icon2 from '../../images/service-2.svg'
import Icon3 from '../../images/service-3.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
  return (  
    <ServicesContainer id="services">
          <ServicesH1>Our Services</ServicesH1>
          <ServicesWrapper>
              <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Mobile Web</ServicesH2>
                    <ServicesP>
                      Mobile applications to manage your business
                    </ServicesP>
              </ServicesCard>
              <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Static WebSites</ServicesH2>
                    <ServicesP>
                      Informative web pages to publicize your business
                    </ServicesP>
              </ServicesCard>
              <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Single Page Apps</ServicesH2>
                    <ServicesP>
                      Dynamic web applications made with a single page
                    </ServicesP>
              </ServicesCard>
          </ServicesWrapper>
      </ServicesContainer>
  )
}

export default Services