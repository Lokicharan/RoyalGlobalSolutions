import { motion } from 'framer-motion';
import main from '../images/main.png';

const Hero = () => {
  return (
    <div className="relative bg-royal-navy text-white pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-royal-gold"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-royal-gold"></div>
        <div className="absolute -bottom-32 right-1/3 w-80 h-80 rounded-full bg-royal-gold"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-royal-gold">Innovative</span> Business Solutions for a Global Market
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We specialize in lead generation and data annotation services to help your business thrive in today's competitive landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="/contact" 
                className="bg-royal-gold text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-yellow-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-royal-navy to-transparent opacity-30 rounded-lg"></div>
              <img 
                src={main}
                alt="Business team collaborating" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-royal-gold text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold">Trusted by Companies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;