import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { SingleMovie } from './components/SingleMovie'
import { Error } from './components/Error'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/singlemovies/:id' element={ <SingleMovie/> }/>
          <Route path='*' element={ <Error/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
