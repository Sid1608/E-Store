import React from 'react'
import { useState } from 'react';
import {login} from "../../redux/apiCalls";
import {useDispatch} from "react-redux";
import styles from "./styles.module.css";

const Login = () => {
	const [username, setUsername]=useState("");
    const[password,setPassword]=useState("");
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
       console.log(username)
        e.preventDefault()
        login(dispatch,{username,password});
    }

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Welcome</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={(e)=>setUsername(e.target.value)}
							value={username}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={(e)=>setPassword(e.target.value)}
							value={password}
							required
							className={styles.input}
						/>
						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				
			</div>
		</div>
	);
};

export default Login;
