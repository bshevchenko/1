import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import reviewDepartment from './../../../../action/department/review';

class DepartmentReview extends React.Component {

	render () {
		return (
			<dl className='dl-horizontal'>
				<dt>id</dt>
				<dd>{this.props.id}</dd>
				<dt>name</dt>
				<dd>{this.props.data.name}</dd>
			</dl>
		);
	}

	componentDidMount() {
		this.props.review(this.props.id);
	}

};

const mapStateToProps = (state, ownProps) => {
	return {
		id: ownProps.params.id,
		data: state.department.review
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		review: (id) => {
			dispatch(reviewDepartment(id));
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DepartmentReview);