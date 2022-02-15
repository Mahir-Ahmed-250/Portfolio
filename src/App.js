import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import SingleProject from './Pages/SingleProject/SingleProject';



function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/project/:id'>
            <SingleProject></SingleProject>
          </Route>
          <Route exact path='/blogs'>
            <Blogs></Blogs>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
