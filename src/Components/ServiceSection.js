import React from 'react'
import { InnerLayout } from '../styles/Layouts'
import styled from 'styled-components'
import Title from '../Components/Title'
import ServiceCard from '../Components/ServiceCard'
import design from '../images/design.svg'
import intelligence from '../images/intelligence.svg'
import gamedev from '../images/game-dev.svg'
function ServiceSection() {
    return (
        <InnerLayout>
           <ServiceSectionStyled>
            <Title title={'services'} span={'services'} />
            <div className="services">
                <ServiceCard 
                image={design} 
                title={'Web Design'} 
                paragraph={'I am a very good web designer'}/>
                <div className="mid-card">
                <ServiceCard 
                image={intelligence} 
                title={'Artificial Intelligence'} 
                paragraph={'I am a very good at artificial intelligence'}/>
                </div>
                
                <ServiceCard 
                image={gamedev} 
                title={'Game Developer'} 
                paragraph={'I am a very good game developer`'}/>
            </div>
           </ServiceSectionStyled> 
        </InnerLayout>
    )
}

const ServiceSectionStyled = styled.section`
    .services {
        display: flex;
        justify-content: space-between;
        margin-top: 5rem;
        cursor: pointer;
    }
    .mid-card{
        margin: 0 1.2rem
    }
`;

export default ServiceSection
