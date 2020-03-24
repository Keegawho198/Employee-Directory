import React from 'react';
import TableHeader from './tableheader'
import data from "../../data.json"
import {EventContext,TableContext} from "./tableContext"

import './table.css'

export default function Table (){
    const [sortBy, setSortBy] = React.useState();

    


	
	const handleTableHeaderClick = (event) => {
		const target = event.currentTarget;
        const id = target.getAttribute('data-id');
        
        setSortBy(id);

	}

	const tableContext = {
		sortBy,

	}

	const eventContext = {
		onTableHeaderClick: handleTableHeaderClick
	};

let sortedData = data.results;




	// Sort
	
	switch (sortBy) {
		case "Name":
		
			break;
		case "Email":
		sortedData = data.results.sort((a, b) => a.email.localeCompare(b.email))
			break;
		case "Phone":
			sortedData = data.results.sort((a, b) => a.phone.localeCompare(b.phone))
			break;
		case "Nat":
			sortedData = data.results.sort((a, b) => a.nat.localeCompare(b.nat))
			break;
		default:
			break;
	}
    return(
        <EventContext.Provider value= {eventContext}>
     <TableContext.Provider value= {tableContext}>

<table border= "1">
    <thead>
    <tr>
   <TableHeader
   text= "Name"/>
    <TableHeader
   text= "Email"/>
    <TableHeader
   text= "Phone"/>
    <TableHeader
   text= "Nat"/>
    </tr>
    </thead>
    <tbody>
    {
                sortedData.map(({name,email,phone,nat})=>(
                    <tr key={phone}>
                        
                   <td>{`${name.first} ${name.last}`}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{nat}</td>
                    </tr>
                ))
            }
        
    </tbody>
</table>
</TableContext.Provider>
</EventContext.Provider>
    )}
