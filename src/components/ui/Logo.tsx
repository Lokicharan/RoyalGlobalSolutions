import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 400 400"
      fill="currentColor"
      className="text-royal-gold"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 1.5 }}
    >
      <path d="M200 50 L300 150 L350 100 L200 0 L50 100 L100 150 L200 50" />
      <path d="M50 100 L50 120 L200 300 L350 120 L350 100 L200 250 L50 100" />
      <path d="M75 150 L200 350 L325 150 L200 275 L75 150" />
    </motion.svg>
  );
};

export default Logo;