import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import OutputDisplay from './components/OutputDisplay';
import { connect } from 'react-redux';
import {
	  enterNumber, setOperator, percentage, clear, equals, toggleNegative
} from './components/actions';
import { operators } from './components/constants';

export class App extends Component {
  render() {
    const {output, total, enterNumber, setOperator, percentage, clear, equals, toggleNegative
		} = this.props;

		const numberButtons789 = [ 7, 8, 9].map( ( number ) => (
			<Button
				callback={ () => enterNumber( number ) }
				key={ number }
				value={ number }
			/>
		) );

		const numberButtons456 = [ 4, 5, 6 ].map( ( number ) => (
			<Button
				callback={ () => enterNumber( number ) }
				key={ number }
				value={ number }
			/>
		) );

		const numberButtons123 = [ 1, 2, 3 ].map( ( number ) => (
			<Button
				callback={ () => enterNumber( number ) }
				key={ number }
				value={ number }
			/>
		) );

		const numberButtons0 = [0].map( ( number ) => (
			<Button
				callback={ () => enterNumber( number ) }
				key={ number }
				value={ number }
			/>
		) );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My React Redux Calculator App</h1>
        </header>
        <fieldset className="App-intro">
          <legend>'CLICKABLE' CALCULATOR</legend>
          <OutputDisplay
            output={ total? total: output }
          />
					<div className = "buttons" >
						<div className = "row" >
							<Button
								callback={ clear }
								value="A/C"
							/>
							<Button
								callback={ toggleNegative }
								value="+/-"
							/>
							<Button
								callback={ percentage }
								value="%"
							/>
							<Button
								callback={ () => setOperator( operators.DIVIDE ) }
								value="÷"
							/>
						</div>
						<div className = "row" >
							{ numberButtons789 }
							<Button
								callback={ () => setOperator( operators.MULTIPLY ) }
								value="×"
							/>
						</div>
						<div className = "row" >
							{ numberButtons456 }
							<Button
								callback={ () => setOperator( operators.SUBTRACT ) }
								value="-"
							/>
						</div>
						<div className = "row" >
							{ numberButtons123 }
							<Button
								callback={ () => setOperator( operators.ADD ) }
								value="+"
							/>
						</div>
						<div className = "row" >
							{ numberButtons0 }
							<Button
								callback={ () => enterNumber( output === "0"?"0.":"." ) }
								value="."
							/>
							<Button
								callback={ equals }
								value="="
							/>
							<Button
								callback={ () => enterNumber( total? total: '' ) }
								value="SAVE"
							/>
							</div>
					</div>
        </fieldset>
				<footer className="App-footer">
          <h1 className="App-code">
						<a target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/jffernan/my-react-redux-calculator">
	  					Visit GitHub To View My Code
						</a>
					</h1>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {
	enterNumber, setOperator, percentage, clear, equals, toggleNegative
})(App);
