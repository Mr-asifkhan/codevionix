import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../../assets/Homepage/p-1.avif";
import image2 from "../../assets/Homepage/p-2.jpg";
import image3 from "../../assets/Homepage/p-3.jpg";
import image4 from "../../assets/Homepage/p-4.jpg";
import { Link } from "react-router-dom";
import profile1 from "../../assets/Homepage/pro-3.jpg";
import profile2 from "../../assets/Homepage/pro-4.jpg";
import profile3 from "../../assets/Homepage/pro-5.avif";
import profile4 from "../../assets/Homepage/pro-3.jpg";

const Blog = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      category: "Technology",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      image: image1,
      excerpt:
        "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks.",
      author: {
        name: "Alex Morgan",
        avatar: profile1,
        role: "Tech Lead",
      },
    },
    {
      id: 2,
      title: "Maximizing User Experience Through Design Innovation",
      category: "Design",
      date: "Mar 12, 2024",
      readTime: "4 min read",
      image: image2,
      excerpt:
        "Learn how innovative design approaches can dramatically improve user experience and engagement.",
      author: {
        name: "Sarah Chen",
        avatar: profile2,
        role: "UX Designer",
      },
    },
    {
      id: 3,
      title: "Building Scalable Applications with Modern Architecture",
      category: "Development",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      image: image3,
      excerpt:
        "Discover best practices for creating scalable applications that can grow with your business.",
      author: {
        name: "James Wilson",
        avatar: profile3,
        role: "Solution Architect",
      },
    },
    {
      id: 4,
      title: "Building Scalable Applications with Modern Architecture",
      category: "Development",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      image: image4,
      excerpt:
        "Discover best practices for creating scalable applications that can grow with your business.",
      author: {
        name: "James Wilson",
        avatar: profile4,
        role: "Solution Architect",
      },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span className="px-4 py-2 bg-[#990302]/10 text-[#990302] rounded-full text-sm font-medium inline-block mb-4">
            Our Blog
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest <span className="text-[#990302]">Insights</span>
          </h2>
          <p className="text-[#EBE2E0]/70 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and innovations in
            technology and digital solutions.
          </p>
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
            onTouchStart={(e) => {
              setIsDragging(true);
              setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
              setScrollLeft(sliderRef.current.scrollLeft);
            }}
            onTouchMove={(e) => {
              if (!isDragging) return;
              const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
              const walk = (x - startX) * 2;
              sliderRef.current.scrollLeft = scrollLeft - walk;
            }}
            onTouchEnd={handleMouseUp}
          >
            <div className="inline-flex space-x-4 px-4">
              {blogPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="w-[300px] flex-shrink-0 snap-center bg-white/5 rounded-xl overflow-hidden 
                           backdrop-blur-sm border border-white/10 hover:border-white/20 
                           transition-all duration-300 group"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-w-16 aspect-h-10">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C3D] to-transparent opacity-60"></div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#990302] text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-[#EBE2E0]/60 text-xs">
                        {post.date}
                      </span>
                      <span className="text-[#EBE2E0]/60 text-xs">•</span>
                      <span className="text-[#EBE2E0]/60 text-xs">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-[#990302] transition-colors cursor-pointer">
                      {post.title}
                    </h3>

                    <p className="text-[#EBE2E0]/70 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full border-2 border-[#990302]/20"
                        />
                        <div>
                          <h4 className="text-white text-sm font-medium">
                            {post.author.name}
                          </h4>
                          <p className="text-[#EBE2E0]/60 text-xs">
                            {post.author.role}
                          </p>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[#990302] hover:text-[#990302]/80 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Mobile Scroll Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {blogPosts.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 
                          ${
                            index === 0
                              ? "w-8 bg-[#990302]"
                              : "w-2 bg-[#990302]/20"
                          }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:block">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-4 gap-6"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 
                         hover:border-white/20 transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-w-16 aspect-h-10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C3D] to-transparent opacity-60"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-[#990302] text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-[#EBE2E0]/60 text-xs">
                      {post.date}
                    </span>
                    <span className="text-[#EBE2E0]/60 text-xs">•</span>
                    <span className="text-[#EBE2E0]/60 text-xs">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-[#990302] transition-colors cursor-pointer">
                    {post.title}
                  </h3>

                  <p className="text-[#EBE2E0]/70 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full border-2 border-[#990302]/20"
                      />
                      <div>
                        <h4 className="text-white text-sm font-medium">
                          {post.author.name}
                        </h4>
                        <p className="text-[#EBE2E0]/60 text-xs">
                          {post.author.role}
                        </p>
                      </div>
                    </div>

                    <Link to={`/blog/${post.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[#990302] hover:text-[#990302]/80 transition-colors cursor-pointer"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#990302] to-[#990302]/80 text-white 
                     rounded-full font-medium shadow-lg hover:shadow-[#990302]/20 
                     transition-all duration-300 group cursor-pointer"
          >
            View All Articles
            <motion.span
              className="ml-2 inline-block group-hover:translate-x-1 transition-transform"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
