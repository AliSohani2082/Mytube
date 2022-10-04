import { useState } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { Route, Routes } from 'react-router-dom'
import { Home, Channel } from './pages'

function App() {
  const [menuOpen, setMenuOpen] = useState(true)

  return (
    <div className='flex flex-col justify-center items-stretch bg-black text-gray'>
      <Header />
      <div className='flex items-stretch'>
        <SideBar />
        <Routes>
          <Route path='/' element={Home}/>
          <Route path='/' element={Home}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
