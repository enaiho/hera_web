
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

	return(

		<React.Fragment>

			<div align="center">

				<h1 className="display-1">Solace</h1>
		      	<p>Welcome to Solace. Solace is your personal community platform that ensures that you are kept safe at all times </p>
		      	<Link to="/emergency/test"><label>Get Started</label></Link>


			</div>
						
		</React.Fragment>

	)
}

export default Home;