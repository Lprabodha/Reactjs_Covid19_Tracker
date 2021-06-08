import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...';
    }
  
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom className={styles.text}>තහවුරු කළ රෝගීන්</Typography>
                        <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=","
                        />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="h6">මුළු තහවුරු කළ රෝගීන් සංඛ්‍යාව COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom className={styles.text}>සුවය ලැබුවන්</Typography>
                        <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=","
                        />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="h6">මුළු සුවය ලැබුවන් සංඛ්‍යාව COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom className={styles.text}>මරණ</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="h6">මුළු මරණ සංඛ්‍යාව COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>

    );
}

export default Cards;