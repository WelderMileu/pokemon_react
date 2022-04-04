import { Fragment } from 'react'
import './css/output.css'

import Nav from './components/navigation'
import Main from './components/main'

import { limit } from './components/main'

function App() {

  return (
    <Fragment>
        <Nav limit={limit}/>
        <Main />
    </Fragment>
  )
}

export default App
