
import React from 'react'
import Rotas from './Rotas'
import NavBar from '../components/NavBar'

import 'bootswatch/dist/slate/bootstrap.css'
import '../custom.css'

class App extends React.Component {
  render () {
    return (
      <>
        <NavBar/>
        <div className="container">
          <Rotas/>
        </div>
      </>
    )
  }
}

export default App;
