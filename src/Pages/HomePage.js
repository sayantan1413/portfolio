import React from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particles';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import Typewriter from 'typewriter-effect';
function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-container">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi 👋, I'm
                <Typewriter  options={{
                autoStart: true,
                loop: true,
                }}
                className="typewriter"
                    onInit={(typewriter) => 
                        typewriter.typeString('Sayantan Bose 👦')
                        .pauseFor(2000)
                        .deleteAll()
                        .start()
                        .typeString('A Web Developer 🧑‍💻')
                        .pauseFor(2000)
                        .deleteAll()
                        .start()
                        .typeString('An OSS Lover ❤️')
                        .pauseFor(2000)
                        .deleteAll()
                        .start()
                        .typeString('A Foodie 🍽')
                        .pauseFor(2000)
                        .deleteAll()
                        .start()
                    }
                />
                </h1>
                <p>A highly addictive technological enthusiast who is always open to learn any new skills and always eager to face new challenges </p>
                <div className="icons">
                    <a href="https://www.facebook.com/profile.php?id=100008441195554" className="icon i-facebook" target="_blank"><FacebookIcon /></a>
                    <a href="https://www.linkedin.com/in/sayantan-bose-14134a1a6/" className="icon i-linkedin" target="_blank"><LinkedInIcon /></a>
                    <a href="https://twitter.com/Sayantan1413" className="icon i-twitter" target="_blank"><TwitterIcon /></a>
                    <a href="https://github.com/sayantan1413" className="icon i-github" target="_blank"><GitHubIcon /></a>
                    <a href="#" className="icon i-website" target="_blank"><LanguageIcon /></a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage
