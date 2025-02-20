import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: "📱",
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: "📧",
      title: "Email",
      details: ["contact@example.com", "support@example.com"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: "📍",
      title: "Location",
      details: ["123 Business Street", "New York, NY 10001"],
      color: "from-orange-500/20 to-red-500/20",
    },
  ];

  const socialLinks = [
    { icon: "📱", label: "WhatsApp", url: "https://wa.me/1234567890" },
    {
      icon: "💼",
      label: "LinkedIn",
      url: "https://linkedin.com/company/example",
    },
    { icon: "📸", label: "Instagram", url: "https://instagram.com/example" },
    { icon: "🐦", label: "Twitter", url: "https://twitter.com/example" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B2C3D] to-[#0B2C3D]/95 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#EBE2E0] mb-4">
            Get in Touch
          </h1>
          <p className="text-[#EBE2E0]/80 text-lg max-w-2xl mx-auto">
            Have a question or project in mind? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${info.color} backdrop-blur-lg
                         rounded-2xl p-6 border border-white/10
                         hover:border-white/20 transition-all duration-300
                         hover:shadow-lg group`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-xl bg-white/10 
                         flex items-center justify-center text-2xl mb-4"
              >
                {info.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[#EBE2E0] mb-2">
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-[#EBE2E0]/80">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full
                       bg-white/10 text-[#EBE2E0] hover:bg-white/20
                       transition-colors duration-300 cursor-pointer"
            >
              <span>{social.icon}</span>
              <span>{social.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.01 }} className="group">
                  <label className="block text-[#EBE2E0] text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10
                             text-[#EBE2E0] placeholder-[#EBE2E0]/50
                             focus:outline-none focus:border-[#990302]
                             hover:border-white/20 transition-colors"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }} className="group">
                  <label className="block text-[#EBE2E0] text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10
                             text-[#EBE2E0] placeholder-[#EBE2E0]/50
                             focus:outline-none focus:border-[#990302]
                             hover:border-white/20 transition-colors"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.01 }} className="group">
                <label className="block text-[#EBE2E0] text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10
                           text-[#EBE2E0] placeholder-[#EBE2E0]/50
                           focus:outline-none focus:border-[#990302]
                           hover:border-white/20 transition-colors"
                  placeholder="How can we help?"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }} className="group">
                <label className="block text-[#EBE2E0] text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10
                           text-[#EBE2E0] placeholder-[#EBE2E0]/50
                           focus:outline-none focus:border-[#990302]
                           hover:border-white/20 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </motion.div>

              {/* Enhanced Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 px-8 py-3 rounded-lg
                           bg-[#990302] text-white font-medium
                           hover:bg-[#990302]/90 transition-colors
                           disabled:opacity-50 disabled:cursor-not-allowed
                           flex items-center justify-center space-x-2`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span>→</span>
                    </>
                  )}
                </motion.button>

                <motion.a
                  href="tel:+1234567890"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-8 py-3 rounded-lg bg-[#EBE2E0]/10
                           text-[#EBE2E0] font-medium hover:bg-[#EBE2E0]/20
                           transition-colors flex items-center justify-center
                           space-x-2 cursor-pointer"
                >
                  <span>📞</span>
                  <span>Call Now</span>
                </motion.a>
              </div>
            </form>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548727506!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043276735!5m2!1sen!2s"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Map Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C3D]/20 to-transparent pointer-events-none"></div>

            {/* Quick Actions */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-4">
              <motion.a
                href="https://goo.gl/maps/xxxxx"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2 rounded-lg bg-white/90
                         text-[#0B2C3D] font-medium hover:bg-white
                         transition-colors text-center cursor-pointer"
              >
                Get Directions
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-[#990302]/90
                         text-white font-medium hover:bg-[#990302]
                         transition-colors cursor-pointer"
              >
                View Larger Map
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
