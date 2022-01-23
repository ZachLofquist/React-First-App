import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Table from './Table';
import Form from './Form';

function MyApp() { 
    const [characters, set_characters] = useState([]);
    
    useEffect(() => {
        fetchAll().then(result => {
            if (result)
                set_characters(result);
        })
    }, []);

    return (
        <div className="container">
            <Table character_data = {characters} removeCharacter = {removeOneCharacter} />
            <Form handleSubmit={updateList} />
        </div>
    )


    function removeOneCharacter(index) {
        const updated = characters.filter((character, i) => {
            return i !== index
        });
        const removed = characters.filter((character, i) => {
            return i === index
        });
        makeDeleteCall(removed[0]).then(result => {
            if (result && result.status === 204) {
                set_characters(updated)
            }
        })
    }

    function updateList(person) {
        makePostCall(person).then(result => {
            if (result && result.status === 201) {
                person.id = result.data.id
                //console.log(result.data);
                set_characters([...characters, person]);
            }
        });
    }
    
    async function fetchAll() {
        try {
            const response = await axios.get('http://localhost:5000/users');
            return response.data.users_list;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    } 

    async function makePostCall(person){
        try {
            const response = await axios.post('http://localhost:5000/users/', person);
            return response;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    async function makeDeleteCall(person) {
        try {
            const response = await axios.delete(`http://localhost:5000/users/${person.id}`, person);
            return response
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

}   


export default MyApp;