function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
        © {new Date().getFullYear()} Copyright Text
        <a className="grey-text text-lighten-4 right" href="!#" rel="noreferrer" target="_blank">GitHub Repo</a>
        </div>
      </div>
    </footer>
  );
}

export {Footer};