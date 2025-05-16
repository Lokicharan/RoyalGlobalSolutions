import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-royal-navy text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch with our team to learn how we can help your business succeed
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-royal-navy mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-royal-gold p-3 rounded-full mr-4 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Our Location</h3>
                  <p className="text-gray-600">
                   Greamspet, Chittoor, Andhra Pradesh. 517002.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-royal-gold p-3 rounded-full mr-4 text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">08572-222334</p>
                  
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-royal-gold p-3 rounded-full mr-4 text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">hello@royalglobalsolutions.in</p>
                  
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-royal-gold p-3 rounded-full mr-4 text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                  <p className="text-gray-600">Saturday: 10am - 2pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      
    </div>
  );
};

export default Contact;