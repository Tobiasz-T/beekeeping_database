import React, {useEffect, useState} from "react";
import axios from 'axios';
import { format, toZonedTime } from "date-fns-tz";
const Home = ()=>{

    const [bee, setBee] = useState([]);
    const formatDate = (dateString) => {
        const timeZone = "Europe/Warsaw"; // Ustaw właściwą strefę czasową
        const zonedDate = toZonedTime(dateString, timeZone);
        return format(zonedDate, "yyyy-MM-dd"); // Konwersja do formatu YYYY-MM-DD
    };
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
                    <li key={beekeeping.id}>{'Ul '+beekeeping.id+'. '} {formatDate(beekeeping.data)+' '} {beekeeping.korpusy+' '} {beekeeping.nadstawki+' '} {beekeeping.ramki}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;