import React from 'react'
import classes from '../scss/homePage.module.scss'
import FotterSection from './fotterSection'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import auditImage from '../images/undraw_upgrade_-06-a0 1.svg'
import undraw_to_do_re_jaef from '../images/undraw_to_do_re_jaef (1) 1.svg'
import undraw_time_management from '../images/undraw_time_management_re_tk5w 1.svg'
import undraw_pie_chart from '../images/undraw_pie_chart_re_bgs8 1.svg'
import HeaderNavbar from './headerNavbar'
import { useNavigate } from 'react-router-dom';


function HomePage() {

    const navigate = useNavigate();


    const routeToGetStarted = () => {
        navigate('/test-Page')
    }


    const routeToGetResult = () => {
        navigate('/dashboard')
    }



    return (
        <div className={classes.homePage}>

            < HeaderNavbar />

            <div className={classes.auditSection}>

                <div className={classes.auditLeftSection}>

                    <div className={classes.auditHeading}>
                        Audit Your Typing  <br />
                        Speed With <span>“Typo”</span>
                    </div>

                    <div className={classes.getStartedButtonSection}>
                        <Button variant="contained" endIcon={<SendIcon />} className={classes.getStartedButton}
                            onClick={routeToGetStarted}
                        >
                            Get Started
                        </Button>
                    </div>

                    <div className={classes.auditPointList}>

                        <div className={classes.auditPointFirstSentance}>

                            <div className={classes.PointSection}>
                                <div className={classes.circle}>
                                </div>
                                <div className={classes.point}>
                                    Real time speed tracking
                                </div>
                            </div>

                            <div className={classes.PointSection}>
                                <div className={classes.circle}>
                                </div>
                                <div className={classes.point}>
                                    In-time error checking
                                </div>
                            </div>

                            <div className={classes.PointSection}>
                                <div className={classes.circle}>
                                </div>
                                <div className={classes.point}>
                                    Dashboard analytics
                                </div>
                            </div>
                        </div>

                        <div className={classes.auditPointSecondSentance}>
                            <div className={classes.PointSection}>
                                <div className={classes.circle}>
                                </div>
                                <div className={classes.point}>
                                    Dashboard analytics
                                </div>
                            </div>
                            <div className={classes.PointSection}>
                                <div className={classes.circle}>
                                </div>
                                <div className={classes.point}>
                                    Dashboard analytics
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={classes.auditRightSection}>
                    <img src={auditImage} alt="img" />
                </div>

            </div>

            <div className={classes.middleSection}>

                <div className={classes.templateSection}>

                    <div className={classes.templateLeftSection}>

                        <div className={classes.templateHeading}>
                            Choose between our long list of <br />
                            templates or paste your own
                        </div>

                        <div className={classes.templateParagraph}>
                            It is a long established fact that a reader will be distracted by <br />
                            the readable content of a page when looking at its layout. It is a <br />
                            long established fact
                        </div>

                        <div className={classes.templateStartedButtonSection}>
                            <Button variant="contained" endIcon={<SendIcon />} className={classes.templateStartedButton}
                                onClick={routeToGetStarted}
                            >
                                Get Started
                            </Button>
                        </div>

                    </div>

                    <div className={classes.templateRightSection}>

                        <div className={classes.templateImage}>
                            <img src={undraw_to_do_re_jaef} alt="img" />
                        </div>

                    </div>
                </div>

                <div className={classes.timerSection}>

                    <div className={classes.timerleftSection}>
                        <div className={classes.timerImageSection}>
                            <img src={undraw_time_management} alt="img" />
                        </div>
                    </div>

                    <div className={classes.timerRightSection}>

                        <div className={classes.timerHeadingSection}>
                            Set a timer and take the challenge
                        </div>

                        <div className={classes.timerParagraphSection}>
                            It is a long established fact that a reader will be distracted  <br />
                            by the readable content of a page when looking at its  <br />
                            layout.
                        </div>

                        <div className={classes.timmerButtonSection}>

                            <Button variant="contained" endIcon={<SendIcon />} className={classes.timerStartedButton}
                                onClick={() => {

                                }}
                            >
                                Get Started
                            </Button>
                        </div>

                    </div>
                </div>

                <div className={classes.resultSection}>

                    <div className={classes.resultLeftSection}>

                        <div className={classes.resultHeadingSection}>
                            Get results in real time
                        </div>

                        <div className={classes.resultParagraphSection}>
                            It is a long established fact that a reader will be distracted  <br />
                            by the readable content of a page when looking at its  <br />
                            layout.
                        </div>


                        <div className={classes.resultButtonSection}>

                            <Button variant="contained" endIcon={<SendIcon />} className={classes.resultStartedButton}
                                onClick={routeToGetResult}
                            >
                                Get Started
                            </Button>
                        </div>

                    </div>

                    <div className={classes.resultRightSection}>
                        <div className={classes.resultImageSection}>
                            <img src={undraw_pie_chart} alt="img" />
                        </div>
                    </div>


                </div>

            </div>

            <FotterSection />

        </div >
    )
}
export default HomePage;
