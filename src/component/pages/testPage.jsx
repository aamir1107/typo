import React from 'react'
import classes from './../scss/testPage.module.scss'
import HeaderNavbar from './headerNavbar'
import FotterSection from './fotterSection'
import Button from '@mui/material/Button';

import Template from './templates';
import datas from './../../data/ltemplateData.json';





function TestPage() {






    return (
        <div className={classes.testPage}>

            < HeaderNavbar />

            <div className={classes.middleSection}>

                <div className={classes.middleSectionHeading}>
                    Choose from our long list of template or <br />
                    C/P your own
                </div>

                <div className={classes.createNewButton}>
                    <Button variant="contained" className={classes.NewButton}

                    >
                        Create New
                    </Button>
                </div>


            </div>



            <div className={classes.dataSection}>

                {datas.map(data => <Template data={data} />)}
            </div>

            <FotterSection />

        </div>
    )
}

export default TestPage; 