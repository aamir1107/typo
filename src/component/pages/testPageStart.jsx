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
    const [showTimer, setShowTimer] = useState(true);
    const [isTimerStarted, setIsTimerStarted] = useState(false);

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
        setIsTimerStarted(false)
        setShowTimer(false)
        setTimeout(() => {
            setShowTimer(true)
        }, 300)

    }


    const handleTextEnter = (e) => {
        setIsTimerStarted(true)
        setTypeText(e.target.value)
        if (typeText) {
            setMatchArray(typeText.split(" "))
        }

    }

    const similar = (a, b) => {

        setIsTimerStarted(false)
        let equivalency = 0;
        let minLength = (a.length > b.length) ? b.length : a.length;
        let maxLength = (a.length < b.length) ? b.length : a.length;
        for (let i = 0; i < minLength; i++) {
            if (a[i] == b[i]) {
                equivalency++;
            }
        }


        let weight = equivalency / maxLength;
        return alert(Math.floor(weight * 100) + "%");
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
                {showTimer ?
                    <div className={classes.graphSection}>
                        <CountdownCircleTimer className={classes.countDown}
                            isPlaying={isTimerStarted}
                            duration={selectedTemplate.timeDuration}
                            colors={["#004777", "#F7B801", "#A30000", "#A30000", "#DB7093", "#FFA07A", "#FF0000"]}
                            colorsTime={[500, 400, 300, 200, 100, 50, 10]}
                            onComplete={() => ({ shouldRepeat: false, delay: 1 })}
                        >
                            {(e) => renderTime(e, selectedTemplate.timeDuration)}
                        </CountdownCircleTimer>
                    </div> : null}

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
                        onClick={() => similar(selectedTemplate.text, typeText)}
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
