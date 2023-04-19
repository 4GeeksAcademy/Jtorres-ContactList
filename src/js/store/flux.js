const apiUrl=process.env.API_URL
const agendaSlug=process.env.AGENDA_SLUG

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			contacts: [{
				"full_name": "Chainsaw Man",
				"email": "aaa@ya.com",
				"agenda_slug": "LaReContraGenda",
				"address":"Somewhere in japan",
				"phone":"9898989898"
			}],
		},
		actions: {
			addContact:async (contact)=>{
				let response = await fetch(apiUrl+"/",{
					body:JSON.stringify(contact),
					method:"POST",
					headers:{
						"Content-Type":"application/json"
					}
				})
				if (!response.ok){
					console.log(response.status + ": "+ response.statusText)
					return 
				}
				let data=await response.json()
				// version actual de store
				let store = getStore()
				// contactos actuales + nuevo contacto
				let newContacts = [...store.contacts,{...contact, id:data.id}]
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