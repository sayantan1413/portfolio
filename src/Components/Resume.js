import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2021 - Present'} 
                        title={'Open Source Developer'}
                        subTitle={'Layer5'}
                        text={'I contributed to Meshery frontend which involved Material UI and React JS. I also contributed to Meshery backend in Golang and then writing test in Golang. I wrote a restful API delete endpoint in Golang and then displaying a delete functionality in the frontend.'} 
                    />
                    <ResumeItem 
                        year={'2020 - 2020'} 
                        title={'Frontend Developer'}
                        subTitle={'Babel'}
                        text={' In my internship tenure I build a ecommerce website which include ReactJS with all the functionalities of an ecommerce website. I also built a campaign dashboard using HTML, CSS and JS according to a given design. I also coded a email validator in JS using regex'} 
                    />
                    {/*<ResumeItem 
                        year={'2020 - 2020'} 
                        title={'Frontend Developer'}
                        subTitle={'Quordnet Academy'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />*/}
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2019 - 2023'} 
                        title={'Bachelor Of Technology, CSE'}
                        subTitle={'Narula Institute Of Techology'}
                        text={'I am currently a pre final year student majoring in CSE. In my college I prepared all the core subjects of the CS like Data Structure, Algorithms, Database Management Systems, Operating System, Computer Architecture, Networking, Theory Of Automation '} 
                    />
                    <ResumeItem 
                        year={'2017 - 2019'} 
                        title={'Class 12'}
                        subTitle={'DPS Ruby Park'}
                        text={'I completed my Higher Secondary from CBSE board with an aggregation of 88%. My notable score was in Mathematics in which I got 93 out of 100. I took my fifth subject as Computer and scored well in my final exam.'} 
                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'Class 10'}
                        subTitle={'Future Campus School'}
                        text={'I completed my Class 10 th from CBSE board with an aggregate of 8.4 CGPA out of 10 CGPA. I always had an interest in Mathematics and Computer so I scored well in final exam but my marks went down due to others subjects. '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume