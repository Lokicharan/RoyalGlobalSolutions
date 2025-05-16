import { motion } from 'framer-motion';
import Anot from '../images/Anot.png';

const Annotation = () => {
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
      id="annotation"
      className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="md:w-1/2" variants={childVariants}>
        <div className="relative">
          <img
            src={Anot}
            alt="AI Annotation Process"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -top-4 -left-4 bg-royal-gold text-white px-4 py-2 rounded shadow-md">
            <p className="font-bold">AI-Powered</p>
          </div>
        </div>
      </motion.div>

      <motion.div className="md:w-1/2" variants={childVariants}>
        <h3 className="text-2xl font-bold text-royal-navy mb-4">Annotation</h3>
        <p className="text-gray-700 mb-6">
          Essentially, video and image annotation is the process of adding information to unlabeled films and pictures so
          that machine learning algorithms may be developed and trained. This is crucial for the advancement of artificial
          intelligence.
        </p>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="bg-royal-gold p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p>Annotation provision allows AI models to learn from the data and accurately detect and track objects in real-time environments.</p>
          </li>
          <li className="flex items-start">
            <div className="bg-royal-gold p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p>We convert your images and videos to useful datasets. We also handle large readymade datasets for your AI projects.</p>
          </li>
          <li className="flex items-start">
            <div className="bg-royal-gold p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p>Quality assurance checks to ensure accurate and consistent labeling.</p>
          </li>
        </ul>
        
      </motion.div>
    </motion.div>
  );
};

export default Annotation;