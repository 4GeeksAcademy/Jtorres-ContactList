import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "/workspaces/Jtorres-ContactList/src/img/rigo-baby.jpg"


export const Navbar = () => {
	const {actions}=useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
					<button onClick={()=>actions.addContact({ name: "Juan", address: "colombia", email: "juanfeguto2@gmail.com", phone: "+573013182183", img: { rigoImage } }
					)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addContact">Add New Contact</button>
			</div>
		</nav>
	);
};