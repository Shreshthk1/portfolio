import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { CursorHandler } from './components/CursorHandler.jsx'
import { Home } from './components/Home.jsx'
import { Profile } from './components/Profile.jsx'
import { Interests } from './components/Interests.jsx'
import { Showcase } from './components/Showcase.jsx'
import { Contact } from './components/Contact.jsx'
import { NotFound } from './components/NotFound.jsx'


function App() {

  return (
    <>
    <div className=' md:cursor-none lg:cursor-none'>
      <CursorHandler></CursorHandler>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/interests' element={<Interests/>}></Route>
          <Route path='/showcase' element={<Showcase/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
    </>
  )
}

export default App
