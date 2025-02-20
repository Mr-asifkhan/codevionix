import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaBehance,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdWork,
  MdSchool,
} from "react-icons/md";
import { BsAward, BsGraphUp, BsPeople, BsCalendarCheck } from "react-icons/bs";
import team1 from "../assets/team/t-01.jpg";
import project1 from "../assets/Homepage/p-2.jpg";
import project2 from "../assets/Homepage/p-3.jpg";
import project3 from "../assets/Homepage/p-4.jpg";

const TeamDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("about");

  // Mock data - Replace with your actual data
  const teamMember = {
    id: 1,
    name: "Sarah Johnson",
    role: "Creative Director",
    image: team1,
    coverImage: "https://source.unsplash.com/random/1920x1080?office",
    email: "sarah.johnson@company.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    bio: "Sarah is a seasoned Creative Director with over 10 years of experience in brand strategy and digital innovation. She has led numerous successful projects for Fortune 500 companies.",
    stats: [
      { label: "Years Experience", value: "10+" },
      { label: "Projects", value: "200+" },
      { label: "Awards", value: "15" },
      { label: "Team Members", value: "25" },
    ],
    experience: [
      {
        year: "2020 - Present",
        position: "Creative Director",
        company: "Current Company",
        description: "Leading creative strategy and brand development",
        achievements: [
          "Led rebranding projects for 3 Fortune 500 companies",
          "Grew creative team from 5 to 25 members",
          "Implemented new design system reducing time-to-market by 40%",
        ],
      },
      {
        year: "2015 - 2020",
        position: "Senior Designer",
        company: "Previous Company",
        description: "Managed design team and key client relationships",
        achievements: [
          "Managed $2M+ worth of client projects",
          "Increased client satisfaction rate by 35%",
          "Won 8 industry awards for design excellence",
        ],
      },
    ],
    skills: [
      { name: "Brand Strategy", level: 95 },
      { name: "UI/UX Design", level: 90 },
      { name: "Team Leadership", level: 85 },
      { name: "Project Management", level: 88 },
      { name: "Client Relations", level: 92 },
      { name: "Design Systems", level: 87 },
    ],
    projects: [
      {
        title: "Global Brand Redesign",
        description: "Led complete rebranding for a Fortune 500 company",
        image: project1,
        category: "Branding",
        year: "2022",
      },
      {
        title: "Digital Platform Launch",
        description: "Spearheaded UX strategy for major platform launch",
        image: project2,
        category: "UX Design",
        year: "2021",
      },
      {
        title: "Mobile App Redesign",
        description: "Complete overhaul of flagship mobile application",
        image: project3,
        category: "Mobile",
        year: "2023",
      },
    ],
    certifications: [
      "Google UX Design Professional Certificate",
      "Adobe Certified Expert",
      "Project Management Professional (PMP)",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
      behance: "#",
      dribbble: "#",
    },
  };

  const socialIcons = {
    linkedin: <FaLinkedinIn className="w-4 h-4" />,
    twitter: <FaTwitter className="w-4 h-4" />,
    behance: <FaBehance className="w-4 h-4" />,
    dribbble: <FaDribbble className="w-4 h-4" />,
    github: <FaGithub className="w-4 h-4" />,
  };

  return (
    <div className="min-h-screen bg-[#0B2C3D]">
      {/* Hero Section with Parallax Effect */}
      <motion.div
        className="relative h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <img
            src={teamMember.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2C3D]/50 to-[#0B2C3D]" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center z-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#EBE2E0] mb-4">
              {teamMember.name}
            </h1>
            <p className="text-xl md:text-2xl text-[#EBE2E0]/90">
              {teamMember.role}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-1"
          >
            <div
              className="bg-[#0B2C3D]/80 backdrop-blur-lg rounded-2xl overflow-hidden
                          border border-[#EBE2E0]/10 shadow-xl"
            >
              <div className="p-6">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6">
                  <img
                    src={teamMember.image}
                    alt={teamMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contact Info */}
                <div className="space-y-4 text-[#EBE2E0]/80">
                  <div className="flex items-center gap-3 text-[#EBE2E0]/80">
                    <MdEmail className="w-5 h-5 text-[#990302]" />
                    <span>{teamMember.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#EBE2E0]/80">
                    <MdPhone className="w-5 h-5 text-[#990302]" />
                    <span>{teamMember.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#EBE2E0]/80">
                    <MdLocationOn className="w-5 h-5 text-[#990302]" />
                    <span>{teamMember.location}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {teamMember.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="text-center p-4 rounded-lg bg-[#EBE2E0]/5"
                    >
                      <div className="text-2xl font-bold text-[#990302]">
                        {stat.value}
                      </div>
                      <div className="text-sm text-[#EBE2E0]/60">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-6">
                  {Object.entries(teamMember.social).map(
                    ([platform, link], index) => (
                      <motion.a
                        key={platform}
                        href={link}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-[#EBE2E0]/10 flex items-center justify-center
                               text-[#EBE2E0] hover:bg-[#990302] transition-colors duration-300"
                      >
                        {socialIcons[platform]}
                      </motion.a>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="lg:col-span-2"
          >
            {/* Tabs Navigation */}
            <div
              className="bg-[#0B2C3D]/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6
                          border border-[#EBE2E0]/10 shadow-xl mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-x-auto">
                {[
                  {
                    id: "about",
                    icon: <MdWork className="w-4 h-4 sm:w-5 sm:h-5" />,
                  },
                  {
                    id: "experience",
                    icon: <BsCalendarCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
                  },
                  {
                    id: "skills",
                    icon: <BsGraphUp className="w-4 h-4 sm:w-5 sm:h-5" />,
                  },
                  {
                    id: "projects",
                    icon: <MdSchool className="w-4 h-4 sm:w-5 sm:h-5" />,
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 pb-2 text-base sm:text-lg font-medium capitalize transition-colors whitespace-nowrap
                              ${
                                activeTab === tab.id
                                  ? "text-[#990302] border-b-2 border-[#990302]"
                                  : "text-[#EBE2E0]/60 hover:text-[#EBE2E0]"
                              }`}
                  >
                    {tab.icon}
                    <span className="text-sm sm:text-base">{tab.id}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div
              className="bg-[#0B2C3D]/80 backdrop-blur-lg rounded-2xl p-6
                          border border-[#EBE2E0]/10 shadow-xl"
            >
              {/* About Tab */}
              {activeTab === "about" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="prose prose-lg text-[#EBE2E0]/80 max-w-none">
                    <p>{teamMember.bio}</p>
                  </div>

                  {/* Certifications */}
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-[#EBE2E0] mb-4">
                      Certifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {teamMember.certifications.map((cert, index) => (
                        <motion.div
                          key={cert}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 * index }}
                          className="flex items-center gap-3 p-4 rounded-lg bg-[#EBE2E0]/5"
                        >
                          <svg
                            className="w-6 h-6 text-[#990302]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          <span className="text-[#EBE2E0]/80">{cert}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Experience Tab */}
              {activeTab === "experience" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {teamMember.experience.map((exp, index) => (
                    <motion.div
                      key={exp.year}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="relative pl-8 border-l-2 border-[#EBE2E0]/10"
                    >
                      <span className="text-[#990302] font-medium">
                        {exp.year}
                      </span>
                      <h3 className="text-xl font-bold text-[#EBE2E0] mt-2">
                        {exp.position}
                      </h3>
                      <p className="text-[#EBE2E0]/60 mt-1">{exp.company}</p>
                      <p className="text-[#EBE2E0]/80 mt-2">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="mt-4 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-center gap-2 text-[#EBE2E0]/70"
                          >
                            <svg
                              className="w-4 h-4 text-[#990302]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Skills Tab */}
              {activeTab === "skills" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {teamMember.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between text-[#EBE2E0]">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[#EBE2E0]/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="h-full bg-[#990302] rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Projects Tab */}
              {activeTab === "projects" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {teamMember.projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="group relative overflow-hidden rounded-xl"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500
                                 group-hover:scale-110"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#0B2C3D] via-[#0B2C3D]/50 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="absolute bottom-0 p-6">
                          <div className="text-sm text-[#990302] font-medium mb-2">
                            {project.category} • {project.year}
                          </div>
                          <h3 className="text-xl font-bold text-[#EBE2E0]">
                            {project.title}
                          </h3>
                          <p className="text-[#EBE2E0]/80 mt-2">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
