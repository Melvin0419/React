const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-ligjt">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
