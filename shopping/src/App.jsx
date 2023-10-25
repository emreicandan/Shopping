import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Detail from './components/Detail'
import Basket from './components/Basket'
import Overview from './components/Overview'
import MainLayout from './components/MainLayout'
import AuthLayout from './components/AuthLayout'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ForgorPass from './components/ForgorPass'
import Profile from './components/Profile'
function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/overview' element={<Overview />} />
        </Route>
        <Route path='/' element={<AuthLayout />}>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-pass' element={<ForgorPass />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
