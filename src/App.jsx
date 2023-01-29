import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import ProductsDetail from './components/ProductsDetail'
import Purchases from './components/Purchases'
import './style.css'


function App() {

  return (
      <HashRouter>

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
