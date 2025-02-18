import React,{useState} from "react";
import Axios  from "axios";

const Form =()=>{

  const [beeId, setBeeId] = useState("");
  const [beeData, setBeeData] = useState("");
  const [beeKorpusy, setBeeKorpusy] = useState("");
  const [beeNadstawki,setBeeNadstawki] = useState("");
  const [beeRamki,setBeeRamki] = useState("");

  const submitBee= () => {
    Axios.post('http://localhost:5000/bee/insert',{
      beeId: beeId,
      beeData: beeData,
      beeKorpusy: beeKorpusy,
      beeNadstawki: beeNadstawki,
      beeRamki: beeRamki
    }).then(()=>{
      alert('succesful insert');
    })
    .catch((error)=>{
      console.error("Błąd zapisu do API:", error);
    });
  };

    return(
        <div className="form">
          <label>Id: </label>
          <input type="text" name="beeId" onChange={(e)=>{
            setBeeId(e.target.value);
          }}/>

<label>Data: </label>
          <input type="date" name="beeData" onChange={(e)=>{
            setBeeData(e.target.value);
          }}/>

<label>Korpusy: </label>
          <input type="text" name="beeKorpusy" onChange={(e)=>{
            setBeeKorpusy(e.target.value);
          }}/>

<label>Nadstawki: </label>
          <input type="text" name="beeNadstawki" onChange={(e)=>{
            setBeeNadstawki(e.target.value);
          }}/>
<label>Ramki: </label>
          <input type="text" name="beeRamki" onChange={(e)=>{
            setBeeRamki(e.target.value);
          }}/>
          <button onClick={submitBee}>Submit</button>
        </div>
    );
};

export default Form;