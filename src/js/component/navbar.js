import React, { useContext, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";


export const Navbar = () => {
	const [state, setState] = useState({
		//initialize state here
	});
	const {store, actions} = useContext(Context)
	const[contactName, setName] = useState(store.contacts[props.index]?.contactName||"")
	const[email, setEmail] = useState(store.contacts[props.index]?.email||"")
	const[telephone, setTelephone] = useState(store.contacts[props.index]?.telephone||"")
	const[address, setAddress] = useState(store.contacts[props.index]?.address||"")
	const[img, setIMG] = useState(store.contacts[props.index]?.img||"")

	function guardar(){
		let newContact={
		contactName: contactName, 
		email:email, 
		telephone: telephone, 
		address: address
		}
		if (props.index == -1) {
		// Crear nuevo contacto
		actions.addContact (newContact)
		} else if (props.index >= 0) {
		// Editar contacto
		actions .editContact (newContact, props. index)
		} else {
		// Indice invalido
		}
	}

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
					<button onClick={guardar} className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#addContact-"+props.index}>Add New Contact</button>
			</div>
		</nav>
	);
};