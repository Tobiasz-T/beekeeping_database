import React, {useEffect, useState} from "react";
import axios from 'axios';
const Home = ()=>{

    const [bee, setBee] = useState([]);

    useEffect(() => {
        // Pobierz dane z backendu
        axios.get('http://localhost:5000/bee')
            .then((response) => {
                setBee(response.data);
            })
            .catch((error) => {
                console.error('Błąd podczas pobierania danych:', error);
            });
    }, []);

    return(
        <div className="db">
            <h1>BEE</h1>
            <ul>
                {bee.map((beekeeping) => (
                    <li key={beekeeping.id}>{'Ul '+beekeeping.id+'. '} {new Date(beekeeping.data).toISOString().split("T")[0]+' '} {beekeeping.korpusy+' '} {beekeeping.nadstawki+' '} {beekeeping.ramki}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;