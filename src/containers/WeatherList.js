import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from 'components/Chart';
import Map from 'components/Map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const city = cityData.city;
        const { lat, lon } = city.coord;
        const tempsData = [];
        const pressureData = [];
        const humidityData = [];
        
        cityData.list.forEach(weather => {
            const { temp, pressure, humidity } = weather.main;
            
            tempsData.push(temp - 273);
            pressureData.push(pressure);
            humidityData.push(humidity);
        });
        
        return (
            <tr key={city.name}>
                <td> <Map lat={lat} lng={lon} /> </td>
                <td> <Chart data={tempsData} color="orange" units="°С" /> </td>
                <td> <Chart data={pressureData} color="red" units="hPa" /> </td>
                <td> <Chart data={humidityData} color="blue" units="%" /> </td>
            </tr>
        );
    }
    
    render() {
        const { weather } = this.props;
        
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°С)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({ weather }) => {
    return { weather };
};

export default connect(mapStateToProps)(WeatherList);
