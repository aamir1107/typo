import React from 'react'
import classes from './../scss/headerNavbar.module.scss'
import AppLogo from '../images/AppLogo.svg'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

function HeaderNavbar() {

    const preventDefault = (event) => event.preventDefault();

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


        <div className={classes.navbarSection} >

            <div className={classes.navbarLeftSection}>

                <div className={classes.logo}>
                    <img src={AppLogo} alt="img" onClick={routeToHomePage}

                    />

                </div>

            </div>

            <div className={classes.navRightSection}>

                <Box className={classes.navBox}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        typography: 'body1',
                        '& > :not(style) + :not(style)': {
                            ml: 2,
                        },
                    }}
                    onClick={preventDefault}
                >
                    <Link className={classes.homeLink}
                        component="button"
                        variant="body"
                        onClick={routeToHomePage}
                        onMouseEnter={(e) => e.target.style.color = '#2F80ED'}
                        onMouseLeave={(e) => e.target.style.color = '#555555'}
                    >
                        Home
                    </Link>

                    <Link className={classes.testPageLink}
                        component="button"
                        variant="body2"
                        onClick={routeToTestPage}
                        onMouseEnter={(e) => e.target.style.color = '#2F80ED'}
                        onMouseLeave={(e) => e.target.style.color = '#555555'}
                    >
                        Test Page
                    </Link>

                    <Link className={classes.dashboard}
                        component="button"
                        variant="body2"
                        onClick={routeToDashboardPage}
                        onMouseEnter={(e) => e.target.style.color = '#2F80ED'}
                        onMouseLeave={(e) => e.target.style.color = '#555555'}
                    >
                        Dashboard
                    </Link>
                </Box>

            </div>

        </div>


    )
}

export default HeaderNavbar;
