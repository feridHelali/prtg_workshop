import { useEffect,useState } from 'react'
import './App.css'
import axios from 'axios'

const API_KEY='4EA6QAQRBYQGTETZZWBCX2PWXTSZKEYSQ4BK5JCLBM======'
const API_URI=`https://127.0.0.1/api/table.json?content=sensors&columns=sensor&apitoken=${API_KEY}`
const SENSORS_ENDPOINT=`https://127.0.0.1/api/sensortypesinuse.json?simpleobject=true&apitoken=${API_KEY}`

function App() {
  const [table,setTable]=useState({})
  const [sensors,setSensors]=useState({})
  const getPrtgTable=async()=>{
     axios(API_URI).then(response=>{
      setTable(response?.data)
     }).catch(error=>console.log(error))
     axios(SENSORS_ENDPOINT).then(response=>{
      setSensors(response?.data)
     }).catch(error=>console.log(error))
  }

  useEffect(()=>{
   getPrtgTable()
  },[])

  return (
    <div className="App">
      <pre><code>
        {JSON.stringify(table,null,3)}
        </code></pre>

        <br/>
        <pre><code>
        {JSON.stringify(sensors,null,3)}
        </code></pre>
    </div>
  )
}

export default App
