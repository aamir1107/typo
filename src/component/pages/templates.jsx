import React from 'react';
import classes from './../scss/template.module.scss'
import { useNavigate } from 'react-router-dom';
import { formatDuration } from '../../utils/timeUtil'


const MyComponent = ({ data }) => {
    const navigate = useNavigate();

    const routeToStartTest = () => {
        navigate('/test-page-start/' + data.id)
    }



    return (
        <div className={classes.templatesSection}>

            <div className={classes.template} onClick={routeToStartTest}>

                <div className={classes.tempbox} >

                    <div className={classes.timeDuration}  >
                        {formatDuration(data.timeDuration)}
                    </div>

                    <div className={classes.contentSection}>
                        {data.text}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyComponent;