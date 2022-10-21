import React, { useEffect, useState } from 'react'

function AwaitFetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
          // declare the async data fetching function
        const fetchData = async() => {
            try{
            // get the data from the api
            const quotes = await fetch('https://type.fit/api/quotes');
            // convert the data to json
            const json = await quotes.json();

            // set state with the result
            setData(json);
            console.log('AwaitFetch', data)
            }
            catch(error){
            // make sure to catch any error
                console.log(error)
            }
        }

        // call the function
        fetchData()
    }, [])
  return (
    <>
    <div className='left-container'>
        <h1>Await Fetch Api</h1>
    </div>
    <div className='right-container'>
        <h2>Quotes Received</h2>
        {/* {console.log(data.text)} */}
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

export default AwaitFetch