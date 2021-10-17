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
        display: flex;
    }

`;

export default ReviewSection
