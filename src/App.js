import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './RegisterForm';
import LoginForm from './Login';
import Home from './Home'
import Notfound from './Notfound';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from './Navbar';
import FavMovies from './FavMovies';


function App() {
  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/register" exact component={RegisterForm}/>
      <Route path="/login" exact component={LoginForm}/>
      <Route path="/movies" exact component={MovieList}/>
      <Route path="/favmovies" exact component={FavMovies}/>
      <Route path="/moviedetails/:id" exact component={MovieDetails}/>

      <Route path={"*"} component={Notfound} />
      </Switch>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
