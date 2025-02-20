import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Focused",
        "Modern UI/UX",
        "Scalable Architecture",
      ],
      color: "#61DAFB",
      gradient: "from-[#61DAFB]/20 to-transparent",
    },
    {
      id: 2,
      icon: "📱",
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "User-Friendly UI",
        "Offline Support",
        "Push Notifications",
        "Cross-Platform",
        "App Store Ready",
      ],
      color: "#FF6B6B",
      gradient: "from-[#FF6B6B]/20 to-transparent",
    },
    {
      id: 3,
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces that drive engagement.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Design Systems",
      ],
      color: "#4CAF50",
      gradient: "from-[#4CAF50]/20 to-transparent",
    },
    {
      id: 4,
      icon: "🚀",
      title: "Digital Marketing",
      description:
        "Strategic marketing solutions to grow your online presence.",
      features: [
        "Social Media",
        "Content Strategy",
        "Analytics",
        "SEO/SEM",
        "Email Marketing",
      ],
      color: "#FFC107",
      gradient: "from-[#FFC107]/20 to-transparent",
    },
  ];

  return (
    <section className="py-20 bg-[#0B2C3D] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#990302]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#EBE2E0]/5 rounded-full blur-3xl"></div>
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
            className="px-4 py-1.5 bg-[#990302]/10 text-[#990302] rounded-full text-sm font-medium 
                     inline-block mb-3"
          >
            Our Services
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your{" "}
            <span className="text-[#990302]">Digital Presence</span>
          </h2>
          <p className="text-[#EBE2E0]/70 max-w-xl mx-auto text-base">
            We provide comprehensive digital solutions to help your business
            thrive in the modern digital landscape.
          </p>
        </motion.div>

        {/* Services Grid - Modified for 4 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredService(service.title)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`h-full bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10
                         hover:border-white/20 transition-all duration-300 
                         relative overflow-hidden`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Title - Stacked for medium size */}
                  <div className="text-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center 
                               text-2xl mx-auto mb-3"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[#EBE2E0]/70 text-sm mb-4 text-center">
                    {service.description}
                  </p>

                  {/* Features - Compact list */}
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          hoveredService === service.title
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0.7, x: 0 }
                        }
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-[#EBE2E0]/70 text-sm"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="w-1.5 h-1.5 rounded-full mr-2"
                          style={{ backgroundColor: service.color }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <motion.a
                    href={`/services/${service.id}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 px-4 bg-[#990302] hover:bg-[#990302]/90 
                             text-white rounded-lg text-sm font-medium transition-all duration-300
                             flex items-center justify-center group cursor-pointer"
                  >
                    Learn More
                    <motion.svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-r from-[#990302] to-[#990302]/80 
                     text-white rounded-full text-sm font-medium shadow-lg 
                     hover:shadow-[#990302]/20 transition-all duration-300
                     cursor-pointer group inline-block"
          >
            Explore All Services
            <motion.span
              className="ml-2 inline-block group-hover:translate-x-1 transition-transform"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
