import React, { Component } from 'react'
import { Query } from 'react-apollo'

import CURRENT_USER from '../queries/current_user_query'

class Profile extends Component {
	render() {
		return (
			<Query query={CURRENT_USER}>
			{({ loading, error, data }) => {
				if (loading) return <p>Loading...</p>
				if (error) return <p>Something went wrong</p>

				return (
					<div>
						<p>Profile</p>
					</div>
				)
			}}
			</Query>
		)
	}
}


export default Profile