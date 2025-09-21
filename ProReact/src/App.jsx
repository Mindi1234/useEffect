import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StoreItme from '../Components/StoreItme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StoreItme></StoreItme>
    </>
  )
}

export default App
