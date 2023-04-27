const apiUrl=process.env.API_URL
const agenda_slug=process.env.AGENDA_SLUG

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			contacts: [
		],
		// Definimos una variable global, donde guardaremos las ID de cada contacto
		currentContact: -1,
		},
		actions: {
			addContact:async (contact)=>{
				console.log(JSON.stringify({...contact, agenda_slug: agenda_slug}))
				// contact = {...contact, agenda_slug: agenda_slug}
				console.log(contact);
				let response = await fetch(apiUrl,{
					body:JSON.stringify(contact),
					method:"POST",
					headers:{
						"Content-Type":"application/json"
					}
				})
				// console.log(JSON.stringify({...contact}))
				if (!response.ok){
					console.log(response.status + ": "+response.statusText)
					return 
				}
				// actions.getAgenda()
				let data=await response.json()
				// // version actual de store
				let store = getStore()
				// // contactos actuales + nuevo contacto
				let newContacts = [...store.contacts,{...contact, id:data.id}]
				// // actualizar el nuevo array
				setStore({contacts:newContacts})
				console.log(newContacts);
			},
			delContact:async (index) => {
				let actions = getActions()
				console.log(index);
				//solucion teorica
				// console.log(JSON.stringify({...contact, agenda_slug: agenda_slug}))
				let response = await fetch(apiUrl+"/"+index,{
					method:"DELETE",
					headers:{
						"Content-Type":"application/json"
					}
				})
				if (!response.ok){
					console.log(response.status + ": "+response.statusText)
					return 
				}
				actions.getAgenda()
                // let store = getStore()
                // let newContacts = store.contacts
                // newContacts.splice(index, 1)
                // setStore({
                //     contacts: newContacts
                // })
				// console.log(newContacts)
            },
			editContact:async (contact, index) => {
				let actions = getActions()
				console.log(index) 
				console.log (contact) 
				let response = await fetch(apiUrl+"/"+index,{
					body:JSON.stringify(contact),
					method:"PUT",
					headers:{
						"Content-Type":"application/json"
					}
				})
				if (!response.ok){
					console.log(response.status + ": "+response.statusText)
					return 
				}
				actions.getAgenda()

				// Este código no es necesario ya que cargamos nuevamente la lista dos líneas más arriba
				// let store = getStore() 
				// let newContacts =[...store.contacts];
				// newContacts [index] = contact;
				// setStore({ ...store, contacts: newContacts });
				// console.log(newContacts)
			},
			getAgenda: () => {
				fetch (apiUrl + "/agenda/" + agenda_slug)
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
			},
			// Definimos un método para setear el ID del contacto actual dentro de nuestra variable global.
			setCurrentContact: (index) => {
				setStore({currentContact:index})
			}
			
		},
		
	}
}


export default getState;