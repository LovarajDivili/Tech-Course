import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={Details} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App