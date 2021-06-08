import React from 'react';
import {Cards, Chart,CountryPicker} from './components';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './App.module.css';
import {fetchData} from './api/index';


class App extends React.Component{

    state = {
        data:{},
        country:'',

    }
    async componentDidMount(){
        const data  = await fetchData();
        this.setState({ data });
    }


    handleCountryChange = async (country) => {
        const data  = await fetchData(country);
         this.setState({ data, country: country });
    }



    render(){
        const {data,country} = this.state;
        return(
            <div className={styles.container}>
            <img className={styles.image} src={process.env.PUBLIC_URL + '/image/covid19.png'} alt="COVID-19" />
            <Typography variant="h5" color="textSecondary">COVID-19: ලෝකයේ සජීවී තත්ව විශ්ලේෂණ උපකරණ පුවරුව</Typography>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country}/>
            <Typography variant="body2" color="textSecondary">Lahiru prabodha Copyright 2021 © All rights reserved.</Typography>
              
            </div>
        )
    }
}


export default App;