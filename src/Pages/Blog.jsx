import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "Design",
    "Development",
    "Business",
    "AI",
    "Security",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      category: "Technology",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://source.unsplash.com/random/800x600?web",
      excerpt:
        "Exploring the latest trends and technologies shaping the future of web development.",
      author: {
        name: "John Doe",
        avatar: "https://source.unsplash.com/random/100x100?portrait",
      },
    },
    {
      id: 2,
      title: "Mastering UI/UX Design",
      category: "Design",
      date: "March 14, 2024",
      readTime: "7 min read",
      image: "https://source.unsplash.com/random/800x600?design",
      excerpt:
        "Essential principles and practices for creating exceptional user experiences.",
      author: {
        name: "Jane Smith",
        avatar: "https://source.unsplash.com/random/100x100?woman",
      },
    },
    {
      id: 3,
      title: "AI in Modern Web Applications",
      category: "AI",
      date: "March 13, 2024",
      readTime: "6 min read",
      image:
        "https://source.unsplash.com/random/800x600?artificial-intelligence",
      excerpt:
        "How artificial intelligence is revolutionizing web applications and user experiences.",
      author: {
        name: "Mike Johnson",
        avatar: "https://source.unsplash.com/random/100x100?man",
      },
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices",
      category: "Security",
      date: "March 12, 2024",
      readTime: "8 min read",
      image: "https://source.unsplash.com/random/800x600?security",
      excerpt:
        "Essential security measures to protect your web applications from modern threats.",
      author: {
        name: "Sarah Wilson",
        avatar: "https://source.unsplash.com/random/100x100?woman-2",
      },
    },
    {
      id: 5,
      title: "Responsive Design Strategies",
      category: "Design",
      date: "March 11, 2024",
      readTime: "5 min read",
      image: "https://source.unsplash.com/random/800x600?responsive",
      excerpt:
        "Creating seamless experiences across all devices with modern responsive design.",
      author: {
        name: "Alex Chen",
        avatar: "https://source.unsplash.com/random/100x100?person",
      },
    },
    {
      id: 6,
      title: "The Rise of Web3",
      category: "Technology",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "https://source.unsplash.com/random/800x600?blockchain",
      excerpt:
        "Understanding the next generation of web technologies and decentralized applications.",
      author: {
        name: "Lisa Brown",
        avatar: "https://source.unsplash.com/random/100x100?woman-3",
      },
    },
    {
      id: 7,
      title: "Modern JavaScript Frameworks",
      category: "Development",
      date: "March 9, 2024",
      readTime: "6 min read",
      image: "https://source.unsplash.com/random/800x600?coding",
      excerpt:
        "Comparing popular JavaScript frameworks for modern web development.",
      author: {
        name: "David Kim",
        avatar: "https://source.unsplash.com/random/100x100?man-2",
      },
    },
    {
      id: 8,
      title: "Digital Marketing Strategies",
      category: "Business",
      date: "March 8, 2024",
      readTime: "5 min read",
      image: "https://source.unsplash.com/random/800x600?marketing",
      excerpt:
        "Effective digital marketing strategies for growing your online presence.",
      author: {
        name: "Emma Davis",
        avatar: "https://source.unsplash.com/random/100x100?woman-4",
      },
    },
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B2C3D] to-[#0B2C3D]/95 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EBE2E0] mb-4">
            Our Latest Blog Posts
          </h1>
          <p className="text-[#EBE2E0]/80 text-base sm:text-lg max-w-2xl mx-auto">
            Discover insights, tutorials, and updates from our team of experts
          </p>
        </motion.div>

        {/* Centered Categories with better spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto mb-8 sm:mb-12 px-4"
        >
          <div className="relative">
            {/* Gradient fade edges on mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0B2C3D] to-transparent md:hidden"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0B2C3D] to-transparent md:hidden"></div>

            {/* Scrollable categories */}
            <div className="flex justify-start md:justify-center overflow-x-auto scrollbar-hide -mx-4 px-4">
              <div className="flex gap-2 sm:gap-3 pb-4 px-4">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium 
                               transition-all duration-300 cursor-pointer whitespace-nowrap
                               flex-shrink-0 shadow-sm
                               ${
                                 selectedCategory === category
                                   ? "bg-[#990302] text-white"
                                   : "bg-[#EBE2E0]/10 text-[#EBE2E0] hover:bg-[#EBE2E0]/20"
                               }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Desktop 4-Column Grid View */}
        <div className="hidden lg:block max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile and Tablet Slider View */}
        <div className="lg:hidden px-4 sm:px-6">
          <div className="overflow-x-auto snap-x snap-mandatory flex gap-4 md:gap-6 pb-8 scrollbar-hide -mx-4 px-4">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="snap-center flex-shrink-0
                           w-[85vw] min-w-[280px]
                           sm:w-[400px] 
                           md:w-[45vw] md:min-w-[380px]"
              >
                <BlogCard key={post.id} post={post} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Update BlogCard for better 4-column layout
const BlogCard = ({ post, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-[#EBE2E0]/5 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300
              border border-[#EBE2E0]/10 hover:border-[#EBE2E0]/20 group h-full"
  >
    <div className="relative overflow-hidden aspect-video">
      <img
        src={post.image}
        alt={post.title}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute top-3 left-3">
        <span className="px-3 py-1 bg-[#990302] text-white text-xs rounded-full">
          {post.category}
        </span>
      </div>
    </div>

    <div className="p-4">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-8 h-8 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="text-[#EBE2E0] font-medium text-sm">
            {post.author.name}
          </p>
          <p className="text-[#EBE2E0]/60 text-xs">
            {post.date} · {post.readTime}
          </p>
        </div>
      </div>

      <h2
        className="text-lg font-bold text-[#EBE2E0] mb-2 
                     group-hover:text-[#990302] transition-colors line-clamp-2"
      >
        {post.title}
      </h2>
      <p className="text-[#EBE2E0]/80 text-sm mb-4 line-clamp-2">
        {post.excerpt}
      </p>

      <Link
        to={`/blog/${post.id}`}
        className="flex items-center gap-2 text-[#990302] font-medium cursor-pointer
                       group-hover:gap-4 transition-all duration-300 text-sm"
      >
        Read More
        <span>→</span>
      </Link>
    </div>
  </motion.article>
);

export default Blog;
