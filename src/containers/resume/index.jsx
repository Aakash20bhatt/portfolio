import React from "react";
import { FaBlackTie, FaGraduationCap } from "react-icons/fa"
import { data } from './utils';
import PageHeaderContent from "../../components/pageHeaderContent"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import "./styles.scss"
import { MdWork } from "react-icons/md"

const Resume = ()=>{
    return(
        <section id="resune" className="resume">
            <PageHeaderContent
            headerText = "My Resume"
            icon={<FaBlackTie size={40}/>}/>

            <div className="timeline">
                <div className="timeline__experience">
                    <h3 className="timeline__experience__header-text">Experience</h3>
                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor="var(--blue-theme-main-color)"
                    >
                        {
                            data.experience.map((item,index)=>{
                                return <VerticalTimelineElement key={index}
                                    contentStyle={{
                                        background:"none",
                                        color:"var(--blue-theme-sub-text-color)",
                                        border:"1.5px solid var(--blue-theme-main-color) "
                                    }}
                                    className="timeline__experience__vertical-timeline-element"
                                    date={item.date}
                                    icon={<MdWork/>}
                                    iconStyle={{
                                        background:"#181818",
                                        color:"var(--blue-theme-main-color)",
                                        border:"1.5px solid var(--blue-theme-main-color) "
                                    }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>
                                            {item.title}
                                        </h3>
                                        <h4> 
                                            {item.subTitle}
                                        </h4>
                                    </div>
                                    <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                                </VerticalTimelineElement>
                            })
                        }
                        
                    </VerticalTimeline>
                </div>
                <div className="timeline__education">
                    <h3 className="timeline__experience__header-text">Education</h3>
                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor="var(--blue-theme-main-color)"
                    >
                        {
                            data.education.map((item,index)=>{
                                return <VerticalTimelineElement key={index}
                                contentStyle={{
                                        background:"none",
                                        color:"var(--blue-theme-sub-text-color)",
                                        border:"1.5px solid var(--blue-theme-main-color) "
                                    }}
                                    className="timeline__education__vertical-timeline-element"
                                    date={item.date}
                                    icon={<FaGraduationCap/>}
                                    iconStyle={{
                                        background:"#181818",
                                        color:"var(--blue-theme-main-color)",
                                        border:"1.5px solid var(--blue-theme-main-color) "
                                    }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>
                                            {item.title}
                                        </h3>
                                        <h4> 
                                            {item.subTitle}
                                        </h4>
                                    </div>
                                    <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                                </VerticalTimelineElement>
                            })
                        }
                        
                    </VerticalTimeline>
                </div>
            </div>
            
        </section>
    )
}

export default Resume;