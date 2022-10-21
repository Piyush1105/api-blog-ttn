import React, { useEffect, useState } from 'react'
import axios from 'axios';

function AxiosApi() {
    const [data, setData] = useState([]);

    useEffect(()=> {
        axios.get("https://type.fit/api/quotes")
        //handling the response
        .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            //for handling
            console.log(error);
          });
    }, [])
  return (
    <>
    <div className='left-container'>
        <h1>Axios Api</h1>
    </div>
    <div className='right-container'>
        <h2>Quotes Received</h2>
        {data.map((quote) => {
           return <li><div> 
            <p>{quote.text}</p>
            <p>- {quote.author}</p>
            <br/>
           </div></li>
        })}
    </div>
    </>
  )
}

export default AxiosApi