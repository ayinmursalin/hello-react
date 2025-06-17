import { Button } from '@mui/material'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>

      <p className='mt-4'> Current: {count} </p>

      <Button variant='contained' sx={{ mt: 4 }} onClick={() => {
        setCount(count + 1)
      }}>Incremeent</Button>

    </>
  )
}

export default App
