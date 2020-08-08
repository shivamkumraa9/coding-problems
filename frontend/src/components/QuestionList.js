import React from 'react'
import Axios from 'axios';
import { Redirect } from "react-router-dom";
import {Link} from 'react-router-dom'
import LoginContext from '../contexts/contexts'


const QuestionList = () =>{
	const {loggedin,setloggedin} = React.useContext(LoginContext);
	const [loading,setloading] = React.useState({load:true,seemore:2,questions:[]});
	React.useEffect(() => {
		if(loggedin){
			Axios.post("http://localhost:8000/api/questions/questions/1",{token:localStorage.getItem('token')})
			.then((response)=>{
				if(!isCancelled){
					setloading({load:false,seemore:loading.seemore,questions:response.data.questions})
				}
			})
			.catch((err)=>{
			})
		}

    return () => {
      isCancelled = true;
    };

	},[]);

	const onClick = (event) =>{
		Axios.post(`http://localhost:8000/api/questions/questions/${loading.seemore}`,{token:localStorage.getItem('token')})
		.then((response)=>{
			if(!isCancelled){
				const ques = response.data.questions
				if(ques.length > 0){
					const prev = loading.questions.concat(ques)
					setloading({load:false,seemore:loading.seemore+1,questions:prev})
				}else{
					setloading({load:false,seemore:0,questions:loading.questions})
				}
				
			}
		})
		.catch((err)=>{
		})
			}

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
			 {loading.questions.map((element,index)=>{
			 	return <div key={index}><Link to={`/question/${element.id_}`}>{element.name}</Link><br/></div>
			 })}

			 {
			 	loading.seemore
			 	?
			 	<button type="button" className="btn btn-primary" onClick={onClick}>See More</button>
			 	:
			 	<p>No More Questions</p>
			 }
			</>
		}
		</div>
	)}

export default QuestionList;