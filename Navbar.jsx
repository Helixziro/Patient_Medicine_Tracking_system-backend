import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2>Patient Tracker</h2>
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/book">Book</Link>
      <Link to="/prescriptions">Prescriptions</Link>
    </div>
  </nav>
);

export default Navbar;
