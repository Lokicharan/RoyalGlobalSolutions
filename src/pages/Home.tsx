import { motion } from 'framer-motion';
import LeadGeneration from '../components/LeadGeneration';
import Annotation from '../components/Annotation';
import Hero from '../components/Hero';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div>
      <Hero />
      
      <motion.div
        className="py-16 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div variants={childVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-royal-navy mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Royal Global Solutions offers specialized services designed to help businesses grow, 
              optimize their operations, and stay ahead in today's competitive market.
            </p>
          </motion.div>
          
          <div className="space-y-24">
            <LeadGeneration />
            <Annotation />
          </div>
        </div>
      </motion.div>
      
      {/* Testimonials Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div variants={childVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-royal-navy mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take pride in delivering exceptional results for our clients. Here's what they have to say about our services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={childVariants}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-royal-gold flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-royal-navy text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h2 
            variants={childVariants} 
            className="text-3xl font-bold mb-4"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            variants={childVariants} 
            className="text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Contact us today to learn how our specialized solutions can help your business grow and thrive in a competitive market.
          </motion.p>
          <motion.a
            href="/contact"
            variants={childVariants}
            className="inline-block bg-royal-gold text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director, Tech Innovations",
    quote: "Royal Global Solutions transformed our lead generation strategy. We've seen a 40% increase in qualified leads within just three months."
  },
  {
    name: "Michael Chen",
    position: "CTO, AI Solutions Inc.",
    quote: "Their annotation services are top-notch. The precision and consistency have dramatically improved our machine learning models' performance."
  },
  {
    name: "Olivia Rodriguez",
    position: "Operations Manager, Global Enterprises",
    quote: "Working with Royal Global Solutions has been a game-changer for our business. Their team is professional, responsive, and delivers exceptional results."
  }
];

export default Home;