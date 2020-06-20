import React from 'react';

import './SeasonDisplay.css';

const seasonConfig = {
	summer: { text: 'Let, hit it to the beach', iconName: 'sun' },
	winter: { text: "Bruh, it's chilly", iconName: 'snowflake' }
};

const seasonDetermine = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {
	const { lat } = props;

	const season = seasonDetermine(lat, new Date().getMonth());

	const { text, iconName } = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon--left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon--right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
