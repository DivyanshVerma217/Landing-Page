import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Service 1</ServicesH2>
          <ServicesP>All your data is safe at our highly secured database.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Service 2</ServicesH2>
          <ServicesP>you can acess our plataform online anywhere in the world.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Service 3</ServicesH2>
          <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
