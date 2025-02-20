import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about from "../assets/aboutus.jpg";
import { useNavigate } from "react-router-dom";
import Team from "../Pages/Team";

const About = () => {
  const [activeTab, setActiveTab] = useState("vision");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0B2C3D] text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[60vh] bg-gradient-to-r from-[#0B2C3D] to-[#0B2C3D]/80"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Innovating for Tomorrow
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Leading the digital transformation with cutting-edge solutions and
              exceptional expertise
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats Banner */}
      <div className="bg-[#0B2C3D]/90">
        <div className="container mx-auto px-4 py-8 -mt-16 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience", icon: "🏆" },
              { number: "500+", label: "Projects Delivered", icon: "🚀" },
              { number: "100+", label: "Team Members", icon: "👥" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="bg-[#0B2C3D] p-6 rounded-lg text-center border border-[#EBE2E0]/20 hover:border-[#EBE2E0]/40 transition-all"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#EBE2E0]">
                  {stat.number}
                </div>
                <div className="text-[#EBE2E0]/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div data-aos="fade-right" className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#EBE2E0]">
              Who We Are
            </h2>
            <p className="text-lg text-[#EBE2E0]/80 leading-relaxed">
              Founded in 2013, we've grown from a small startup to a leading
              technology solutions provider. Our journey is marked by continuous
              innovation, unwavering commitment to quality, and a passion for
              solving complex business challenges.
            </p>
            <div className="space-y-4">
              {[
                "Industry-leading expertise in digital transformation",
                "Comprehensive solutions tailored to your needs",
                "Dedicated team of certified professionals",
                "Proven track record of successful deliveries",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-[#990302] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#EBE2E0]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div data-aos="fade-left" className="relative">
            <img
              src={about}
              alt="Company Overview"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#990302] text-white p-6 rounded-lg hidden md:block">
              <p className="text-2xl font-bold">10+</p>
              <p>Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vision & Mission Tabs */}
      <div className="bg-[#0B2C3D] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex space-x-4 mb-8">
              {["vision", "mission", "values"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab
                      ? "bg-[#990302] text-white"
                      : "bg-[#0B2C3D] text-[#EBE2E0] border border-[#EBE2E0]/20 hover:border-[#EBE2E0]/40"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="bg-[#0B2C3D] p-8 rounded-lg border border-[#EBE2E0]/20">
              {activeTab === "vision" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-[#EBE2E0]">
                    Our Vision
                  </h3>
                  <p className="text-[#EBE2E0]/80 leading-relaxed">
                    To be the global leader in innovative digital solutions,
                    transforming businesses and enriching lives through
                    technology.
                  </p>
                </motion.div>
              )}
              {activeTab === "mission" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-[#EBE2E0]">
                    Our Mission
                  </h3>
                  <p className="text-[#EBE2E0]/80 leading-relaxed">
                    To deliver exceptional technology solutions that drive
                    growth, efficiency, and innovation for our clients while
                    maintaining the highest standards of quality and service.
                  </p>
                </motion.div>
              )}
              {activeTab === "values" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-[#EBE2E0]">
                    Our Values
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Innovation & Excellence",
                      "Customer Focus",
                      "Integrity & Trust",
                      "Continuous Learning",
                    ].map((value, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span className="text-[#EBE2E0]">{value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Team />

      {/* Contact CTA */}
      <div className="bg-[#0B2C3D] border-t border-[#EBE2E0]/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EBE2E0]">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#EBE2E0]/80">
            Let's discuss how we can help you achieve your digital
            transformation goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-[#990302] text-[#EBE2E0] px-8 py-3 rounded-lg font-medium hover:bg-[#990302]/90 transition-colors cursor-pointer"
          >
            Contact Us Today
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;
