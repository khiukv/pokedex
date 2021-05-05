import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ContextProvider} from './context';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Home} from './pages/Home';
import {MyPokemons} from './pages/MyPokemons';

function App() {
  return (
    <div className="App">
      <Router basename="/pokedex">
        <Header />
        <ContextProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/my-pokemons" component={MyPokemons} />
          </Switch>
        </ContextProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;