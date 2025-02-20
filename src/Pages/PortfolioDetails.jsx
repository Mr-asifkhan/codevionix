import { motion } from "framer-motion";
import { useState } from "react";
import project1 from "../assets/Homepage/p-1.avif";
import project2 from "../assets/Homepage/p-2.jpg";
import project3 from "../assets/Homepage/p-3.jpg";
import project4 from "../assets/Homepage/p-4.jpg";

const ImageGallery = ({ images, currentImage, setCurrentImage }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      {/* Thumbnail Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-16"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setCurrentImage(index);
              setIsLightboxOpen(true);
            }}
            className="group relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden cursor-pointer
                     hover:ring-2 hover:ring-[#990302] hover:ring-offset-1 sm:hover:ring-offset-2 
                     hover:ring-offset-[#0B2C3D] transition-all duration-300"
          >
            <img
              src={image.thumbnail}
              alt={image.caption}
              className="w-full h-full object-cover transition-transform duration-500
                       group-hover:scale-110"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p
                className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 
                         text-white text-xs sm:text-sm font-medium truncate"
              >
                {image.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-7xl w-full">
            <img
              src={images[currentImage].url}
              alt={images[currentImage].caption}
              className="w-full h-auto rounded-lg sm:rounded-xl"
            />
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-2 sm:gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  );
                }}
                className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 
                         text-white transition-colors text-sm sm:text-base"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  );
                }}
                className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 
                         text-white transition-colors text-sm sm:text-base"
              >
                →
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(false);
                }}
                className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 
                         text-white transition-colors text-sm sm:text-base"
              >
                ✕
              </button>
            </div>
            <p className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white text-sm sm:text-lg">
              {images[currentImage].caption}
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

const PortfolioDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImage, setCurrentImage] = useState(0);

  const project = {
    title: "E-Commerce Dashboard",
    subtitle: "Next-Gen Shopping Experience",
    category: "Web Development",
    client: "TechCorp Solutions",
    duration: "3 months",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "WebSocket", icon: "🔌" },
      { name: "AWS", icon: "☁️" },
    ],
    images: [
      {
        url: project1,
        thumbnail: project1,
        caption: "Main Dashboard View",
      },
      {
        url: project2,
        thumbnail: project2,
        caption: "Analytics Interface",
      },
      {
        url: project3,
        thumbnail: project3,
        caption: "Mobile Responsive Design",
      },
      {
        url: project4,
        thumbnail: project4,
        caption: "Data Visualization",
      },
    ],
    stats: [
      { label: "User Satisfaction", value: "95%", icon: "😊" },
      { label: "Performance Boost", value: "80%", icon: "⚡" },
      { label: "Data Processing", value: "2M+", icon: "📊" },
      { label: "Daily Users", value: "50K+", icon: "👥" },
    ],
    overview: {
      description:
        "A comprehensive e-commerce dashboard revolutionizing how businesses manage their online presence. Built with cutting-edge technologies and focused on user experience.",
      keyFeatures: [
        "Real-time Analytics Dashboard",
        "Inventory Management System",
        "Customer Behavior Tracking",
        "Automated Reporting",
        "Multi-platform Support",
        "Advanced Search Capabilities",
      ],
    },
    process: [
      {
        phase: "Research & Planning",
        duration: "2 weeks",
        description: "Extensive market research and requirement analysis",
      },
      {
        phase: "Design & Prototyping",
        duration: "3 weeks",
        description: "Creating wireframes and interactive prototypes",
      },
      {
        phase: "Development",
        duration: "8 weeks",
        description: "Agile development with weekly sprints",
      },
      {
        phase: "Testing & Launch",
        duration: "3 weeks",
        description: "Rigorous testing and successful deployment",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B2C3D] to-[#0B2C3D]/95 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#990302]/20 text-[#EBE2E0] mb-3 sm:mb-4 text-sm sm:text-base">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EBE2E0] mb-3 sm:mb-4">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#EBE2E0]/80 max-w-3xl mx-auto px-4">
            {project.subtitle}
          </p>
        </motion.div>

        {/* Image Gallery */}
        <ImageGallery
          images={project.images}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16"
        >
          {project.stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10
                       hover:border-white/20 transition-all group"
            >
              <span className="text-2xl sm:text-3xl mb-2 block">
                {stat.icon}
              </span>
              <p className="text-xl sm:text-2xl font-bold text-[#EBE2E0] mb-1">
                {stat.value}
              </p>
              <p className="text-[#EBE2E0]/60 text-xs sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Project Info Card */}
            <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
              <h3 className="text-lg sm:text-xl font-bold text-[#EBE2E0] mb-4 sm:mb-6">
                Project Details
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-[#EBE2E0]/60 text-xs sm:text-sm">Client</p>
                  <p className="text-[#EBE2E0] text-sm sm:text-base">
                    {project.client}
                  </p>
                </div>
                <div>
                  <p className="text-[#EBE2E0]/60 text-xs sm:text-sm">
                    Timeline
                  </p>
                  <p className="text-[#EBE2E0] text-sm sm:text-base">
                    {project.duration}
                  </p>
                </div>
                <div>
                  <p className="text-[#EBE2E0]/60 text-xs sm:text-sm mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 
                                 bg-[#990302]/20 rounded-full text-xs sm:text-sm text-[#EBE2E0]"
                      >
                        <span>{tech.icon}</span>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-[#990302] text-white rounded-xl
                         font-medium text-center hover:bg-[#990302]/90 text-sm sm:text-base
                         transition-colors flex items-center justify-center gap-2"
              >
                <span>View Live Demo</span>
                <span>→</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-[#EBE2E0] rounded-xl
                         font-medium text-center hover:bg-white/20 transition-colors text-sm sm:text-base"
              >
                Source Code
              </motion.a>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            {/* Content Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
              {["overview", "process", "features", "results"].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium capitalize
                           ${
                             activeTab === tab
                               ? "bg-[#990302] text-white"
                               : "bg-white/10 text-[#EBE2E0] hover:bg-white/20"
                           } 
                           transition-colors`}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <p className="text-[#EBE2E0] leading-relaxed text-sm sm:text-base">
                    {project.overview.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {project.overview.keyFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 sm:gap-3 text-[#EBE2E0] text-sm sm:text-base"
                      >
                        <span className="text-[#990302]">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "process" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4 sm:space-y-6"
                >
                  {project.process.map((phase, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 text-[#EBE2E0]"
                    >
                      <div
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#990302]/20 
                                    flex items-center justify-center flex-shrink-0 text-sm sm:text-base"
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 text-sm sm:text-base">
                          {phase.phase}
                        </h4>
                        <p className="text-[#EBE2E0]/60 text-xs sm:text-sm mb-1">
                          Duration: {phase.duration}
                        </p>
                        <p className="text-[#EBE2E0]/80 text-sm sm:text-base">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Add more tab content as needed */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
