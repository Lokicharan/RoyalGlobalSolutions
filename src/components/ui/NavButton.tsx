import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavButtonProps {
  to: string;
  children: ReactNode;
  active: boolean;
  small?: boolean;
}

const NavButton = ({ to, children, active, small = false }: NavButtonProps) => {
  return (
    <NavLink to={to} className="relative">
      <motion.button
        className={`relative z-10 px-4 py-2 rounded-lg font-medium transition-colors 
        ${small ? 'text-sm px-2 py-1' : 'text-base'}
        ${active ? 'text-white' : 'text-gray-200 hover:text-white'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        {active && (
          <motion.div
            className="absolute inset-0 bg-royal-gold rounded-lg -z-10"
            layoutId="navButtonBackground"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
      </motion.button>
    </NavLink>
  );
};

export default NavButton;