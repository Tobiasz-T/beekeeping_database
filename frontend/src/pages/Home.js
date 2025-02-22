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
            <table>
            <tr>
      <td>UL</td> <td>Data</td> <td>Korpusy</td> <td>Nadstawki</td> <td>Ramki</td>
            </tr>
                {bee.map((beekeeping) => (
                    <tr class="m" key={beekeeping.id}><td>{beekeeping.id+'. '}</td> <td>{formatDate(beekeeping.data)+' '}</td> <td>{beekeeping.korpusy+' '}</td><td>{beekeeping.nadstawki+' '}</td><td>{beekeeping.ramki}</td></tr>
                ))}
            </table>
        </div>
    );
}

export default Home;