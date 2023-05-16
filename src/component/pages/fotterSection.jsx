import React from 'react'
import AppLogo2 from '../images/AppLogo2.svg'
import Link from '@mui/material/Link';
import classes from './../scss/footerNavbar.module.scss'
import { useNavigate } from 'react-router-dom';

function FotterSection() {



    const navigate = useNavigate();

    const routeToHomePage = () => {
        navigate('/');
    }

    const routeToTestPage = () => {
        navigate('/test-page');
    }

    const routeToDashboardPage = () => {
        navigate('/dashboard');
    }


    return (
        <div className={classes.footerSection}>

            <div className={classes.footerNavbar}>
                <div className={classes.footerHomeNav}>
                    <Link className={classes.footerHomeLink}
                        component="button"
                        variant="body"
                        underline='none'
                        onClick={routeToHomePage}
                    >
                        Home
                    </Link>
                </div>

                <div className={classes.footerDashboardNav}>
                    <Link className={classes.footerDashboardLink}
                        component="button"
                        variant="body"
                        underline='none'
                        onClick={routeToDashboardPage}
                    >
                        Dashboard
                    </Link>
                </div>

                <div className={classes.footerTestPageNav}>
                    <Link className={classes.footerTestLink}
                        component="button"
                        variant="body"
                        underline='none'
                        onClick={routeToTestPage}
                    >
                        Test Page
                    </Link>
                </div>
            </div>

            <div className={classes.footerLogo}>
                <img src={AppLogo2} alt="img" onClick={routeToHomePage} />

            </div>

            <div className={classes.footerCopyrightSection}>
                Copyright “typo” 2021
            </div>


        </div>
    )
}

export default FotterSection
