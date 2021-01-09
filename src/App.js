import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'

import ButtonsAndIcons from './pages/buttonsAndIcons';
import Color from './pages/color';
import Home from './pages/home';
import Typography from './pages/typography';
import ActionButton from './pages/actionButton'
import Navbar from './pages/navbar';
import Collection from './pages/collection';
import Grid from './pages/grid';
import Cart from './pages/cart'
import Footer from './pages/breadCrumpsFooter';
import FormsAndInput from './pages/formsAndInput';
import FancyFormAndInput from './pages/fancyFormAndInput';
import ChipsPagination from './pages/chipsPagination';
import Carousel from './pages/carousel';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/typography" exact>
          <Typography />
        </Route>
        <Route path="/color" exact>
          <Color />
        </Route>
        <Route path="/buttonsAndIcons" exact>
          <ButtonsAndIcons />
        </Route>
        <Route path="/actionButton" exact>
          <ActionButton/>
        </Route>
        <Route path="/navbar" exact>
          <Navbar/>
        </Route>
        <Route path="/collections" exact>
          <Collection/>
        </Route>
        <Route path="/grid" exact>
          <Grid/>
        </Route>
        <Route path="/card">
          <Cart/>
        </Route>
        <Route path="/footer" exact>
          <Footer/>
        </Route>
        <Route path="/formsAndInput" exact>
          <FormsAndInput/>
        </Route>
        <Route path="/fancyFormAndInput" exact>
          <FancyFormAndInput/>
        </Route>
        <Route path="/chipsPagination" exact>
          <ChipsPagination/>
        </Route>
        <Route path="/carousel" exact>
          <Carousel/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
