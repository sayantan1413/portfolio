import React from 'react'
import styled from 'styled-components'
function PrimaryButton({title}) {
    return (
        <PrimaryButtonStyled>
            { title }
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
    background-color: var(--primary-color);
    padding: 0.8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    transition: all 0.4s ease-in-out;
    position: relative;
    &:hover::after{
        content: "";
        position: absolute;
        background-color: var(--white-color);
        width: 100%;
        height: 0.2rem;
        left: 0;
        bottom: 0;
    }
`;

export default PrimaryButton
