import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "/workspaces/Jtorres-ContactList/src/img/rigo-baby.jpg"


export const Navbar = () => {
	const {actions}=useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">4Geeks</span>
			</Link>
			<div className="ml-auto">
					<button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#addContact-"+props.index}>Add New Contact</button>
			</div>
		</nav>
	);
};