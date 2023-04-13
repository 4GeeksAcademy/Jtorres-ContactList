import React, { useContext } from "react";
import "../../styles/home.css";
import {ContactCard} from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";
import rigoImage from "/workspace/Contactlist-webapp/src/img/rigo-baby.jpg"

export const Home = () => {
	const {store, actions} = useContext(Context)
	const {contacts} = store

	return(
		<div className="d-flex flex-column justify-center mt-5">
			<div className="list-group contact-list">
      {contacts.map((contacts, index) => (
        <ContactCard
          name={contacts.name}
          address={contacts.address}
          email={contacts.email}
          telephone={contacts.telephone}
          img={rigoImage}
          key={index}
        />
      ))}
    </div>
		</div>
		)};
