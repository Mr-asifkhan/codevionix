import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/codevionix.png";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";
import {
  MdBusinessCenter,
  MdDesignServices,
  MdLibraryBooks,
  MdEmail,
} from "react-icons/md";

const Footer = () => {
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const footerLinks = [
    {
      title: "Company",
      icon: <MdBusinessCenter className="w-5 h-5" />,
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Our Team", href: "/team" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      icon: <MdDesignServices className="w-5 h-5" />,
      links: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "Mobile Apps", href: "/services/mobile-apps" },
        { label: "UI/UX Design", href: "/services/ui-ux-design" },
        { label: "Cloud Solutions", href: "/services/cloud" },
      ],
    },
    {
      title: "Resources",
      icon: <MdLibraryBooks className="w-5 h-5" />,
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Documentation", href: "/docs" },
        { label: "Help Center", href: "/help" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      href: "#",
      color: "#24292E",
      hoverBg: "hover:bg-[#24292E]",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-5 h-5" />,
      href: "#",
      color: "#1DA1F2",
      hoverBg: "hover:bg-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: "#",
      color: "#0A66C2",
      hoverBg: "hover:bg-[#0A66C2]",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-5 h-5" />,
      href: "#",
      color: "#E4405F",
      hoverBg: "hover:bg-[#E4405F]",
    },
    {
      name: "Dribbble",
      icon: <FaDribbble className="w-5 h-5" />,
      href: "#",
      color: "#EA4C89",
      hoverBg: "hover:bg-[#EA4C89]",
    },
    {
      name: "Behance",
      icon: <FaBehance className="w-5 h-5" />,
      href: "#",
      color: "#1769FF",
      hoverBg: "hover:bg-[#1769FF]",
    },
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setEmailInput("");
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0B2C3D] to-[#0B2C3D]/95 pt-20 pb-10">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div
            className="relative bg-gradient-to-br from-[#990302]/20 to-transparent 
                       backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-[#990302]/20
                       overflow-hidden group hover:border-[#990302]/40 transition-all duration-500"
          >
            <motion.div
              className="absolute inset-0 bg-[#990302]/5 opacity-0 group-hover:opacity-100
                       transition-opacity duration-500"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
                backgroundSize: ["100% 100%", "200% 200%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <div className="relative z-10 max-w-xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <span className="text-4xl">✨</span>
              </motion.div>
              <h3
                className="text-2xl lg:text-3xl font-bold text-white mb-4
                          bg-gradient-to-r from-white via-white to-white/70 
                          bg-clip-text text-transparent"
              >
                Join Our Newsletter
              </h3>
              <p className="text-[#EBE2E0]/70 mb-8">
                Stay updated with our latest news, articles, and resources. No
                spam, unsubscribe at any time.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 group"
              >
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MdEmail className="w-5 h-5 text-[#EBE2E0]/50" />
                  </div>
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl
                           text-white placeholder-white/50 focus:outline-none 
                           focus:border-[#990302] transition-all duration-300
                           focus:bg-white/10"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-[#990302] text-white rounded-xl font-medium
                         hover:bg-[#990302]/90 transition-all duration-300 
                         disabled:opacity-50 disabled:cursor-not-allowed
                         whitespace-nowrap flex items-center justify-center gap-2
                         relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full inline-block"
                        />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      "Subscribe Now"
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#990302]/0 
                             via-white/20 to-[#990302]/0"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <Link to="/" className="block group">
              <motion.img
                src={logo}
                alt="Logo"
                className="h-15"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>
            <p
              className="text-[#EBE2E0]/70 text-sm lg:text-base max-w-md
                       hover:text-[#EBE2E0] transition-colors duration-300"
            >
              Creating innovative digital solutions that help businesses thrive
              in the modern world. Our expertise spans across web, mobile, and
              cloud technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 
                         flex items-center justify-center text-white transition-all duration-300
                         ${social.hoverBg} hover:border-transparent group`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-12">
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                  {section.icon}
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.label}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: linkIndex * 0.1 }}
                    >
                      <Link
                        to={link.href}
                        className="text-[#EBE2E0]/70 hover:text-white 
                               transition-all duration-300 inline-flex items-center gap-2
                               group relative"
                      >
                        <span className="relative">
                          {link.label}
                          <motion.span
                            className="absolute left-0 right-0 bottom-0 h-px bg-[#990302]
                                   origin-left scale-x-0 group-hover:scale-x-100
                                   transition-transform duration-300"
                          />
                        </span>
                        <motion.span
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#EBE2E0]/60 text-sm text-center md:text-left">
              © 2024 Your Company. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[#EBE2E0]/60 hover:text-[#990302] text-sm 
                         transition-all duration-300 relative group"
                  >
                    <span className="relative">
                      {item}
                      <motion.span
                        className="absolute left-0 right-0 bottom-0 h-px bg-[#990302]
                             origin-left scale-x-0 group-hover:scale-x-100
                             transition-transform duration-300"
                      />
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
