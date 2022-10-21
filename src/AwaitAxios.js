import React, { useEffect, useState } from 'react'
import axios from 'axios'
function AwaitAxios() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const quotes = await axios.get("https://type.fit/api/quotes")
                //remember in axios data is pre stored in json format 
                //
                setData(quotes.data)
                // console.log(quotes)
            }
            catch(error){
                console.log(error);
            }
        }
        fetchData()
    }, [])

  return (
    <>
    <div className='left-container'>
        <h1>Await Axios Api</h1>
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

export default AwaitAxios