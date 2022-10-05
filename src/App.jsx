import { useState } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { Route, Routes } from 'react-router-dom'
import { Home, Channel, VideoPage } from './pages'
import { useLocation } from 'react-router-dom'

function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  const location = useLocation()
  return (
    <>
      <Header />
      <div className='flex items-stretch h-full'>
        <SideBar type={location.pathname === '/'? 'fixed' : 'hidden' } />
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
