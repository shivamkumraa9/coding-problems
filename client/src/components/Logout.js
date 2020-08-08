import React from 'react';

import LoginContext from '../contexts/contexts'


const Logout = () => {
	const {loggedin,setloggedin} = React.useContext(LoginContext);
	React.useEffect(()=>{
		setloggedin(false)
		localStorage.setItem('token','');
	},[])
	return (
		<>
			<h1>You Have Been Logged Out</h1>
		</>
	)
}

export default Logout;