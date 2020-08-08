import React from 'react'
import Axios from 'axios';
import { Redirect } from "react-router-dom";
import {Link} from 'react-router-dom'
import LoginContext from '../contexts/contexts'


const Question = (props) =>{
	const {loggedin,setloggedin} = React.useContext(LoginContext);
	const [loading,setloading] = React.useState({load:true,question:false});
	React.useEffect(() => {
		if(loggedin){
			Axios.post(`http://localhost:8000/api/questions/question/${props.match.params.id}`,{token:localStorage.getItem('token')})
			.then((response)=>{
				if(!isCancelled){
					setloading({load:false,question:response.data})
				}
			})
			.catch((err)=>{
			})
		}

    return () => {
      isCancelled = true;
    };

	},[]);


	let isCancelled = false;
	if(!loggedin){
		return(<Redirect to="/login"/>)
	}

	return(
		<div className="container text-center mt-5">
		{
			loading.load
			?
			<div className="spinner-border" role="status">
			  <span className="sr-only">Loading...</span>
			</div>
			:
			<>
			<h1>{loading.question.name}</h1>
			<p>{loading.question.question}</p>
			{
				loading.question.answer
				?
				<p>{loading.question.answer}</p>
				:
				<p>Please Upgrade to see the answer</p>
			}
			</>
		}
		</div>
	)}

export default Question;