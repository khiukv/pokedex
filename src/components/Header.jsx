import {Link} from 'react-router-dom';

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Pokedex</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/my-pokemons">My Pokemons</Link></li>
          <li><a href="!#" rel="noreferrer" target="_blank">GitHub Repo</a></li>
        </ul>
      </div>
    </nav>
  );
}

export {Header};