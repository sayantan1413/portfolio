import React from 'react'
import styled from 'styled-components'
function ServiceCard({ image, title, paragraph}) {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img src={image} alt="/" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    .container{
        padding: 1.2rem;
        position: relative;
        h4{
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            padding-bottom: 1rem;
            &::after{
                content: "";
                width: 4rem;
                background-color: var(--border-color);
                height: 3px;
                position: absolute;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }
    }
`;

export default ServiceCard;
