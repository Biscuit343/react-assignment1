import React, { useState } from 'react';
import Table from './Table';
import Form from './Form';

function MyApp() {
    const [characters, setCharacters] = useState([]);

    function removeOneCharacter(index) {
        const updated = characters.filter((character, i) => {
            return i !== index
        });
        setCharacters(updated);
    }

    function updateList(person) {
       //makePostCall(person).then( result => {
       //if (result)
          setCharacters([...characters, person] );
       //});
    }

    /*async function fetchAll() {
        try {
            const response = await axios.get('http://localhost/users');
            return response.data.users_list;
        }
        catch (error) {
            // We're not handling errors. Just logging into the console
            console.log(error);
            return false;
        }
    }*/
    /*async function makePostCall(person){
       try {
          const response = await axios.post('http://localhost:5000/users', person);
          return response;
       }
       catch (error) {
          console.log(error);
          return false;
       }
    }*/

    /*useEffect(() => {
        fetchAll().then(result => {
            if (result)
                setCharacters(result);
        });
    }, []);*/

    return (
        <div className="container">
            <Table characterData={characters} removeCharacter={removeOneCharacter} />
            <Form handleSubmit={updateList} />
        </div>
    )
}

export default MyApp;