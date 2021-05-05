function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
        © {new Date().getFullYear()} Copyright Text
        <a className="grey-text text-lighten-4 right" href="https://github.com/khiukv/pokedex" rel="noreferrer" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export {Footer};