import React from 'react'
import styled from 'styled-components'
import { MainLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import ServiceSection from '../Components/ServiceSection'
import ReviewSection from '../Components/ReviewSection'
function AboutPage() {
    return (
        <MainLayout>
            
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
            </AboutStyled>
            <ServiceSection />
            <ReviewSection />
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`;

export default AboutPage
