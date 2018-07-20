import React, {PureComponent} from 'react'
import { TextField, Button } from '@material-ui/core';

export default class SignupForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
					<div>

					<TextField
						type="firstName" 
						name="firstName" 
						className="signupInfo"
						placeholder="First name" 
						id="firstName" 
						value={this.state.firstName || ''} 
						onChange={ this.handleChange } />
					</div>

					<div>
					<TextField
						type="lastName" 
						name="lastName" 
						className="signupInfo"
						placeholder="Last name" 
						id="lastName" 
						value={this.state.lastName || ''} 
						onChange={ this.handleChange } />
					</div>

					<div>
					<TextField
						type="email" 
						name="email" 
						className="signupInfo"
						placeholder="E-mail" 
						id="email" 
						value={this.state.email || ''} 
						onChange={ this.handleChange } />
					</div>

					<div>
					<TextField
						type="password" 
						name="password" 
						className="signupInfo"
						placeholder="Password" 
						id="password" 
						value={this.state.password || ''} 
						onChange={ this.handleChange } />
					</div>

					<div>
					<TextField
						type="password" 
						name="confirmPassword" 
						className="signupInfo"
						placeholder="Confirm password" 
						id="confirmPassword" 
						value={this.state.confirmPassword || ''} 
						onChange={ this.handleChange } />
					</div>

					{
						this.state.password &&
						this.state.confirmPassword &&
						this.state.password !== this.state.confirmPassword &&
						<p style={{color:'red'}}>The passwords do not match!</p>
					}

					<Button 
						type="submit"
						variant="contained" 
						color="secondary"
						style={{margin: '1.5rem'}}>
						Login
					</Button>
			</form>
		)
	}
}