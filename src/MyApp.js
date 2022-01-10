import React from 'react'
import Table from './Table'

const characters = [
    {
        name: 'Charlie',
        job: 'Janitor',
    },
    {
        name: 'Mac',
        job: 'Bouncer',
    },
    {
        name: 'Dee',
        job: 'Aspiring actress',
    },
    {
        name: 'Dennis',
        job: 'Bartender',
    },
];

function MyApp() { 
    return ( 
      <div className="container">
          <Table character_data={characters} />
      </div>
    );  
}   

export default MyApp;