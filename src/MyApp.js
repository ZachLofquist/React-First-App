import React, {useState} from 'react'
import Table from './Table'
import Form from './Form'

function MyApp() { 
    
    const [characters, set_characters] = useState([]);

    
    return (
        <div className="container">
            <Table character_data = {characters} removeCaharaceter = {removeOneCharacter} />
        </div>
    )


    function removeOneCharacter(index) {
        const updated = characters.filter((character, i) => {
            return i !== index
        });
        set_characters(updated)
    }

}   


export default MyApp;