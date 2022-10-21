import React from 'react'
import AwaitAxios from './AwaitAxios'
import AwaitFetch from './AwaitFetch'
import AxiosApi from './AxiosApi'
import FetchApi from './FetchApi'

function App() {
  return (
    <>
    <div className='main-container'>
      <FetchApi />
    </div>
    <br />
    <br />
    <div className='main-container'>
      <AxiosApi />
    </div>
    <br />
    <br />
    <div className='main-container'>
      <AwaitFetch />
    </div>
    <br />
    <br />
    <div className='main-container'>
      <AwaitAxios />
    </div>
    </>
  )
}

export default App