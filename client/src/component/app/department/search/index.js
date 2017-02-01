import './index.css'

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import searchDepartment from './../../../../action/department/search';

class DepartmentSearch extends React.Component {

	render () {
		return (
			<div className='department-search'>
				<Link className='btn btn-success' to='/department/create'>Create</Link>
				<hr />
				<div className='panel panel-default'>
					<table className='table'>
						<thead>
							<tr>
								<th>id</th>
								<th>Name</th>
								<th />
							</tr>
						</thead>
						<tbody>{ this.renderRows() }</tbody>
					</table>
				</div>
			</div>
		);
	}

	renderRows () {
		return this.props.data.map((department) => {
			return ( 
				<tr key={ department.id } >
					<td>{ department.id }</td>
					<td>{ department.name }</td>
					<td>
						<div className='btn-group'>
							<Link className='btn btn-default' to={ `/department/review/${ department.id }` } >
								<i className='glyphicon glyphicon-search' />
							</Link>
							<Link className='btn btn-default' to={ `/department/update/${ department.id }` } >
								<i className='glyphicon glyphicon-cog' />
							</Link>
						</div>
					</td>
				</tr>
			);
		});
	}

	componentDidMount() {
		this.props.search();
	}

};

const mapStateToProps = (state) => {
	return {
		data: state.department.search
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		search: () => {
			dispatch(searchDepartment());
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DepartmentSearch);