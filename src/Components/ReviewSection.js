import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import ReviewItem from './ReviewItem'
function ReviewSection() {
    return (
        
        <ReviewStyled>
            <Title title={'Reviews'} span ={'Reviews'}/>
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem 
                        text={'A highly addictive technological enthusiast who is always open to learn any new skills and always eager to face new challenges'} 
                    />
                    <ReviewItem 
                        text={'A highly addictive technological enthusiast who is always open to learn any new skills and always eager to face new challenges'} 
                    />
                </div>
            </InnerLayout>
        </ReviewStyled>
        
    )
}

const ReviewStyled = styled.section`
     .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }

`;

export default ReviewSection
