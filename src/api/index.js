import axios from 'axios';

// set api
const url  = 'https://covid19.mathdro.id/api';

// create fetchData functions
export const fetchData = async () =>{
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
        return {confirmed,recovered,deaths,lastUpdate};
       
    } catch(error){

    }
}

// create fetchdailyData functions
export const fetchDailyData =  async () => {
    try{
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;

    }catch(error){

    }
}
