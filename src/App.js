import React,{useState} from 'react';
import axios from "axios";
import Gallerys from './Gallerys';
import './App.css'

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);
  const changeHandler = e =>{
setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
    setData(response.data.photos.photo)
    })
console.log(search);
}

  return (
    <div>
     <center>
      <h2>Gallery</h2> <br></br>
      <form onSubmit={submitHandler} >
        <input type="text"  value={search} onChange={changeHandler} /><br></br><br></br>
        <input type="submit" name="search" />
      </form>
      <br />
      {data.length>=1? <Gallerys data={data} /> : <h4>No Data found</h4>}
     </center>
    </div>
  )
}

export default App