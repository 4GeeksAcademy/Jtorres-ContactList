const apiUrl=process.env.API_URL
const agendaSlug=process.env.AGENDA_SLUG

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			contacts: [
				//  {
				//  	"id": "3877",
				//  	"agenda_slug": "LaReContraGenda",
				//  	"full_name": "NarutoKun",
				//  	"email": "yametekudasai@wii.com",
				//  	"phone": "666666666",
				//  	"address": "avenda csm carrera de carros 120938",
				//  	"created_at": "2023-04-18 00:02:50"
				//  },
				//  {
				//  	"id": "3878",
				//  	"agenda_slug": "LaReContraGenda",
				//  	"full_name": "Chainsaw Man",
				//  	"email": "aaa@ya.com",
				//  	"phone": "9898989898",
				//  	"address": "Somewhere in japan",
				//  	"created_at": "2023-04-18 00:13:55"
				//  }
		],
		},
		actions: {
			addContact:async (contact)=>{
				let response = await fetch(apiUrl+agendaSlug,{
					body:JSON.stringify(contact),
					method:"POST",
					headers:{
						"Content-Type":"application/json"
					}
				})
				if (!response.ok){
					console.log(response.status + ": "+response.statusText)
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
				console.log(newContacts)
            },
			editContact: (obj, index) => {
				console.log(index) 
				console.log (obj) 
				let store = getStore() 
				let newContacts =[...store.contacts];
				newContacts [index] = obj;
				setStore({ ...store, contacts: newContacts });
				console.log(newContacts)
			},
			getAgenda: () => {
				fetch (apiUrl + "/agenda/" + agendaSlug)
				.then(response =>{
					console.log(response.ok)
					if(response.ok){
						return response.json()
					}else{
						console.log(response.status+":"+response.statusText)
					}
				})
				.then(data=>{
					console.log(data)
					setStore({contacts:data})
				})
				.catch(error=>{
					console.error(error)
				})
				console.log("Iniciada la peticion")
			}
			
		},
		
	}
}


export default getState;