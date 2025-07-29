import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Monitor, Smartphone, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      title: 'MacroMate',
      subtitle: 'AI Health & Fitness Web App',
      description: 'Advanced AI-powered health and fitness application with personalized meal planning, workout tracking, and nutritional analysis. Final year project showcasing machine learning integration.',
      image: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI/ML', 'React', 'Node.js', 'MongoDB', 'Python'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Full-Stack',
    },
    {
      title: 'XRevStudio.com',
      subtitle: 'Creative Agency Portfolio',
      description: 'Modern, responsive portfolio website for a creative agency featuring stunning animations, interactive galleries, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'SEO'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Frontend',
    },
    {
      title: 'ObecheInterior.com',
      subtitle: 'Interior Design Landing Page',
      description: 'Elegant landing page for an interior design company with showcase galleries, service listings, and contact integration.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Frontend',
    },
    {
      title: 'LevelUpSol.com.pk',
      subtitle: 'Corporate Website',
      description: 'Professional corporate website with service showcases, team profiles, and integrated CMS for content management.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Full-Stack',
    },
    {
      title: 'CricketX.net',
      subtitle: 'Sports Platform Enhancement',
      description: 'Enhanced existing sports platform with responsive design improvements, performance optimization, and mobile-first approach.',
      image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Responsive Design', 'Performance Optimization', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Frontend',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, modern web technologies, and creative problem-solving.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  className="relative group rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full flex items-center">
                        <Zap className="w-4 h-4 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.liveUrl}
                        className="p-3 bg-white rounded-full text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {project.subtitle}
                  </h4>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Monitor className="w-4 h-4 mr-2" />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Monitor className="w-4 h-4 mr-1" />
                    Desktop
                  </div>
                  <div className="flex items-center">
                    <Smartphone className="w-4 h-4 mr-1" />
                    Mobile
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Want to see more of my work or discuss a potential project?
          </p>
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;