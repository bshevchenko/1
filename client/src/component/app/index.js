import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {

	render () {
		return (
			<div>
				<nav className='navbar navbar-default'>
					<div className='container'>
						<div className='navbar-header'>
							<a className='navbar-brand' href='#'>Brand</a>
						</div>
					</div>
				</nav>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4'>
							<div className='panel panel-default'>
								<div className='panel-heading'>Stuff</div>
								<ul className="list-group">
									<li className="list-group-item">
										<Link to='/department/search'>Departments</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-md-8'>{ this.props.children }</div>
					</div>
				</div>
			</div>
		);
	}

};