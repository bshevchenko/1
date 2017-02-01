import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

import updateDepartment from './../../../../action/department/update';
import reviewDepartment from './../../../../action/department/review';
import departmentFormFieldChange from './../../../../action/department/form-field-change';

class DepartmentUpdate extends React.Component {

	render () {
		return (
			<form onSubmit={ this.props.update } >
				<div className={ classNames('form-group', { 'has-error': this.props.form.error }) }>
					<label className='control-label'>Name</label>
					<input 
						className='form-control' 
						value={ this.props.form ? this.props.form.name : '' }
						onChange={ this.props.onNameChange } />
					{ this.renderHelpBlock() }
				</div>
				<button className='btn btn-success'>Update</button>
			</form>
		);
	}

	renderHelpBlock () {
		return this.props.form.error
			? <div className='help-block'>Department with this name already exists</div>
			: '';
	}

	componentDidMount () {
		this.props.review(this.props.id);
	}

};

const mapStateToProps = (state, ownProps) => {
	return {
		id: ownProps.params.id,
		form: state.department.update
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onNameChange: (e) => {
			dispatch(departmentFormFieldChange('name', e.target.value));
		},
		update: (e) => {
			e.preventDefault();
			dispatch(updateDepartment());
		},
		review: (id) => {
			dispatch(reviewDepartment(id));
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DepartmentUpdate);