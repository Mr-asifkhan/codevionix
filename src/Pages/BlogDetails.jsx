import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "react-router-dom";
import image1 from "../assets/Homepage/p-1.avif";
import image2 from "../assets/Homepage/p-2.jpg";
import image3 from "../assets/Homepage/p-3.jpg";
import image4 from "../assets/Homepage/p-4.jpg";
import avatar from "../assets/Homepage/pro-4.jpg";

const BlogDetails = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  const blogPost = {
    title: "The Future of Web Development: Trends to Watch in 2024",
    author: {
      name: "Sarah Johnson",
      role: "Senior Developer",
      avatar: avatar,
    },
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    tags: ["Web Development", "JavaScript", "AI", "Trends"],
    coverImage: image1,
    content: [
      {
        type: "paragraph",
        content:
          "The web development landscape is constantly evolving, bringing new technologies and methodologies that reshape how we build digital experiences.",
      },
      {
        type: "heading",
        content: "1. AI-Driven Development",
      },
      {
        type: "paragraph",
        content:
          "Artificial Intelligence is revolutionizing how we approach web development, from automated testing to intelligent code completion.",
      },
      {
        type: "quote",
        content:
          "AI isn't replacing developers; it's empowering them to focus on more creative and strategic aspects of development.",
      },
      {
        type: "heading",
        content: "2. WebAssembly Evolution",
      },
      {
        type: "paragraph",
        content:
          "WebAssembly continues to gain traction, enabling high-performance applications in the browser.",
      },
    ],
    relatedPosts: [
      {
        id: 1,
        title: "Getting Started with React 18",
        image: image2,
        category: "React",
      },
      {
        id: 2,
        title: "Understanding TypeScript 5.0",
        image: image3,
        category: "TypeScript",
      },
      {
        id: 3,
        title: "The Power of Next.js 14",
        image: image4,
        category: "Next.js",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B2C3D] to-[#0B2C3D]/95 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span
            className="inline-block px-4 py-2 rounded-full bg-[#990302]/20 
                        text-[#EBE2E0] text-sm mb-4"
          >
            {blogPost.category}
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#EBE2E0] 
                       mb-6 leading-tight"
          >
            {blogPost.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <img
              src={blogPost.author.avatar}
              alt={blogPost.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-[#EBE2E0] font-medium">
                {blogPost.author.name}
              </p>
              <p className="text-[#EBE2E0]/60 text-sm">
                {blogPost.author.role}
              </p>
            </div>
            <span className="text-[#EBE2E0]/40 mx-4">|</span>
            <div className="text-[#EBE2E0]/60 text-sm">
              {blogPost.date} · {blogPost.readTime}
            </div>
          </div>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <img
            src={blogPost.coverImage}
            alt={blogPost.title}
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg prose-invert max-w-none mb-12"
        >
          {blogPost.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <motion.h2
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-[#EBE2E0] my-6"
                >
                  {block.content}
                </motion.h2>
              );
            }
            if (block.type === "quote") {
              return (
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-[#990302] pl-4 my-6 italic text-[#EBE2E0]/80"
                >
                  {block.content}
                </motion.blockquote>
              );
            }
            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#EBE2E0]/80 leading-relaxed mb-6"
              >
                {block.content}
              </motion.p>
            );
          })}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-white/5 text-[#EBE2E0]/80 text-sm
                         hover:bg-white/10 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Engagement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center border-t border-b border-white/10 
                   py-6 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLiked(!isLiked)}
            className="flex items-center gap-2 text-[#EBE2E0]"
          >
            <span className={`text-2xl ${isLiked ? "text-[#990302]" : ""}`}>
              {isLiked ? "❤️" : "🤍"}
            </span>
            <span>{isLiked ? "Liked" : "Like"}</span>
          </motion.button>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-[#EBE2E0]"
            >
              <span>💬</span>
              <span>Comment</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-[#EBE2E0]"
            >
              <span>📤</span>
              <span>Share</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-[#EBE2E0] mb-6">
            Related Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPost.relatedPosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300
                             group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100
                               transition-opacity duration-300"
                  />
                </div>
                <span className="text-[#990302] text-sm">{post.category}</span>
                <h4
                  className="text-[#EBE2E0] font-medium mt-2 group-hover:text-[#990302]
                             transition-colors"
                >
                  {post.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetails;
