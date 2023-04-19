const apiUrl=process.env.API_URL
const agendaSlug=process.env.AGENDA_SLUG

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			contacts: [],
		},
		actions: {
			addContact:(contact)=>{
				let response = await response.json()
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
			getAgenda:()=>{
				fetch(apiUrl+"/agenda/"+agendaSlug)
				.then(response=>{
					if(response.ok){
						return response.json()
					}
					else{
						console.log(response.status+": "+response.statusText)
					}
				})
				.then(data=>{
					console.log(data)
					setStore({contacts:data})
				})
					
				.catch(error=>{
					console.error(error)
				})
				console.log("iniciada la peticion")
			}
		}
	}
}


export default getState;