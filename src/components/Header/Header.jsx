import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">🚀</span>
          <div className="logo-text">
            <h1>Team MIMH</h1>
            <span className="tagline">Project Feedback Portal</span>
          </div>
        </Link>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/tourist-utility-service-system" className="nav-link">Project 1</Link>
          <Link to="/stroke-hand-recovery-system" className="nav-link">Project 2</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
