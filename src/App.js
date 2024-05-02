import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Course from './components/Course'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={Course} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
