import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

import createDepartment from './../../../../action/department/create';
import departmentFormFieldChange from './../../../../action/department/form-field-change';

class DepartmentCreate extends React.Component {

	render () {
		return (
			<form onSubmit={ this.props.create } >
				<div className={ classNames('form-group', { 'has-error': this.props.form.error }) }>
					<label className='control-label'>Name</label>
					<input 
						className='form-control' 
						value={ this.props.form.name }
						onChange={ this.props.onNameChange } />
					{ this.renderHelpBlock() }
				</div>
				<button className='btn btn-success'>Create</button>
			</form>
		);
	}

	renderHelpBlock () {
		return this.props.form.error
			? <div className='help-block'>Department with this name already exists</div>
			: '';
	}
	
};

const mapStateToProps = (state) => {
	return {
		form: state.department.create
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onNameChange: (e) => {
			dispatch(departmentFormFieldChange('name', e.target.value));
		},
		create: (e) => {
			e.preventDefault();
			dispatch(createDepartment());
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DepartmentCreate);