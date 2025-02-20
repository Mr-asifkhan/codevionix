import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "/path-to-image1.jpg",
      content:
        "Working with this team has been transformative for our business. Their innovative solutions and attention to detail exceeded our expectations.",
      rating: 5,
      tags: ["Web Development", "UI/UX Design"],
      bgColor: "from-blue-500/20 to-purple-500/20",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      image: "/path-to-image2.jpg",
      content:
        "The level of expertise and professionalism is outstanding. They delivered our project on time and with exceptional quality.",
      rating: 5,
      tags: ["Mobile Apps", "Cloud Solutions"],
      bgColor: "from-emerald-500/20 to-teal-500/20",
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Marketing Director, GrowthX",
      image: "/path-to-image3.jpg",
      content:
        "Their creative approach and technical skills helped us achieve our goals. The results have been remarkable.",
      rating: 5,
      tags: ["Digital Marketing", "Branding"],
      bgColor: "from-rose-500/20 to-orange-500/20",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-24 bg-[#0B2C3D] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(white,transparent_70%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#990302]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EBE2E0]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            className="px-4 py-2 bg-[#990302]/10 text-[#990302] rounded-full text-sm font-medium 
                     inline-block mb-4"
          >
            Client Testimonials
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our <span className="text-[#990302]">Clients</span> Say
          </h2>
          <p className="text-[#EBE2E0]/70 max-w-2xl mx-auto text-base">
            Discover why businesses trust us with their digital transformation
            journey.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: 100 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 * direction }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative"
            >
              <div
                className={`bg-gradient-to-br ${testimonials[currentIndex].bgColor} 
                           backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  {/* Left Column - Image and Info */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#990302] rounded-full 
                                 flex items-center justify-center text-white text-xl"
                      >
                        "
                      </motion.div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-white font-bold text-lg">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-[#EBE2E0]/70 text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {testimonials[currentIndex].tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/5 rounded-full text-xs text-[#EBE2E0]/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Content */}
                  <div className="flex-1">
                    {/* Rating */}
                    <div className="flex justify-center md:justify-start space-x-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <motion.svg
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="w-5 h-5 text-[#990302]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        )
                      )}
                    </div>

                    {/* Testimonial Content */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[#EBE2E0] text-lg md:text-xl leading-relaxed mb-6 text-center md:text-left"
                    >
                      "{testimonials[currentIndex].content}"
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Simplified with only dots */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex space-x-3">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-10 bg-[#990302]"
                      : "w-3 bg-[#990302]/20 hover:bg-[#990302]/40"
                  } h-3 rounded-full cursor-pointer`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
