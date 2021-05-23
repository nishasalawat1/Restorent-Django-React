import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RestorantCreate from './components/RestorantCreate';
import RestorantUpdate from './components/RestorantUpdate';
import RestorantDelete from './components/RestorantDelete';
import RestorantDetail from './components/RestorantDetail';
import RestorantList from './components/RestorantList';
import RestorantSearch from './components/RestorantSearch';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <ProtectedRoute exact path='/' component={Home} />
        <ProtectedRoute path='/create' component={RestorantCreate} />
        <ProtectedRoute path='/update/:id' component={RestorantUpdate} />
        <Route path='/login/' 
        render={(props)=>(<Login {...props} />)}>
        </Route>
        <ProtectedRoute path='/list' component={RestorantList} /> 
        <ProtectedRoute path='/detail' component={RestorantDetail} />
        <ProtectedRoute path='/search' component={RestorantSearch} />
        <ProtectedRoute path='/delete' component={RestorantDelete} />
        <Route  path='/logout'>
          <Logout />
        </Route>
      </Router>
    </div>
  );
}

export default App;
