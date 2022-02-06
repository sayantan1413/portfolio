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
                title={'Website Developement'} 
                paragraph={'I am a full stack web developer (React js + Spring Boot)'}/>
                {/*<div className="mid-card">
                <ServiceCard 
                image={intelligence} 
                title={'Artificial Intelligence'} 
                paragraph={'I am a very good at artificial intelligence'}/>
                </div>
                
                <ServiceCard 
                image={gamedev} 
                title={'Game Developer'} 
                paragraph={'I am a very good game developer`'}/> */}
            </div>
           </ServiceSectionStyled> 
        </InnerLayout>
    )
}

const ServiceSectionStyled = styled.section`
     .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServiceSection
