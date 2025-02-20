import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Web Development",
      description:
        "Building modern, responsive websites with cutting-edge technologies.",
      features: ["React", "Next.js", "Node.js", "MongoDB"],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 2,
      icon: "📱",
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver.",
      features: ["React Native", "Flutter", "iOS", "Android"],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 3,
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love.",
      features: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      id: 4,
      icon: "🚀",
      title: "Digital Marketing",
      description:
        "Driving growth through strategic digital marketing solutions.",
      features: ["SEO", "SEM", "Social Media", "Content"],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 5,
      icon: "🎯",
      title: "Brand Strategy",
      description:
        "Developing powerful brand identities that resonate with your audience.",
      features: ["Brand Identity", "Strategy", "Guidelines", "Voice"],
      gradient: "from-yellow-500/20 to-amber-500/20",
    },
    {
      id: 6,
      icon: "🔒",
      title: "Cyber Security",
      description:
        "Protecting your digital assets with advanced security solutions.",
      features: [
        "Penetration Testing",
        "Security Audit",
        "Encryption",
        "Monitoring",
      ],
      gradient: "from-red-500/20 to-rose-500/20",
    },
    {
      id: 7,
      icon: "🤖",
      title: "AI Solutions",
      description:
        "Implementing cutting-edge AI and machine learning solutions.",
      features: ["Machine Learning", "NLP", "Computer Vision", "Analytics"],
      gradient: "from-indigo-500/20 to-violet-500/20",
    },
    {
      id: 8,
      icon: "☁️",
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions.",
      features: ["AWS", "Azure", "DevOps", "Microservices"],
      gradient: "from-sky-500/20 to-blue-500/20",
    },
  ];

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#0B2C3D] to-[#0B2C3D]/95"
      ref={containerRef}
    >
      {/* Floating Elements Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#990302]/10 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
              opacity: [0.5, 0.8],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <br />
      <br />
      {/* Header Section */}
      <motion.div
        style={{ y: headerY, opacity: headerOpacity }}
        className="relative z-10 pt-20 pb-32 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-[#EBE2E0] mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#EBE2E0]/80"
          >
            Transforming ideas into digital reality with cutting-edge solutions
          </motion.p>
        </div>
      </motion.div>

      {/* Services Grid with Mobile Slider */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 pb-20">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8 hidden">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 scrollbar-hide">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="snap-center min-w-[280px] w-[85vw] flex-shrink-0"
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative h-full"
  >
    <div
      className={`
        relative overflow-hidden rounded-2xl p-6 h-full
        bg-gradient-to-br ${service.gradient}
        backdrop-blur-lg border border-[#EBE2E0]/10
        hover:border-[#EBE2E0]/20 transition-all duration-300
        hover:shadow-lg
      `}
    >
      {/* Service Icon */}
      <div
        className="w-16 h-16 rounded-xl bg-[#EBE2E0]/10 
                   flex items-center justify-center text-3xl mb-6"
      >
        {service.icon}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-[#EBE2E0] mb-4">
        {service.title}
      </h3>

      <p className="text-[#EBE2E0]/80 mb-6">{service.description}</p>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-6">
        {service.features.map((feature, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full text-sm
                     bg-[#EBE2E0]/10 text-[#EBE2E0]/90"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Button */}
      <button
        className="flex items-center space-x-2 text-[#990302] 
                 font-medium bg-[#EBE2E0] px-4 py-2 rounded-lg
                 hover:bg-[#EBE2E0]/90 transition-colors duration-300
                 cursor-pointer"
      >
        <span>Learn More</span>
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          →
        </span>
      </button>
    </div>
  </motion.div>
);

export default Services;
