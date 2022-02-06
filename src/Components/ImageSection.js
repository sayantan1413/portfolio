import React from 'react'
import styled from 'styled-components'
import resume from '../images/resumeimage.jpeg'
import PrimaryButton from '../Components/PrimaryButton'
import { Link }  from 'react-router-dom'
import ResumePDF from '../files/sayantan_bose_resume.pdf'
function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume image" />
            </div>
            <div className="right-content">
                <h4>I am <span>Sayantan Bose</span></h4>
                <p className="paragraph">
                    A highly addictive technological enthusiast who is always open to learn any new skills and always eager to face new challenges.
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
                        <p>: English, Hindi</p>
                        <p>: India</p>
                        <p>: FrontEnd Developer</p>
                    </div>
                
                </div>
                <Link to={ResumePDF} target="_blank" download><PrimaryButton title={'Download CV'} /></Link>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
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
                    padding: .3rem 0;
                }
            }
        }
    }
`;

export default ImageSection
