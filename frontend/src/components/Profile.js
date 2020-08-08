import React from 'react';
import { Redirect } from "react-router-dom";
import Axios from 'axios';

import LoginContext from '../contexts/contexts'

const Profile = () => {
	const {loggedin,setloggedin} = React.useContext(LoginContext);

	const [loading,setloading] = React.useState(false);

	const [data,setdata] = React.useState({});

	let isCancelled = false;

	React.useEffect(() => {
		if(loggedin){
			Axios.post("http://localhost:8000/api/auth/profile/",{token:localStorage.getItem('token')})
			.then((response)=>{
				if(!isCancelled){
					setloading(response.data)
				}
			})
			.catch((err)=>{
			})
		}

    return () => {
      isCancelled = true;
    };

	},[]);

	if(!loggedin){
		return(<Redirect to="/login"/>)
	}

	const subscribe = (event)=>{

	}

	const cancel = (event)=>{
		Axios.post("http://localhost:8000/api/subscriptions/cancel/",{token:localStorage.getItem('token')})
		.then((response)=>{
			if(!isCancelled){
				setloading({...loading,is_cancel:true})
			}
		})
		.catch((err)=>{
		})
	}

	const resume = (event)=>{
		Axios.post("http://localhost:8000/api/subscriptions/resume/",{token:localStorage.getItem('token')})
		.then((response)=>{
			if(!isCancelled){
				setloading({...loading,is_cancel:false})
			}
		})
		.catch((err)=>{
		})
	}

	return(
		<div className="container text-center mt-5">
		{
			!loading 
			?
			<div className="spinner-border" role="status">
			  <span className="sr-only">Loading...</span>
			</div>
			:
			<>
			<h2>{loading.username}</h2>
			<h2>{loading.email}</h2>
			{
				loading.is_active
				?
					loading.is_cancel
					?
					<button type="button" onClick={resume} className="btn btn-primary">Resume</button>
					:
					<button type="button" onClick={cancel}  className="btn btn-danger">Cancel</button>
				:
				<button type="button" onClick={subscribe} className="btn btn-primary">Subscribe</button>
			}
			
			</>
		}
		</div>
	)
}

export default Profile;