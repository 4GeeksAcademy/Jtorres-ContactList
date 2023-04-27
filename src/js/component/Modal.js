import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const Modal = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	const {store, actions} = useContext(Context)
	const[full_name, setFull_name] = useState(store.contacts[props.index]?.full_name||"")
	const[email, setEmail] = useState(store.contacts[props.index]?.email||"")
	const[phone, setPhone] = useState(store.contacts[props.index]?.phone||"")
	const[address, setAddress] = useState(store.contacts[props.index]?.address||"")
	const[agendaSlug, setAgenda] = useState(store.contacts[props.index?.agenda]||"")
	const[img, setImg] = useState(store.contacts[props.index]?.img||"")
	function guardar(){
		let newContact={
		full_name: full_name, 
		email: email,
		agenda_slug: process.env.AGENDA_SLUG, 
		address: address,
		phone: phone
		}
		if (store.currentContact == -1) {
		// Crear nuevo contacto
		actions.addContact(newContact, props.index)
		} 
		else if (store.currentContact >= 0) {
		// Editar contacto
		actions.editContact(newContact, store.currentContact)
		// setAddress(editContact.address)
		// setPhone(editContact.phone)
		// setEmail(editContact.email)
		// setFull_name(editContact.full_name)
		} 
		else {
		//Indice invalido
		
		}
		console.log(store.currentContact)
	}
	
	return (
		<>
			{/* Modal 1 Delete Contact*/}
			<div className="modal fade" id={"deleteContact-"+props.index} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="deleteContactLabel">
							Hmm... not too fast!
						</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        If you delete this... shi's gonna go down m8
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Nah, dont wanna redo</button>
                        <button type="button" onClick={() => actions.delContact(props.index)} data-bs-dismiss="modal" className="btn btn-primary">Yus, i'm fine</button>
                    </div>
                </div>
            </div>
        </div>
		{/* Modal 2 edit Contact*/}
		<div className="modal fade" id={"editContact-"+props.index} tabIndex="-1">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="addContactLabel">Time to Configure this bad boy</h1>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
					{/* body */}
						<div className="container-fluid">
							<h1 className="fs-1 text-center py-4">Edit Contact</h1>
							<div className="mb-3">
								<div className="mb-3 row">
									<label htmlFor="inputName" className="form-label" >Elmo wants to address you by your name</label>
								<div className="col-sm-10">
									<input type="name" className="form-control" id="{props.full_name}" value={full_name} onChange={(e)=>setFull_name(e.target.value)} placeholder={props.full_name}/>
								</div>
								</div>
							</div>
							<div className="mb-3">
								<div className="mb-3 row">
									<label htmlFor="inputEmail" className="form-label">Elmo wants to send you marketing emails</label>
								<div className="col-sm-10">
									<input type="email" className="form-control" id="{props.email}" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={props.email}/>
								</div>
							</div>
							</div>
							<div className="mb-3">
								<div className="mb-3 row">
									<label htmlFor="inputPhone" className="form-label">Elmo wants to call you</label>
								<div className="col-sm-10">
									<input type="phone" className="form-control" id="{props.phone}" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder={props.phone}/>
								</div>
								</div>
							</div>
							<div className="mb-3">
								<div className="mb-3 row">
									<label htmlFor="inputAddress" className="form-label">Elmo wants to know where you live</label>
								<div className="col-sm-10">
									<input type="address" className="form-control" id="{props.address}" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder={props.address}/>
								</div>
								</div>
							</div>
							<div className="d-grid gap-3 py-4">
								<button className="btn btn-primary" type="button" onClick={guardar} data-bs-dismiss="modal">Done M8</button>
								<a href="#" className="btn btn-link text-start w-25 m-0 p-0" tabIndex="-1" role="button" data-bs-dismiss="modal">Back to Contacts</a>
							</div>
						</div>
				</div>
				</div>
			</div>
		</div>
		{/* Modal 2 edit Contact*/}
		{/* Modal 3 add Contact*/}
		<div className="modal fade" id={"addContact-"+props.index} tabIndex="-1">
			{/* <Modal index={(-1).toString()}/> */}
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="addContactLabel">Time to Configure this bad boy</h1>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
					{/* body */}
						<div className="container-fluid">
							<h1 className="fs-1 text-center py-4">Add Contact</h1>
							<div className="mb-3">
								<div className="mb-3 row">
									<label htmlFor="inputName" className="form-label">Full Name</label>	
								<div className="col-sm-10">
									<input className="form-control" id="{props.full_name}" placeholder="Juanito" value={full_name} onChange={(e)=>setFull_name(e.target.value)}/>
								</div>
								</div>
							</div>
							<div className="mb-3">
								<div className="mb-3 row">
									<label htmlFor="inputEmail" className="form-label">Email</label>
								<div className="col-sm-10">
									<input type="email" className="form-control" id="{props.email}" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="yolo@nobodyisme.com"/>
								</div>
							</div>
							</div>
							<div className="mb-3">
								<div className="mb-3 row">
									<label htmlFor="inputPhone" className="form-label">Phone</label>
								<div className="col-sm-10">
									<input type="phone" className="form-control" id="{props.phone}" value={phone} placeholder="+00 000-000-0000" onChange={(e)=>setPhone(e.target.value)}/>
								</div>
								</div>
							</div>
							<div className="mb-3">
								<div className="mb-3 row">
									<label htmlFor="inputAddress" className="form-label">Address</label>
								<div className="col-sm-10">
									<input type="address" className="form-control" id="{props.address}" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Night City"/>
								</div>
								</div>
							</div>
							<div className="d-grid gap-3 py-4">
								<button className="btn btn-primary" type="button" onClick ={guardar} data-bs-dismiss="modal">Done M8</button>
								<a href="#" className="btn btn-link text-start w-25 m-0 p-0" tabIndex="-1" role="button" data-bs-dismiss="modal">Back to Contacts</a>
							</div>
						</div>
				</div>
				</div>
			</div>
		</div>
		{/* Modal 3 add Contact*/}

		</>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	key: PropTypes.func,
	onDelete: PropTypes.func
};


/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
