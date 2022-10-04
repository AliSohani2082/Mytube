import { useState } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { Route, Routes } from 'react-router-dom'
import { Home, Channel, VideoPage } from './pages'

function App() {
  const [menuOpen, setMenuOpen] = useState(true)

  return (
    <>
      <Header />
      <div className='flex items-stretch'>
        <SideBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/watch' element={<VideoPage />}/>
          <Route path='/c' element={<Channel />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
