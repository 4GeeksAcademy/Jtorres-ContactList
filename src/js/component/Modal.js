import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const Modal = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const [myIndex, setMyIndex] = useState(props.index);

	const {store, actions} = useContext(Context)
	const[contactName, setName] = useState(store.contacts[props.index]?.contactName||"")
	const[email, setEmail] = useState(store.contacts[props.index]?.email||"")
	const[telephone, setTelephone] = useState(store.contacts[props.index]?.telephone||"")
	const[address, setAddress] = useState(store.contacts[props.index]?.address||"")
	const[img, setIMG] = useState(store.contacts[props.index]?.img||"")
	function guardar(){
		let newContact={
		contactName: contactName, 
		email: email, 
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
		console.log(props.index)
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
                        <button type="button" onClick={() => actions.delContact(props.index)} className="btn btn-primary">Yus, i'm fine</button>
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
									<label htmlFor="inputName" className="form-label" >{props.contactName}</label>
								<div className="col-sm-10">
									<input type="name" className="form-control" id="{props.contactName}" value={contactName} onChange={(e)=>setName(e.target.value)} placeholder="Juanito"/>
								</div>
								</div>
							</div>
							<div className="mb-3">
								<div className="mb-3 row">
									<label htmlFor="inputEmail" className="form-label">{props.email}</label>
								<div className="col-sm-10">
									<input type="email" className="form-control" id="{props.email}" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="yolo@nobodyisme.com"/>
								</div>
							</div>
							</div>
							<div className="mb-3">
								<div className="mb-3 row">
									<label htmlFor="inputPhone" className="form-label">{props.telephone}</label>
								<div className="col-sm-10">
									<input type="phone" className="form-control" id="{props.telephone}" value={telephone} onChange={(e)=>setTelephone(e.target.value)} placeholder="+00 000-000-0000"/>
								</div>
								</div>
							</div>
							<div className="mb-3">
								<div className="mb-3 row">
									<label htmlFor="inputAddress" className="form-label">{props.address}</label>
								<div className="col-sm-10">
									<input type="address" className="form-control" id="{props.address}" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Night City"/>
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
									<input className="form-control" id="{props.contactName}" placeholder="Juanito" value={contactName} onChange={(e)=>setName(e.target.value)}/>
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
									<input type="phone" className="form-control" id="{props.telephone}" value={telephone} placeholder="+00 000-000-0000" onChange={(e)=>setTelephone(e.target.value)}/>
								</div>
								</div>
							</div>
							<div className="mb-3">
								<div className="mb-3 row">
									<label htmlFor="inputAddress" className="form-label" value={address} onChange={(e)=>setAddress(e.target.value)}>Address</label>
								<div className="col-sm-10">
									<input type="address" className="form-control" id="{props.address}" placeholder="Night City"/>
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
