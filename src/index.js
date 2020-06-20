import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: null,
			error: '',
			loading: true
		};
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude, loading: false }),
			(error) => this.setState({ error: error.message, loading: false })
		);
	}

	render() {
		const { lat, error, loading } = this.state;
		return (
			<div>
				{loading && <Spinner message="Please accept location request" />}
				{!loading && error && <h1>Error: {error}</h1>}
				{!loading && lat && <SeasonDisplay lat={lat} />}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
