import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavButton from './ui/NavButton';
import Logo from './ui/Logo';
import './Header.css'; // Import your CSS file for styles

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-royal-navy shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <Logo />
          <h2  className='title'>Royal Global Solutions<br/><h2 className='sub-title'>where solution rules the globe</h2></h2>

        </NavLink>

        <nav className="hidden md:flex items-center space-x-1">
          <NavButton to="/" active={location.pathname === '/'}>
            Home
          </NavButton>
          <NavButton to="/about" active={location.pathname === '/about'}>
            About
          </NavButton>
          <NavButton to="/contact" active={location.pathname === '/contact'}>
            Contact
          </NavButton>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <div className="space-x-1">
            <NavButton to="/" active={location.pathname === '/'} small>
              Home
            </NavButton>
            <NavButton to="/about" active={location.pathname === '/about'} small>
              About
            </NavButton>
            <NavButton to="/contact" active={location.pathname === '/contact'} small>
              Contact
            </NavButton>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;