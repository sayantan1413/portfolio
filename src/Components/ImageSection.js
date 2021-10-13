import React from 'react'
import styled from 'styled-components'
import resume from '../images/resume.jpg'
import PrimaryButton from '../Components/PrimaryButton'
function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume image" />
            </div>
            <div className="right-content">
                <h4>I am <span>Sayantan Bose</span></h4>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Sayantan Bose</p>
                        <p>: 20</p>
                        <p>: Indian</p>
                        <p>: Bengali, English, Hindi</p>
                        <p>: West Bengal, India</p>
                        <p>: Web Developer</p>
                    </div>
                
                </div>
                <PrimaryButton title={'Download CV'}/>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    display: flex;
    margin-top: 5rem;
    .right-content {
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: 0.3rem 0;
                }
            }
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 90%;
            object-fit: cover;
        }
    }
`;

export default ImageSection
