import rigoImage from "/workspaces/Jtorres-ContactList/src/img/rigo-baby.jpg"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{ name: "Juan", address: "colombia", email: "juanfeguto2@gmail.com", phone: "+573013182183", img: { rigoImage } },
				{ name: "Juan", address: "colombia", email: "juanfeguto2@gmail.com", phone: "+573013182183", img: { rigoImage } },
				{ name: "Juan", address: "colombia", email: "juanfeguto2@gmail.com", phone: "+573013182183", img: { rigoImage } },
				{ name: "Juan", address: "colombia", email: "juanfeguto2@gmail.com", phone: "+573013182183", img: { rigoImage } },
				{ name: "Juan", address: "colombia", email: "juanfeguto2@gmail.com", phone: "+573013182183", img: { rigoImage } }
			],
		},
		actions: {
			addContact:(contact)=>{
				// version actual de store
				let store = getStore()
				// contactos actuales + nuevo contacto
				let newContacts=[...store.contacts,contact]
				// actualizar el nuevo array
				setStore({contacts:newContacts})
			},
			delContact: (index) => {
                let store = getStore()
                //let newContacts = [...store.contacts, contact]
                let newContacts = store.contacts
                newContacts.splice(index, 1)
                setStore({
                    contacts: newContacts
                })
            }
			// changeColor: (index, color) => {

			// 	const store = getStore();

			// 	const demo = store.demo.map((elm, i) => {
			// 		if(i === index) elm.background = color;
			// 		return elm;
			// 	});
			// 	setStore({demo:demo})
			// }
		}
	}
}

export default getState;