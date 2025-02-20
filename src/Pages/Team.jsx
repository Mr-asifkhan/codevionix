import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import team1 from "../assets/team/t-01.jpg";
import team2 from "../assets/team/t-02.jpg";
import team3 from "../assets/team/t-03.jpg";
import team4 from "../assets/team/t-01.jpg";

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const navigate = useNavigate();

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Creative Director",
      image: team1,
      bio: "10+ years of experience in creative direction and brand strategy",
      skills: ["Brand Strategy", "UI/UX", "Team Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "David Chen",
      role: "Lead Developer",
      image: team2,
      bio: "Full-stack developer with expertise in React and Node.js",
      skills: ["React", "Node.js", "AWS"],
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "UX Designer",
      image: team3,
      bio: "Passionate about creating intuitive and beautiful user experiences",
      skills: ["UI Design", "User Research", "Prototyping"],
      social: {
        linkedin: "#",
        behance: "#",
      },
    },
    {
      id: 4,
      name: "Michael Torres",
      role: "Product Manager",
      image: team4,
      bio: "Strategic product leader with a focus on user-centric solutions",
      skills: ["Strategy", "Agile", "Analytics"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0B2C3D] py-16 px-4 sm:px-6 lg:px-8">
      {/* Animated Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EBE2E0] mb-6"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Expert Team
        </motion.h1>
        <motion.p
          className="text-[#EBE2E0]/80 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Passionate professionals dedicated to innovation and excellence
        </motion.p>
      </motion.div>

      {/* Team Grid with Medium-sized Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
            className="relative group"
          >
            {/* Medium-sized Card Design */}
            <div
              className="h-full bg-gradient-to-b from-[#0B2C3D] to-[#0B2C3D]/95 
                          backdrop-blur-sm rounded-xl overflow-hidden
                          border border-[#EBE2E0]/10 hover:border-[#990302]/50 
                          transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Adjusted Image Container Size */}
              <div className="relative overflow-hidden">
                <div className="h-[200px]">
                  {" "}
                  {/* Reduced height */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700
                             group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t 
                                from-[#0B2C3D] via-[#0B2C3D]/50 to-transparent 
                                opacity-0 group-hover:opacity-100 
                                transition-all duration-500"
                  />
                </div>

                {/* Adjusted Social Links Size */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 
                            group-hover:opacity-100 transition-all duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="flex gap-3">
                    {Object.entries(member.social).map(([platform, link]) => (
                      <motion.a
                        key={platform}
                        href={link}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 rounded-full bg-[#EBE2E0]/20 
                                 backdrop-blur-md flex items-center justify-center 
                                 text-white hover:bg-[#990302] 
                                 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Social Icons - Adjusted Size */}
                        {platform === "linkedin" && (
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        )}
                        {platform === "github" && (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        )}
                        {platform === "behance" && (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                          </svg>
                        )}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Adjusted Content Padding and Spacing */}
              <div className="p-4">
                <motion.h3
                  className="text-lg font-bold text-[#EBE2E0] mb-1 hover:text-[#990302] cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-[#EBE2E0]/60 text-sm mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 * index }}
                >
                  {member.role}
                </motion.p>
                <motion.p
                  className="text-[#EBE2E0]/80 text-sm mb-3 line-clamp-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 * index }}
                >
                  {member.bio}
                </motion.p>

                {/* Adjusted Skills Tags Size */}
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 * index + 0.1 * skillIndex }}
                      className="px-2 py-0.5 rounded-full text-xs bg-[#EBE2E0]/10
                               text-[#EBE2E0]/80 border border-[#EBE2E0]/10
                               hover:border-[#990302]/50 transition-colors duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* View Profile Button */}
                <motion.button
                  onClick={() => navigate(`/team/${member.id}`)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 mt-3 sm:mt-4 
                           text-xs sm:text-sm font-medium text-[#EBE2E0] bg-[#990302]/90 
                           rounded-md sm:rounded-lg hover:bg-[#990302] transition-colors duration-300 
                           absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 cursor-pointer
                           w-auto min-w-[60px] sm:min-w-[70px] justify-center"
                >
                  <span className="hidden sm:inline">View</span>
                  <span className="sm:hidden">View</span>
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-20 text-center"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/careers"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
                   bg-[#990302] text-[#EBE2E0] hover:bg-[#990302]/90
                   transition-all duration-300 shadow-lg hover:shadow-2xl"
        >
          <span className="text-lg font-semibold">Join Our Team</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Team;
