import React, { useContext } from "react";
import "../../styles/home.css";
import {ContactCard} from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";
import rigoImage from "/workspaces/Jtorres-ContactList/src/img/rigo-baby.jpg"

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
          phone={contacts.phone}
          img={"https://fastly.picsum.photos/id/758/200/200.jpg?hmac=uNGrAzLKg8Jmc7G9XT1alpHw2bbW64ysv9Sh3PnjCPA"}
          key={index}
        />
      ))}
    </div>
		</div>
		)
};