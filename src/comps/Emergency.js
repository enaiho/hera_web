
import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';




// import { io } from "socket.io-client";



function Emergency(props){


	const [isLoading,loadedData] = useState(true);
	const [instances, setInstances] = useState([]);
	const [info, setInfo] = useState({});
	const { triggerId } = useParams();


	useEffect( ()=> {


		const getEmergencyDetails = (...args) => {


			const [triggerId] = args;
			

			axios.get(`http://localhost:5000/emergency/${triggerId}`)
			.then(function (response) {

			    const { message,status,info } = response.data;
			    if( status !== "retrieved" ) console.log(message);


			    // console.log( message );
			    // console.log( status );

			    loadedData(false);
			    setInstances( message );
			    setInfo(info);
			})
			.catch(function (error) {

			    console.log(error.message);
			    console.log("error");
			  
			})

		
		}

		getEmergencyDetails(triggerId);

	},[]);



	if( isLoading ) return( <React.Fragment><div align="center"><p>Loading data</p></div></React.Fragment>);


	const { name,phone } = info;
	const listItem = instances.map((instance,index) => 


		<li key={index}>

			<b>Address Location: </b> { instance.location.address }<br />
			<b>State/Country: </b> { instance.location.stateCountry }<br />
			<b>Battery Level: </b> { instance.battery.batteryLevel }<br />
			<b>Battery State: </b> { instance.battery.batteryState }<br />

			<br />



		</li>


	);

	return(

		<React.Fragment>

			<div align="center">

				<h1>{ name }</h1>
				<a href='tel:{ phone }'> Call <b>({ phone })</b> </a>
				<br />
				<br />


				<ul>
				{listItem}
				</ul>

			</div>

		</React.Fragment>
	)

}

export default Emergency;