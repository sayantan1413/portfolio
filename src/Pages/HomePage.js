import React from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particles';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-container">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi I'm <span>Sayantan Bose</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="icons">
                    <a href="#" className="icon i-facebook"><FacebookIcon /></a>
                    <a href="#" className="icon i-linkedin"><LinkedInIcon /></a>
                    <a href="#" className="icon i-twitter"><TwitterIcon /></a>
                    <a href="#" className="icon i-github"><GitHubIcon /></a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .p-particles-js {
        position: absolute;
        top: 0;
        left: 0;
    }

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
    }

    .icons {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        
        .icon {
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.4s ease-in-out;
            cursor: pointer;
            &:hover{
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
            }
            &:not(:last-child){
                margin-right: 1rem;
            }
            svg {
                margin: 0.5rem;
            }
        }
    }
`;

export default HomePage
