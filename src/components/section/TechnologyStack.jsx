import { motion } from "framer-motion";
import { useState } from "react";

const TechnologyStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    {
      name: "React",
      icon: "/path-to-react.svg",
      color: "#61DAFB",
      description:
        "Building interactive UIs with React's component-based architecture",
      experience: "4+ years",
      projects: "50+",
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: "/path-to-node.svg",
      color: "#339933",
      description: "Server-side JavaScript runtime for scalable applications",
      experience: "3+ years",
      projects: "30+",
      category: "Backend",
    },
    {
      name: "JavaScript",
      icon: "/path-to-js.svg",
      color: "#F7DF1E",
      description:
        "Core language for web development and interactive applications",
      experience: "5+ years",
      projects: "100+",
      category: "Language",
    },
    {
      name: "Python",
      icon: "/path-to-python.svg",
      color: "#3776AB",
      description: "Versatile language for backend and data science",
      experience: "3+ years",
      projects: "25+",
      category: "Language",
    },
    {
      name: "TypeScript",
      icon: "/path-to-ts.svg",
      color: "#3178C6",
      description: "Type-safe JavaScript for robust applications",
      experience: "2+ years",
      projects: "20+",
      category: "Language",
    },
    {
      name: "Next.js",
      icon: "/path-to-next.svg",
      color: "#000000",
      description: "React framework for production-grade applications",
      experience: "2+ years",
      projects: "15+",
      category: "Frontend",
    },
    {
      name: "MongoDB",
      icon: "/path-to-mongo.svg",
      color: "#47A248",
      description: "NoSQL database for modern applications",
      experience: "3+ years",
      projects: "40+",
      category: "Database",
    },
    {
      name: "AWS",
      icon: "/path-to-aws.svg",
      color: "#FF9900",
      description: "Cloud infrastructure and services",
      experience: "2+ years",
      projects: "20+",
      category: "Cloud",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-20 bg-[#0B2C3D] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#990302]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EBE2E0]/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="px-4 py-2 bg-[#990302]/10 text-[#990302] rounded-full text-sm font-medium 
                     inline-block mb-4"
          >
            Our Tech Stack
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powered by Modern <span className="text-[#990302]">Technology</span>
          </h2>
          <p className="text-[#EBE2E0]/70 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, efficient,
            and innovative solutions for our clients.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10
                         hover:border-white/20 transition-all duration-300"
              >
                {/* Tech Icon & Name */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center
                               group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${tech.color}15` }}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-8 h-8"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {tech.name}
                      </h3>
                      <span className="text-[#EBE2E0]/50 text-sm">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{
                      scale: hoveredTech === tech.name ? 1.2 : 1,
                      rotate: hoveredTech === tech.name ? 180 : 0,
                    }}
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-[#990302] cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Tech Details */}
                <p className="text-[#EBE2E0]/70 text-sm mb-4 line-clamp-2">
                  {tech.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#EBE2E0]/50 text-sm">
                      Experience:
                    </span>
                    <span className="text-white text-sm font-medium">
                      {tech.experience}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#EBE2E0]/50 text-sm">Projects:</span>
                    <span className="text-white text-sm font-medium">
                      {tech.projects}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#990302] to-[#990302]/80 text-white 
                     rounded-full font-medium shadow-lg hover:shadow-[#990302]/20 
                     transition-all duration-300 cursor-pointer"
          >
            Explore Our Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
