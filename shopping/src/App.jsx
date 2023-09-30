import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Detail from './components/Detail'
import Basket from './components/Basket'
import Overview from './components/Overview'
function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/overview' element={<Overview />} />
      </Routes>
    </div>
  )
}

export default App
