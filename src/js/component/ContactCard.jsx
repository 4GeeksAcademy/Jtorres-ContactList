import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Modal } from "./Modal";
import { Context } from "../store/appContext.js";

export const ContactCard = props => {
	const [myIndex, setMyIndex] = useState(props.index);
	console.log(myIndex)



	const {store, actions} = useContext(Context)
	return (
        <div className="container">           
            <div className="card w-100 mb-3">
                <div className="card-body d-flex border border-primary">
                    <div>
                        <div className="container-fluid overflow-hidden float-start flex-shrink-0">
                        <img className="rounded-circle" src="https://fastly.picsum.photos/id/758/200/200.jpg?hmac=uNGrAzLKg8Jmc7G9XT1alpHw2bbW64ysv9Sh3PnjCPA"/>
                        </div>
                    </div>
                    <div className="card-body d-flex justify-content-between">
                        <div className="d-grid">
                            <h5 className="card-title">{props.full_name}</h5>
                            <i className="fa-solid fa-phone card-text text-secondary">{props.address}</i>
                            <i className="fa-solid fa-phone card-text text-secondary">{props.phone}</i>
                            <i className="fa-solid fa-phone card-text text-secondary">{props.email}</i>
                        </div>
						{/* Buttons */}
                        {/* Buttons */}
                        <div className="d-flex align-self-start float-end">
							<i className="f p-2 card-text text-secondary">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#deleteContact-"+props.index} > 
									Delete
                                </button>
                            </i>
							<i className="f p-2 card-text text-secondary">
                                <button type="button" className="btn btn-info" onClick={()=> actions.setCurrentContact(myIndex)} data-bs-toggle="modal" data-bs-target={"#editContact-"+props.index}> 
									Edit
                                </button>
                            </i>
						{/* Buttons */}
                    </div>
                </div>
            </div>
        	</div>
		</div>
        
        );
	}
/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	full_name: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	img: PropTypes.string,
	address: PropTypes.string,
	index: PropTypes.string,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
export default ContactCard;






	// return (
	// 	<li className="list-group-item">
	// 		<div className="row w-100">
	// 			<div className="col-12 col-sm-6 col-md-3 px-0">
	// 				<img src={props.img} alt={props.full_name} className="rounded-circle mx-auto d-block img-fluid" />
	// 			</div>
	// 			<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
	// 				<div className=" float-right">
	// 					<button className="btn">
	// 						<i className="fas fa-pencil-alt mr-3" />
	// 					</button>
	// 					<button className="btn" onClick={() => props.onDelete()}>
	// 						<i className="fas fa-trash-alt" />
	// 					</button>
	// 				</div>
	// 				<label className="full_name lead">{props.fullName}</label>
	// 				<br />
	// 				<i className="fas fa-map-marker-alt text-muted mr-3" />
	// 				<span className="text-muted">{props.address}</span>
	// 				<br />
	// 				<span
	// 					className="fa fa-phone fa-fw text-muted mr-3"
	// 					data-toggle="tooltip"
	// 					title=""
	// 					data-original-title="(870) 288-4149"
	// 				/&gt;
	// 				<span className="text-muted small">{props.phone}</span>
	// 				<br />
	// 				<span
	// 					className="fa fa-envelope fa-fw text-muted mr-3"
	// 					data-toggle="tooltip"
	// 					data-original-title=""
	// 					title=""
	// 				/&gt;
	// 				<span className="text-muted small text-truncate">{props.email}</span>
	// 			</div>
	// 		</div>
	// 	</li>
	// );