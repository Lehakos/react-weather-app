import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from 'actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            term: ''
        };
        
        this._onInputChange = this._onInputChange.bind(this);
        this._onFormSubmit = this._onFormSubmit.bind(this);
    }
    
    render() {
        return (
            <form onSubmit={this._onFormSubmit} className="input-group search-bar">
                <input 
                    className="form-control"
                    type="search"
                    placeholder="Get a five-day forecast in your favorite cities"
                    value={this.state.term}
                    onChange={this._onInputChange}
                />
                <div className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </div>
            </form>
        );
    }
    
    _onFormSubmit(e) {
        const { fetchWeather } = this.props;
        
        e.preventDefault();
        
        fetchWeather(this.state.term);
        this.setState({ term: '' });
    }
    
    _onInputChange(e) {
        this.setState({ term: e.target.value });
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
