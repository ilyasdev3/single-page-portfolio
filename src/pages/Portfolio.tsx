import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Download,
  Github,
  ExternalLink,
  Menu,
  X,
  User,
  Code,
  Briefcase,
} from "lucide-react";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      company: "Tech Innovators",
      role: "Senior Full Stack Developer",
      duration: "2020 - Present",
    },
    {
      company: "Web Solutions Inc.",
      role: "Full Stack Developer",
      duration: "2018 - 2020",
    },
    {
      company: "StartUp Co.",
      role: "Junior Developer",
      duration: "2016 - 2018",
    },
  ];

  const projects = [
    {
      name: "E-commerce Platform",
      description: "Built a full-featured e-commerce site using MERN stack",
      github: "#",
      live: "#",
    },
    {
      name: "Task Management App",
      description: "Developed a real-time task management application",
      github: "#",
      live: "#",
    },
    {
      name: "Social Media Dashboard",
      description: "Created a responsive dashboard for social media analytics",
      github: "#",
      live: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed w-full z-50 ">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a className="font-bold text-2xl text-blue-600" href="#">
              Ilyas Khan
            </a>
            <div className="hidden md:flex space-x-6">
              {["Home", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-lg"
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
            {["Home", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 px-4 text-sm hover:bg-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative">
          <div className="md:w-1/2 text-left mb-8 md:mb-0 z-10">
            <h1
              className={`text-4xl md:text-6xl font-bold mb-4 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
              } transition-all duration-1000 ease-out`}
            >
              Ilyas Khan
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } transition-all duration-1000 delay-300 ease-out`}
            >
              Full Stack MERN Developer
            </p>
            <p className="text-sm text-white leading-relaxed">
              I'm a passionate Full Stack MERN Developer with over 2 years of
              experience in building scalable web applications. My expertise
              lies in creating robust backends with Node.js and Express,
              designing efficient MongoDB databases, and crafting interactive
              front-ends using React.
            </p>
            <a
              href="#"
              className="mt-5 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold inline-flex items-center hover:bg-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center items-center z-10">
            <div
              className={`w-64 h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden transform ${
                isVisible ? "scale-100 rotate-0" : "scale-50 rotate-180"
              } transition-all duration-1000 ease-out`}
            >
              <img
                src="https://res.cloudinary.com/doo90wesa/image/upload/v1725901664/ir3v7fzigjqsh82dswud.jpg"
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-500 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-blue-700 rounded-full opacity-50 animate-pulse"></div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600 transform hover:-translate-y-2"
              >
                <h3 className="font-bold text-xl mb-2 text-blue-600">
                  {exp.company}
                </h3>
                <p className="text-gray-700 font-semibold mb-2">{exp.role}</p>
                <p className="text-gray-600">{exp.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="font-bold text-xl mb-2 text-blue-600">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="text-blue-600 hover:text-blue-800 inline-flex items-center bg-blue-100 px-3 py-1 rounded-full transition-colors duration-300"
                  >
                    <Github className="mr-1" size={16} /> GitHub
                  </a>
                  <a
                    href={project.live}
                    className="text-green-600 hover:text-green-800 inline-flex items-center bg-green-100 px-3 py-1 rounded-full transition-colors duration-300"
                  >
                    <ExternalLink className="mr-1" size={16} /> Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-600 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4">Email: ilyasdev3@gmail.com</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-200 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
