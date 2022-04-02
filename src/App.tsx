import { Fragment } from 'react'
import './css/output.css'

import Nav from './components/navigation'
import Main from './components/main'

import { opt } from './components/main'

function App() {

  return (
    <Fragment>
        <Nav limit={opt.limit}/>
        <Main />
    </Fragment>
  )
}

export default App
