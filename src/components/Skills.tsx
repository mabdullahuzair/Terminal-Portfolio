import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Globe, Wrench, Terminal, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Front-End',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 88 },
      ]
    },
    {
      title: 'Back-End',
      icon: <Code className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'PHP', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 78 },
        { name: 'RESTful APIs', level: 85 },
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MySQL', level: 88 },
        { name: 'MongoDB', level: 82 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'SEO', level: 88 },
      ]
    },
    {
      title: 'Programming Languages',
      icon: <Terminal className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'C', level: 80 },
        { name: 'C++', level: 82 },
        { name: 'JavaScript', level: 88 },
        { name: 'Python', level: 75 },
      ]
    },
    {
      title: 'Specialties',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Debugging', level: 90 },
        { name: 'Agile', level: 85 },
        { name: 'Machine Learning', level: 65 },
        { name: 'Problem Solving', level: 92 },
      ]
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Always learning and staying up-to-date with the latest technologies and best practices.
          </p>
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-5 h-5 mr-2" />
            Ready to Innovate
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;