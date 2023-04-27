import React, { useState, useEffect, useContext  } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Modal } from "./Modal.js";
import {ContactCard} from "../component/ContactCard.jsx";




export const Navbar = props => {
	const {actions}=useContext(Context)
	
	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">4Geeks</span>
				</Link>
				<div className="ml-auto">
						<button className="btn btn-primary" onClick={()=> actions.setCurrentContact(-1)} data-bs-toggle="modal" data-bs-target={"#addContact--1"}>Add New Contact</button>
				</div>
			</nav>
			<Modal 
				index={(-1).toString()}
			/>
		</>
	);
};




export default Navbar;