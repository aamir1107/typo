import React from 'react'
import classes from './../scss/dashboard.module.scss'
import HeaderNavbar from './headerNavbar'
import FotterSection from './fotterSection'

function Dashboard() {



    return (
        <div className={classes.Dashboard}>

            < HeaderNavbar />

            <div className={classes.middleSection}>

            </div>

            <FotterSection />

        </div>
    )
}

export default Dashboard;