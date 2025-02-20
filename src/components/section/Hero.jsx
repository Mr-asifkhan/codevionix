import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImage from "../../assets/heroimg.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-[#0B2C3D] to-[#0B2C3D]/95 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/path-to-your-tech-pattern.png')] opacity-5" />

        {/* Animated Grid */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[linear-gradient(to_right,#EBE2E0_1px,transparent_1px),linear-gradient(to_bottom,#EBE2E0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.03]" />
        </div>

        {/* Glowing Orbs */}
        <motion.div
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#990302]/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -0.05,
            y: mousePosition.y * -0.05,
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#EBE2E0]/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-8">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-3 py-1.5 rounded-full 
                       bg-gradient-to-r from-[#990302]/20 to-transparent"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#990302]" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#990302]" />
              </span>
              <span className="text-[#EBE2E0] text-sm">
                Next-Gen IT Solutions
              </span>
            </motion.div>

            {/* Main Content */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              >
                <span className="block text-[#EBE2E0] mb-2">Excellent IT</span>
                <span className="block text-[#990302] mb-2">Solutions</span>
                <span className="block text-[#EBE2E0]">For Your Success</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[#EBE2E0]/80 text-base sm:text-lg"
              >
                Transform your business with cutting-edge technology solutions.
                We deliver innovation that drives growth and ensures lasting
                success.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-3 bg-[#990302] rounded-lg overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#990302] via-[#EBE2E0]/20 to-[#990302] 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                />
                <span className="relative text-[#EBE2E0] font-medium cursor-pointer">
                  Get Started
                </span>
              </motion.button>
            </div>
          </div>

          {/* Right Content - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* 3D Element Container */}
              <motion.div
                animate={{
                  rotateY: [0, 10, 0],
                  rotateX: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-full h-full"
              >
                {/* Your 3D IT-related image/illustration */}
                <div
                  className="relative w-full h-full rounded-2xl overflow-hidden 
                            bg-gradient-to-br from-[#990302] to-[#990302]/80 p-1"
                >
                  <div className="w-full h-full bg-[#0B2C3D] rounded-xl overflow-hidden">
                    <img
                      src={heroImage}
                      alt="IT Solutions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Tech Elements */}
                {[...Array(5)].map((_, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [-20, 20, -20],
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    }}
                    className="absolute w-8 h-8 bg-[#990302]/30 backdrop-blur-sm rounded-lg"
                    style={{
                      top: `${20 + index * 15}%`,
                      left: index % 2 === 0 ? "10%" : "80%",
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
