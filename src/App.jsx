import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Referral from './pages/Referral'
import Projects from './pages/Projects'
import JointVentures from './pages/JointVentures'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/referral' element={<Referral/>}/>
      <Route path='/joint-ventures' element={<JointVentures/>}/>
      <Route path='/*' element={<PageNotFound/>}/>

     </Routes>
    </>
  )
}

export default App
