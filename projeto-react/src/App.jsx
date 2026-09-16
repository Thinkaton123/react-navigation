import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Contato from './pages/contato'
import Sobre from './pages/sobre'


function App() {
  const [pagina, setPagina] = useState('home')

  const renderizarPagina= ()=>{
    if(pagina ==='home') return <Home/>
    if(pagina ==='sobre') return <Sobre/>
    if(pagina ==='contato') return <Contato/>
  }

  return (
    <div>
      <h1>Meu Eskematicus de estimação</h1>
      <nav>
        <button onClick={()=>setPagina('home')}>Home</button>
        <button onClick={()=>setPagina('sobre')}>Sobre</button>
        <button onClick={()=>setPagina('contato')}>Contato</button>
      </nav>

      <div>
      {renderizarPagina()}
      </div>


    </div>

 
  )
}

export default App
