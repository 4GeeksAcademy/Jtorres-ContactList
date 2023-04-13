import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const Modal = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	return (
		<>
			{/* Modal 1 Delete Contact*/}
			<div className="modal fade" id="deleteContact" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="deleteContactLabel">Hmm... not too fast!</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        If you delete this... shi's gonna go down m8
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Nah, dont wanna redo</button>
                        <button type="button" onClick={() => props.onDelete()} className="btn btn-primary">Yus, i'm fine</button>
                    </div>
                </div>
            </div>
        </div>
			{/* Modal 2 Edit Contact*/}
			<div className="modal fade" id="addContact" tabIndex="-1">
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
										<label htmlFor="inputName" className="form-label">Full Name</label>
									<div className="col-sm-10">
										<input className="form-control" id="inputName" placeholder="Juanito"/>
									</div>
									</div>
								</div>
								<div className="mb-3">
									<div className="mb-3 row">
										<label htmlFor="inputEmail" className="form-label">Email</label>
									<div className="col-sm-10">
										<input type="email" className="form-control" id="inputEmail" placeholder="yolo@nobodyisme.com"/>
									</div>
								</div>
								</div>
								<div className="mb-3">
									<div className="mb-3 row">
										<label htmlFor="inputPhone" className="form-label">Phone</label>
									<div className="col-sm-10">
										<input type="phone" className="form-control" id="inputPhone" placeholder="+00 000-000-0000"/>
									</div>
									</div>
								</div>
								<div className="mb-3">
									<div className="mb-3 row">
										<label htmlFor="inputAddress" className="form-label">Address</label>
									<div className="col-sm-10">
										<input type="address" className="form-control" id="inputAddress" placeholder="Night City"/>
									</div>
									</div>
								</div>
								<div className="d-grid gap-3 py-4">
									<button className="btn btn-primary" type="button">Done M8</button>
									<a href="#" className="btn btn-link text-start w-25 m-0 p-0" tabIndex="-1" role="button">Back to Contacts</a>
								</div>
							</div>
					</div>
					</div>
				</div>
			</div>
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
