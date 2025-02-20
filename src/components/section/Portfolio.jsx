import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../../assets/Homepage/p-1.avif";
import image2 from "../../assets/Homepage/p-2.jpg";
import image3 from "../../assets/Homepage/p-3.jpg";
import image4 from "../../assets/Homepage/p-4.jpg";
import image5 from "../../assets/Homepage/p-5.jpg";
import image6 from "../../assets/Homepage/p-6.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ui", label: "UI/UX Design" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: image1,
      tech: ["React", "Node.js", "MongoDB"],
      description: "Modern e-commerce solution with real-time features",
    },
    {
      id: 2,
      title: "Fitness Mobile App",
      category: "mobile",
      image: image2,
      tech: ["React Native", "Firebase"],
      description: "Health tracking app with personalized workouts",
    },
    {
      id: 3,
      title: "Banking Dashboard",
      category: "ui",
      image: image3,
      tech: ["Figma", "Adobe XD"],
      description: "User-centered banking interface design",
    },
    {
      id: 4,
      title: "Social Media Platform",
      category: "web",
      image: image4,
      tech: ["Vue.js", "Laravel"],
      description: "Community-driven content sharing platform",
    },
    {
      id: 5,
      title: "Travel Companion App",
      category: "mobile",
      image: image5,
      tech: ["Flutter", "Google Maps API"],
      description: "All-in-one travel planning solution",
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      category: "ui",
      image: image6,
      tech: ["Sketch", "InVision"],
      description: "Data visualization and analytics interface",
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-20 bg-[#0B2C3D] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#990302]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EBE2E0]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="px-4 py-2 bg-[#990302]/10 text-[#990302] rounded-full text-sm font-medium inline-block mb-4"
          >
            Our Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-[#990302]">Projects</span>
          </h2>
          <p className="text-[#EBE2E0]/70 max-w-2xl mx-auto">
            Explore our diverse portfolio of innovative digital solutions that
            have helped businesses transform and grow.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeFilter === category.id
                    ? "bg-[#990302] text-white"
                    : "bg-white/5 text-[#EBE2E0] hover:bg-white/10"
                }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile Slider View */}
        <div className="block lg:hidden">
          <div
            ref={sliderRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            <div className="inline-flex space-x-6 px-4">
              {projects
                .filter(
                  (project) =>
                    activeFilter === "all" || project.category === activeFilter
                )
                .map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="w-[280px] flex-shrink-0 snap-center"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
            </div>
          </div>
        </div>

        {/* Desktop 4-Card Row View */}
        <div className="hidden lg:block">
          <motion.div layout className="grid grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
              {projects
                .filter(
                  (project) =>
                    activeFilter === "all" || project.category === activeFilter
                )
                .map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -10 }}
                    className="transform transition-all duration-300"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Pagination Dots for Mobile */}
        <div className="flex justify-center mt-6 space-x-2 lg:hidden">
          <div className="w-16 h-1 bg-[#990302] rounded-full"></div>
          <div className="w-4 h-1 bg-[#990302]/30 rounded-full"></div>
          <div className="w-4 h-1 bg-[#990302]/30 rounded-full"></div>
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#990302] to-[#990302]/80 text-white 
                     rounded-full font-medium shadow-lg hover:shadow-[#990302]/20 transition-all duration-300 cursor-pointer"
          >
            Explore All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Update ProjectCard component for better fit in 4-column layout
const ProjectCard = ({ project }) => (
  <div
    className="group relative bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm
                  border border-white/10 hover:border-white/20 transition-all duration-300"
  >
    <div className="aspect-w-16 aspect-h-12 relative">
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-full"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0B2C3D] to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
    </div>

    <div className="p-4">
      <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
        {project.title}
      </h3>
      <p className="text-[#EBE2E0]/70 mb-3 text-sm line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-3">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-[#990302]/10 text-[#990302] rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2.5 bg-[#990302] text-white rounded-xl text-sm font-medium
                 hover:bg-[#990302]/90 transition-colors duration-300 flex items-center justify-center group cursor-pointer"
        onClick={() => (window.location.href = `/portfolio/${project.id}`)}
      >
        View Project
        <motion.span
          className="ml-2 group-hover:translate-x-1 transition-transform"
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          →
        </motion.span>
      </motion.button>
    </div>
  </div>
);

export default Portfolio;
