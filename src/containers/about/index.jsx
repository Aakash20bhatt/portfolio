import React from "react";
import { BsInfoCircleFill } from "react-icons/bs"
import PageHeaderContent from "../../components/pageHeaderContent"
import { Animate } from "react-simple-animate";
import { DiReact, DiAngularSimple, DiJavascript, DiJava } from 'react-icons/di'
import './styles.scss'

const personalDetails = [
    {
        label: "Name",
        value: "Aakash Bhatt"
    },
    {
        label: "Age",
        value: "24"
    },
    {
        label: "Address",
        value: "Delhi,India"
    },
    {
        label: "Email",
        value: "aakashbhatt.19@gmail.com"
    },
    {
        label: "Contact",
        value: "9873742997"
    }
]

const jobsummary = 'When asked about my modus operandi in life, I say, I look for challenges that bring out the best in me. Experienced Front-end Developer with a demonstrated history of working in the fine art industry. I look for opportunities that teach me to lead from the front while micro-managing on all accounts, and constantly on the hunt for opportunities that expand my skill sets.'

const About = ()=>{
    return(
        <section id="about" className="about">
            <PageHeaderContent
            headerText = "About Me"
            icon={<BsInfoCircleFill size={40}/>}/>

            <div className="about__content">

                <div className="about__content__personalWrapper">
                    <Animate 
                        play
                        duration={1.5}
                        delay={0.1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}
                        >
                            <h3>Front End Developer</h3>
                            <p>{jobsummary}</p>
                    </Animate>

                    <Animate 
                        play
                        duration={1.5}
                        delay={0.1}
                        start={{
                            transform: 'translateX(500px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}
                        >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item,index)=>{
                                    return <li key={index}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </Animate>
                </div>

                <div className="about__content__servicesWrapper">
                    <Animate 
                        play
                        duration={1.5}
                        delay={0.1}
                        start={{
                            transform: 'translateX(600px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}
                        >
                        <div className="about__content__servicesWrapper__innerContent">

                            <div>
                                <DiReact size={60} color="var(--blue-theme-main-color)"/>  
                            </div>
                            <div>
                                <DiAngularSimple size={60}  color="var(--blue-theme-main-color)"/>
                            </div>
                            <div>
                                <DiJava size={60}  color="var(--blue-theme-main-color)"/>
                            </div>
                            <div>
                                <DiJavascript size={60}  color="var(--blue-theme-main-color)"/>
                            </div>

                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    )
}

export default About;