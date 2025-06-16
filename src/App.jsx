import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Menu } from './compjsx/Menu'
import "./App.css"



function App() {
  const [count, setCount] = useState(0)

  return (
    <section >
      <div className="titulo">
        <h2>SERGIO EL SALVADOR</h2>
        <h2>MARCELO GABRIEL LAURA PACO</h2>
      </div>
      <Menu/>
    </section>
  )
}

export default App