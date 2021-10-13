import React from 'react'
import styled from 'styled-components'
import resume from '../images/resume.jpg'
function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume image" />
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>Sayantan Bose</span></h4>
                </div>
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
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`

`;

export default ImageSection
