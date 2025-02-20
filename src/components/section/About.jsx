import { motion } from "framer-motion";
import aboutImage from "../../assets/aboutus.jpg";

const About = () => {
  const milestones = [
    {
      year: "2023",
      title: "Innovation Award",
      description: "Recognized for breakthrough tech solutions",
      icon: "🏆",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Extended reach to 30+ countries",
      icon: "🌍",
    },
    {
      year: "2021",
      title: "Tech Excellence",
      description: "100+ successful projects delivered",
      icon: "⚡",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 bg-[#0B2C3D] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#990302]/5 
                      transform -skew-y-12 opacity-20"
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#EBE2E0]/10 
                      rounded-full blur-3xl"
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column - Interactive Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            {/* Experience Counter */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="absolute -top-10 -left-10 z-10"
            >
              <div
                className="bg-[#990302] text-white p-6 rounded-full w-32 h-32
                            flex flex-col items-center justify-center text-center transform rotate-12"
              >
                <span className="text-3xl font-bold">10+</span>
                <span className="text-sm">
                  Years of
                  <br />
                  Excellence
                </span>
              </div>
            </motion.div>

            {/* Timeline Cards */}
            <div className="space-y-8 relative mt-20">
              <div
                className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b 
                            from-[#990302] to-transparent"
              ></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-16"
                >
                  <div
                    className="absolute left-0 w-16 h-16 bg-[#0B2C3D] border-4 border-[#990302] 
                                rounded-full flex items-center justify-center text-2xl"
                  >
                    {milestone.icon}
                  </div>
                  <div
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 
                                hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-[#990302] font-bold">
                      {milestone.year}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2">
                      {milestone.title}
                    </h3>
                    <p className="text-[#EBE2E0]/70 mt-2">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-block"
              >
                <span
                  className="bg-[#990302]/20 text-[#990302] px-4 py-2 rounded-full 
                               text-sm font-medium border border-[#990302]/20"
                >
                  Our Journey
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Pioneering
                <span className="block text-[#990302]">Digital Innovation</span>
              </h2>
            </div>

            {/* Main Content */}
            <div
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border 
                          border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <p className="text-[#EBE2E0]/90 leading-relaxed">
                We're more than just a tech company – we're your partners in
                digital evolution. Our journey is marked by continuous
                innovation, unwavering commitment to excellence, and a passion
                for transforming businesses through technology.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {["250+", "98%", "15+"].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white/5 to-white/0 p-4 rounded-2xl 
                            text-center border border-white/10"
                >
                  <h3 className="text-2xl font-bold text-[#990302]">{stat}</h3>
                  <p className="text-[#EBE2E0]/60 text-sm mt-1">
                    {index === 0
                      ? "Projects"
                      : index === 1
                      ? "Satisfaction"
                      : "Team Members"}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full bg-gradient-to-r from-[#990302] to-[#990302]/80 
                       text-white px-8 py-4 rounded-2xl font-medium shadow-lg 
                       hover:shadow-[#990302]/20 transition-all duration-300 
                       flex items-center justify-center cursor-pointer"
            >
              Discover Our Story
              <motion.span
                className="ml-2 group-hover:translate-x-1 transition-transform"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
