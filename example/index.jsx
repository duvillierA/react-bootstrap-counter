import React from 'react';
import ReacDOM from 'react-dom';
import CounterInput from './react-bootstrap-counter';

class App extends React.Component {
	render() {
		const increaseIcon = <i className="fa fa-plus"/>
		const decreaseIcon = <i className="fa fa-minus"/>
		return (
			<div className="jumbotron">
				<div className="col-lg-2">
					<CounterInput
						value={1}
						min={10}
						increaseIcon={increaseIcon}
						decreaseIcon={decreaseIcon}
						onChange={(value) => {console.log(value)}} />
				</div>
			</div>
		)
	}
}

ReacDOM.render(
	<App />,
	document.getElementById('app')
);
