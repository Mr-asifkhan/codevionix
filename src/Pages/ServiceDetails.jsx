import { motion } from "framer-motion";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const serviceData = {
    "web-development": {
      title: "Web Development",
      subtitle: "Custom Solutions for Modern Businesses",
      icon: "💻",
      description:
        "Transform your digital presence with our cutting-edge web development services. We create responsive, scalable, and user-friendly web applications.",
      features: [
        {
          title: "Custom Development",
          icon: "⚡",
          description:
            "Tailored solutions that perfectly match your business needs",
        },
        {
          title: "Responsive Design",
          icon: "📱",
          description:
            "Seamless experience across all devices and screen sizes",
        },
        {
          title: "Performance Optimization",
          icon: "🚀",
          description: "Lightning-fast loading times and optimal performance",
        },
        {
          title: "SEO Integration",
          icon: "🎯",
          description: "Built-in SEO best practices for better visibility",
        },
      ],
      process: [
        {
          title: "Discovery",
          description: "Understanding your needs and project requirements",
          duration: "1-2 weeks",
          icon: "🔍",
        },
        {
          title: "Planning",
          description: "Creating detailed roadmap and technical specifications",
          duration: "1-2 weeks",
          icon: "📋",
        },
        {
          title: "Development",
          description: "Building your solution with agile methodology",
          duration: "4-8 weeks",
          icon: "⚙️",
        },
        {
          title: "Testing",
          description: "Rigorous testing and quality assurance",
          duration: "1-2 weeks",
          icon: "✅",
        },
        {
          title: "Launch",
          description: "Deployment and go-live support",
          duration: "1 week",
          icon: "🚀",
        },
      ],
      technologies: [
        "React",
        "Node.js",
        "Python",
        "AWS",
        "MongoDB",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
      ],
      benefits: [
        {
          title: "Increased Efficiency",
          value: "40%",
          icon: "📈",
        },
        {
          title: "Cost Reduction",
          value: "25%",
          icon: "💰",
        },
        {
          title: "User Satisfaction",
          value: "95%",
          icon: "😊",
        },
        {
          title: "Faster Time-to-Market",
          value: "60%",
          icon: "⚡",
        },
      ],
    },
    "mobile-development": {
      title: "Mobile Development",
      subtitle: "Native and Cross-platform Solutions",
      icon: "📱",
      description:
        "Develop high-quality, native mobile applications for iOS and Android platforms.",
      features: [
        {
          title: "Native Development",
          icon: "💻",
          description: "Building apps specifically for each platform",
        },
        {
          title: "Cross-platform",
          icon: "📱",
          description: "Reusing code across multiple platforms",
        },
        {
          title: "Performance Optimization",
          icon: "🚀",
          description: "Lightning-fast loading times and optimal performance",
        },
        {
          title: "User Experience",
          icon: "😊",
          description: "Focusing on the user experience",
        },
      ],
      process: [
        {
          title: "Discovery",
          description: "Understanding your needs and project requirements",
          duration: "1-2 weeks",
          icon: "🔍",
        },
        {
          title: "Planning",
          description: "Creating detailed roadmap and technical specifications",
          duration: "1-2 weeks",
          icon: "📋",
        },
        {
          title: "Development",
          description: "Building your solution with agile methodology",
          duration: "4-8 weeks",
          icon: "⚙️",
        },
        {
          title: "Testing",
          description: "Rigorous testing and quality assurance",
          duration: "1-2 weeks",
          icon: "✅",
        },
        {
          title: "Launch",
          description: "Deployment and go-live support",
          duration: "1 week",
          icon: "🚀",
        },
      ],
      technologies: [
        "Swift",
        "Kotlin",
        "React Native",
        "Flutter",
        "Xamarin",
        "Ionic",
        "NativeScript",
      ],
      benefits: [
        {
          title: "Increased Efficiency",
          value: "40%",
          icon: "📈",
        },
        {
          title: "Cost Reduction",
          value: "25%",
          icon: "💰",
        },
        {
          title: "User Satisfaction",
          value: "95%",
          icon: "😊",
        },
        {
          title: "Faster Time-to-Market",
          value: "60%",
          icon: "⚡",
        },
      ],
    },
  };

  const service = serviceData[id];

  if (!service) {
    return navigate("/services");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B2C3D] to-[#0B2C3D]/95 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-6xl mb-6 block">{service.icon}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#EBE2E0] mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-[#EBE2E0]/80 max-w-3xl mx-auto">
            {service.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {service.features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10
                       hover:border-white/20 transition-all group"
            >
              <span className="text-3xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-bold text-[#EBE2E0] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#EBE2E0]/60">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-[#EBE2E0] mb-8 text-center">
            Development Process
          </h2>
          <div className="relative">
            <div className="absolute top-0 left-[50%] h-full w-px bg-white/10 md:hidden" />
            <div className="space-y-8 relative">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col md:flex-row items-center md:items-start gap-4"
                >
                  <div
                    className={`w-full md:w-1/2 flex ${
                      index % 2 === 0
                        ? "md:justify-end"
                        : "md:justify-start md:order-2"
                    }`}
                  >
                    <div
                      className="bg-white/5 rounded-2xl p-6 border border-white/10
                                  hover:border-white/20 transition-all max-w-md"
                    >
                      <span className="text-2xl mb-3 block">{step.icon}</span>
                      <h3 className="text-xl font-bold text-[#EBE2E0] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#EBE2E0]/60 mb-2">
                        {step.description}
                      </p>
                      <p className="text-[#990302] text-sm">
                        Duration: {step.duration}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center md:w-8">
                    <div
                      className="w-8 h-8 rounded-full bg-[#990302] flex items-center justify-center
                                  text-white font-bold z-10"
                    >
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {service.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 rounded-2xl p-6 text-center border border-white/10
                       hover:border-white/20 transition-all"
            >
              <span className="text-3xl mb-3 block">{benefit.icon}</span>
              <h3 className="text-2xl font-bold text-[#EBE2E0] mb-1">
                {benefit.value}
              </h3>
              <p className="text-[#EBE2E0]/60 text-sm">{benefit.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-bold text-[#EBE2E0] mb-8">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-[#990302]/20 text-[#EBE2E0]
                         hover:bg-[#990302]/30 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#990302] text-white rounded-xl font-medium
                     hover:bg-[#990302]/90 transition-colors inline-flex items-center gap-2"
          >
            <span>Get Started</span>
            <span>→</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetails;
