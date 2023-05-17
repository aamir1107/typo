import React, { useEffect, useState } from 'react'
import classes from './../scss/textPageStart.module.scss'
import HeaderNavbar from './headerNavbar'
import { useParams, useNavigate } from 'react-router-dom';
import datas from '../../data/ltemplateData.json';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FotterSection from './fotterSection'
import { formatDuration } from '../../utils/timeUtil'
import { CountdownCircleTimer } from "react-countdown-circle-timer";



const renderTime = ({ remainingTime }, total) => {
    if (remainingTime === 0) {
        return <div className={classes.timer} style={{
            color: "red",
        }}>Too lale...</div>;
    }

    return (
        <div className={classes.timer}>

            <div className={classes.value}>{Math.floor((remainingTime / total) * 100)}%</div>

        </div>
    );
};



function TestPageStart() {

    const navigate = useNavigate()
    const { id } = useParams();
    const [selectedTemplate, setSelectedTemplate] = useState({});
    const [referencaArray, setReferencaArray] = useState([]);
    const [matchArray, setMatchArray] = useState([]);
    const [typeText, setTypeText] = useState("")


    useEffect(() => {

        if (id) {
            const myData = datas.find(data => data.id === parseInt(id))
            if (myData) {
                setSelectedTemplate(myData)
                setReferencaArray(myData.text.split(" "))
            } else {
                navigate('/test-page')
            }
        }
    }, [])



    const resetData = () => {
        setTypeText("")
        setMatchArray([])
    }


    const handleTextEnter = (e) => {
        setTypeText(e.target.value)
        if (typeText) {
            setMatchArray(typeText.split(" "))
        }

    }



    return (
        <div className={classes.testPageStart}>

            < HeaderNavbar />

            <div className={classes.templateSection}>


                <div className={classes.template}>

                    <div className={classes.templateTime}>
                        {formatDuration(selectedTemplate.timeDuration)}
                    </div>

                    <div className={classes.templateContent}>
                        {referencaArray.map((data, idx) => {
                            if (idx > matchArray.length - 1) {
                                return <span className={classes.templateText}> {data} </span>
                            } else if (matchArray[idx] == referencaArray[idx]) {
                                return <span className={classes.templateBlue}> {data} </span>
                            } else {
                                return <span className={classes.templateRed}> {data} </span>
                            }
                        })}
                    </div>

                </div>

                <div className={classes.graphSection}>
                    <CountdownCircleTimer className={classes.countDown}
                        isPlaying
                        duration={selectedTemplate.timeDuration}
                        colors={["#004777", "#F7B801", "#A30000", "#A30000", "#DB7093", "#FFA07A", "#FF0000"]}
                        colorsTime={[500, 400, 300, 200, 100, 50, 10]}
                        onComplete={() => ({ shouldRepeat: false, delay: 1 })}
                    >
                        {(e) => renderTime(e, selectedTemplate.timeDuration)}
                    </CountdownCircleTimer>
                </div>

            </div>



            <div className={classes.writtenSection}>
                <TextField className={classes.textWrittenSection}
                    multiline
                    rows={8}
                    value={typeText}
                    onChange={(e) => handleTextEnter(e)}


                />
            </div>

            <div className={classes.buttonsSection}>

                <div className={classes.resetAndCancleButton}>
                    <Button variant="contained" className={classes.resetButton}
                        onClick={resetData}
                    >
                        Reset/Cancle
                    </Button>
                </div>

                <div className={classes.submitButtonSection}>
                    <Button variant="contained" className={classes.submitButton}

                    >
                        Submit
                    </Button>
                </div>
            </div>

            <FotterSection />



        </div>
    )
}

export default TestPageStart;
