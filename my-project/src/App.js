import Navbar from './components/navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:id">
              <Detail />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
