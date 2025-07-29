import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '03034673255',
      href: 'tel:03034673255',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'abdullahuzair860@gmail.com',
      href: 'mailto:abdullahuzair860@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdullah-uzair-2a18b9278/',
      color: 'hover:bg-linkedin hover:text-white',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:bg-gray-800 hover:text-white',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, whether it's a project, 
                job opportunity, or just a chat about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white mr-4`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">{info.label}</h4>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 peer"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 peer"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                  Your Message
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400"
                >
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;