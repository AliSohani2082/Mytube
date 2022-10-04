import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center bg-black text-gray'>
      <Header />

    </div>
  )
}

export default App
