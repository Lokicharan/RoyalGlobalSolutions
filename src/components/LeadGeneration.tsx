import { motion } from 'framer-motion';
import lead from '../images/Lead.png';


const LeadGeneration = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      id="lead-generation"
      className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="md:w-1/2 order-2 md:order-1" variants={childVariants}>
        <h3 className="text-2xl font-bold text-royal-navy mb-4">Lead Generation</h3>
        <p className="text-gray-700 mb-6">
          Lead generation is crucial for business growth and revenue. By gathering contact information from potential 
          customers, businesses can nurture leads into paying clients. This allows for more efficient marketing and 
          personalized outreach. Increase engagement and conversion rates, including no-risk lead generation help to build 
          your customer base.
        </p>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="bg-royal-gold p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p>Our lead generation services are designed to identify and attract potential customers for your business.</p>
          </li>
          <li className="flex items-start">
            <div className="bg-royal-gold p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p>Provide accurate and up-to-date lead data for effective follow-up and nurturing.</p>
          </li>
          <li className="flex items-start">
            <div className="bg-royal-gold p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p>We are experts in web mining, web scraping services. We build customized website scrapers for developers' target businesses.</p>
          </li>
        </ul>
      </motion.div>
      
      <motion.div className="md:w-1/2 order-1 md:order-2" variants={childVariants}>
        <div className="relative">
          
          <img
            src={lead}
            alt="Lead Generation Strategy"
            className="rounded-lg shadow-lg h-80 w-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LeadGeneration;