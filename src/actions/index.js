import axios from 'axios';

const API_KEY  = 'd7a9da1f1e05919c0a80d7c26a6d0900';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ru`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
};
