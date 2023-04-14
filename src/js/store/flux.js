import rigoImage from "/workspaces/Jtorres-ContactList/src/img/rigo-baby.jpg"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{ name: "Juan", address: "colombia", email: "juanfeguto2@gmail.com", phone: "+573013182183", img: { rigoImage } },
				{ name: "Mauro", address: "colombia", email: "juanfeguto2@gmail.com", phone: "+573013182183", img: { rigoImage } },
				{ name: "Alexis", address: "colombia", email: "juanfeguto2@gmail.com", phone: "+573013182183", img: { rigoImage } },
				{ name: "Daniel", address: "colombia", email: "juanfeguto2@gmail.com", phone: "+573013182183", img: { rigoImage } },
				{ name: "Arnaldo", address: "colombia", email: "juanfeguto2@gmail.com", phone: "+573013182183", img: { rigoImage } }
			],
		},
		actions: {
			addContact:(contact)=>{
				// version actual de store
				let store = getStore()
				// contactos actuales + nuevo contacto
				let newContacts = [...store.contacts,contact]
				// actualizar el nuevo array
				setStore({contacts:newContacts})
			},
			delContact: (index) => {
                let store = getStore()
                let newContacts = store.contacts
                newContacts.splice(index, 1)
                setStore({
                    contacts: newContacts
                })
            },
			editContact: (index, obj) => {
				console.log(index) 
				console.log (obj) 
				let store = getStore() 
				let arrTemp =[...store.contacts];
				arrTemp [index] = obj;
				setStore({ ...store, contacts: arrTemp });
			},
		}
	}
}

export default getState;