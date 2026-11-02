import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import { ThemeContext, ThemeProvider } from './components/ThemeContext'
import { useContext } from 'react'
import CartProvider from './components/CartContext'
import Contact from './pages/Contact'
import About from './pages/About'


function AppContext() {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <ThemeProvider>
        <AppContext />
      </ThemeProvider>
    </CartProvider>
  )
}

export default App
