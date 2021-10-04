import NotFound from './component/NotFound/NotFound'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import Bannar from './component/Bannar/Bannar';
import More from './component/More/More';
import Moredetails from './component/Moredetails/Moredetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/more">
            <Moredetails></Moredetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
