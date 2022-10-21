import React, { useEffect, useState } from 'react'

function FetchApi() {

    const [data, setData] = useState([]);

    useEffect(() => {
    fetch("https://type.fit/api/quotes")
        //handling the request
        .then((response) => {
            //convert response to json format
            return response.json();
        })
        .then((quotes) => {
            setData(quotes)
            // console.log(quotes);
        })

        //handling the error
        .catch((error) => {
            console.log(error);
        });
    }, [])

  return (
    <>
    <div className='left-container'>
        <h1>Fetch Api</h1>
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

export default FetchApi