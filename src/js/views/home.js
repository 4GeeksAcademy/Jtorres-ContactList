import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import {ContactCard} from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";
import { Modal } from "../component/Modal";

export const Home = () => {
	const {store, actions} = useContext(Context)
	const {contacts} = store
  useEffect(()=>{
    actions.getAgenda
  },[])

	return(
		<div className="d-flex flex-column justify-center mt-5">
			<div className="list-group contact-list">
      <Modal 
          index={-1}
        />
      {contacts?.map((contacts, index) => (
        <div key={index}>
        <ContactCard
          full_name={contacts.full_name}
          address={contacts.address}
          email={contacts.email}
          phone={contacts.phone}
          img="https://fastly.picsum.photos/id/758/200/200.jpg?hmac=uNGrAzLKg8Jmc7G9XT1alpHw2bbW64ysv9Sh3PnjCPA"
          index={contacts.id}
        />
        <Modal 
          full_name={contacts.full_name}
          address={contacts.address}
          email={contacts.email}
          phone={contacts.phone}
          img="https://fastly.picsum.photos/id/758/200/200.jpg?hmac=uNGrAzLKg8Jmc7G9XT1alpHw2bbW64ysv9Sh3PnjCPA"
          index={contacts.id}
        />
        </div>
      ))||"Cargando contactos..."}
    </div>
		</div>
		)
};