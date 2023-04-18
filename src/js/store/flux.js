import rigoImage from "/workspaces/Jtorres-ContactList/src/img/rigo-baby.jpg"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{ contactName: "Juan", address: "colombia", email: "juanfeguto2@gmail.com", telephone: "+573013182183"  },
				{ contactName: "Mauro", address: "colombia", email: "juanfeguto2@gmail.com", telephone: "+573013182183" },
				{ contactName: "Alexis", address: "colombia", email: "juanfeguto2@gmail.com", telephone: "+573013182183"},
				{ contactName: "Daniel", address: "colombia", email: "juanfeguto2@gmail.com", telephone: "+573013182183"},
				{ contactName: "Arnaldo", address: "colombia", email: "juanfeguto2@gmail.com", telephone: "+573013182183"}
			],	},
		actions: {
			addContact:(contact)=>{
				// version actual de store
				let store = getStore()
				// contactos actuales + nuevo contacto
				let newContacts = [...store.contacts,contact]
				// actualizar el nuevo array
				setStore({contacts:newContacts})
				console.log(newContacts);
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
				let newContacts =[...store.contacts];
				newContacts [index] = obj;
				setStore({ ...store, contacts: newContacts });
			},
		}
	}
}

export default getState;