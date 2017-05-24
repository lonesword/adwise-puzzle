import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Moves extends Component {
	constructor(props){
		super(props);
	}

	formatMove(move){
		return "(" + move[0] + "," + move[1] + ")";
	}

	render() {
		var self = this;
		return (
			<div>
				{this.props.moves.map(function(move){
					return <div>from {self.formatMove(move.from)} to {self.formatMove(move.to)}</div>
				})}
			</div>
		
		)
	}
}

function mapStateToProps(state){
	return {
		moves: state.moves
	};
}

const MovesContainer = connect(mapStateToProps)(Moves);
export default MovesContainer;
