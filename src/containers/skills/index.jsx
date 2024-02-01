import React from "react";
import { GiSkills } from "react-icons/gi"
import PageHeaderContent from "../../components/pageHeaderContent"
import {skilldata} from'./utils';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from "rc-progress";
import './styles.scss';

const Skill = ()=>{
    return(
        <section id="skills" className="skills">
            <PageHeaderContent
            headerText = "My Skills"
            icon={<GiSkills size={40}/>}/>

            <div className="skills__contain-wrapper">
                {
                    skilldata.map((item,i)=>{
                        return <div key={i} className="skills__contain-wrapper__inner-content"> 
                            <Animate
                                play
                                duration={1}
                                delay={0.2}
                                start={{
                                    transform: 'translateX(-200px)'
                                }}
                                end={{
                                    transform:'translateX(0px)'
                                }}
                            >
                                <h3 className="skills__contain-wrapper__inner-content__category-text">{item.label}</h3>
                                <div className="skills__contain-wrapper__inner-content__progressbar-container">
                                    {
                                        item.data.map((data,j)=>{
                                            return<AnimateKeyframes
                                                play
                                                duration={1}
                                                keyframes={['opacity:1', 'opactity:0']}
                                                iterationCount="1"
                                            >
                                                <div className="progressbar-wrapper" key={j}>
                                                    <p>
                                                        {data.skillName}
                                                        <Line
                                                            percent={parseInt(data.percentage)}
                                                            strokeWidth={2}
                                                            strokeColor="var(--blue-theme-main-color)"
                                                            trailWidth={2}
                                                            trailColor="var(--blue-theme-sub-text-color)"
                                                            strokeLinecap = "square"
                                                        />
                                                    </p>
                                                </div>

                                            </AnimateKeyframes>
                                        })
                                    }
                                </div>
                            </Animate>

                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Skill;