import { useState } from 'react'
import './App.css'
import AudioUploader from './pages/AudioUploader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
          <AudioUploader/>
      </div>
       
    </>
  )
}

export default App
