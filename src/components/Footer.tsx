import { Facebook, Linkedin } from 'lucide-react';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-royal-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Royal Global Solutions</h3>
            <p className="text-gray-300 mb-4">
              Providing innovative lead generation and annotation services to help businesses thrive in a dynamic global market.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.facebook.com/profile.php?id=61575969014946" 
                className="text-gray-300 hover:text-royal-gold transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/company/royal-global-solutions/?viewAsMember=true" 
                className="text-gray-300 hover:text-royal-gold transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin size={20} />
              </motion.a>
              
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-royal-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-royal-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-royal-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Greamspet, Chittoor, Andhra Pradesh. 517002</li>
              <li>Email:hello@royalglobalsolutions.in</li>
              <li>Phone:08572-222334</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Royal Global Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;