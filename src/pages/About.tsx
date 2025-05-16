import { motion } from 'framer-motion';

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Royal Global Solutions</h1>
            <p className="text-xl text-gray-300">
              Leading the way in innovative business solutions since 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <motion.section 
        className="py-16 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div className="md:w-1/2" variants={childVariants}>
              <h2 className="text-3xl font-bold text-royal-navy mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Royal Global Solutions was founded with a vision to revolutionize how businesses approach lead generation and data annotation. 
                What started as a small team of data specialists has grown into a global company serving clients across various industries.
              </p>
              <p className="text-gray-700 mb-4">
                With a foundation built on innovation, precision, and excellence, we've consistently delivered results that exceed our clients' expectations. 
                Our journey has been marked by continuous learning, adaptation, and a commitment to staying at the forefront of technological advancements.
              </p>
              <p className="text-gray-700">
                Today, we're proud to be trusted by companies worldwide, from startups to Fortune enterprises, all of whom rely on our expertise 
                to drive their growth and optimize their operations.
              </p>
            </motion.div>
            
            <motion.div className="md:w-1/2" variants={childVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-royal-navy rounded-lg opacity-10"></div>
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our team working together" 
                  className="rounded-lg shadow-lg relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20">
                  <p className="font-bold text-royal-navy">Founded in 2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section 
        className="py-16 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="text-center mb-12" variants={childVariants}>
            <h2 className="text-3xl font-bold text-royal-navy mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Royal Global Solutions, our values guide everything we do and reflect our commitment to excellence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                variants={childVariants}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="bg-royal-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-royal-navy mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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
            Join Our Growing Client Base
          </motion.h2>
          <motion.p 
            variants={childVariants} 
            className="text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Discover how Royal Global Solutions can help your business thrive in today's competitive marketplace.
          </motion.p>
          <motion.a
            href="/contact"
            variants={childVariants}
            className="inline-block bg-royal-gold text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

const values = [
  {
    icon: "✓",
    title: "Excellence",
    description: "We strive for excellence in everything we do, from client interactions to service delivery."
  },
  {
    icon: "⚡",
    title: "Innovation",
    description: "We embrace new technologies and methodologies to provide cutting-edge solutions to our clients."
  },
  {
    icon: "♾️",
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical practices in all our business dealings."
  }
];

export default About;