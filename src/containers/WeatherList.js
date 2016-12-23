import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from 'components/Chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const tempsData = [];
        const pressureData = [];
        const humidityData = [];
        
        cityData.list.forEach(weather => {
            const { temp, pressure, humidity } = weather.main;
            
            tempsData.push(temp);
            pressureData.push(pressure);
            humidityData.push(humidity);
        });
        
        return (
            <tr key={name}>
                <td>{name}</td>
                <td> <Chart data={tempsData} color='orange' /> </td>
                <td> <Chart data={pressureData} color='red' /> </td>
                <td> <Chart data={humidityData} color='blue' /> </td>
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
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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
