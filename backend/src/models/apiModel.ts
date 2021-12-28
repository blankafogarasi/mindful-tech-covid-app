import axios from 'axios';
import {Stat} from '../types/stat';
import { statModel } from '../models/statModel';
import {StatResponse} from "../types/statResponse";

const covidStatUrl: string = 'https://api.apify.com/v2/datasets/Gm6qjTgGqxkEZTkuJ/items?format=json&cl';

export const saveCovidStats = async () => {
    let latestUpdateDate = await getLatestUpdateDate();
    console.log(latestUpdateDate);
    let covidStatData = await getData();

    if (latestUpdateDate) {
        covidStatData = covidStatData.filter((item) => {
            return new Date(item.lastUpdatedAtApify) > latestUpdateDate && !!item.infected
        });
    }

    const asd: Stat[] = covidStatData.map(a => {
        return {
            id: 0,
            infected: a.infected,
            deceased: a.deceased,
            recovered: a.recovered,
            quarantined: a.quarantined,
            tested: a.tested,
            last_updated: new Date(a.lastUpdatedAtApify)
        } as Stat
    })
    asd.forEach(a => {
        statModel.create(a, (err: Error, statId: number) => {
            if (err) {
                console.log('ajjajjj')
            }
            console.log(statId);
        });
    })
}

export const getData = () => {
    return axios.get<StatResponse[]>(covidStatUrl)
        .then(response => {
            // console.log(response.data);
            return response.data;
        });
}

const getLatestUpdateDate = async () => {
    let latestUpdateDate: Stat = await statModel.findMaxDate();
    console.log(latestUpdateDate);
    return latestUpdateDate[0].lastUpdated;
}