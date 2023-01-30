import { HashRouter, Route, Routes } from 'react-router-dom'
import AppNavbar from './components/AppNavbar'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import ProductsDetail from './components/pages/ProductsDetail'
import Purchases from './components/pages/Purchases'
import './style.css'


function App() {

  return (
      <HashRouter>

        <AppNavbar/>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/product/:id' element={<ProductsDetail/>}></Route>
          <Route path='/login' element={<Login/>}></Route>

          {/* Routa protegida */}
          <Route path='/purchases' element={<Purchases/>}></Route>

        </Routes>

      </HashRouter>
  )
}

export default App
