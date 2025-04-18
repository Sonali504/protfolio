'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from 'react-icons/si';
import Navbar from '../components/Navbar';

const projects = [
  {
    title: 'Supplements',
    description:
      'Our supplements are carefully crafted to support your wellness journey, offering a wide range of products designed to improve overall health, enhance performance, and promote recovery. Whether you\'re looking to boost your energy, build muscle, or improve your immune system, we have a supplement tailored to your needs.',
    link: 'https://supplements-gmq6.vercel.app/',
  },
  {
    title: 'Mositiq',
    description:
      'Mositiq is a sleek and responsive e-commerce website specializing in high-quality lip care products, including lip gloss, balms, and tints. Built using React and Firebase, the platform offers a smooth and user-friendly shopping experience..',
    link: 'https://moistiq-lipglow.vercel.app/',
  },
  {
    title: 'Tour- Travel',
    description:
      'Tour-Travel is a full-stack blog application designed to share and discover travel experiences. Built with a robust back-end and a sleek front-end, this platform allows users to log in, write, and share travel blogs with the world. The app supports markdown for easy and rich content creation.',
    link: '#',
  },
];

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-500" /> },
  { name: 'React.js', icon: <FaReact className="text-4xl text-cyan-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-gray-900" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-sky-400" /> },
  { name: 'Python', icon: <FaPython className="text-4xl text-blue-500" /> },
  { name: 'Git & GitHub', icon: <FaGitAlt className="text-4xl text-red-500" /> },
];


export default function Home() {
  return (
    <main className="font-sans scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 md:px-16"
      >
        <div className="flex flex-col items-center justify-center w-full max-w-4xl gap-10 text-center">

          {/* Top - Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/me.jpg"
                alt="Sonali"
                width={356}
                height={356}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Bottom - Text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold text-gray-800">
              {`Hi, I'm Sonali `}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Front End Developer 
            </p>
            <a
              href="#projects"
              className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              See My Work
            </a>
          </motion.div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-16 bg-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            {`I'm a passionate full stack developer who thrives on building beautiful and functional web applications. With experience in Python, JavaScript, React, and Next.js, I enjoy solving problems and crafting intuitive user experiences. I believe in writing clean, maintainable code and continuously learning new tools and technologies to improve my craft.`}
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-16 bg-gray-50 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="mt-3 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 mt-4 inline-block hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/*Skills */}
      <section id="skills" className="py-20 px-6 bg-white text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 uppercase"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <motion.p
          className="mt-4 max-w-xl mx-auto text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Technologies I use to build high-quality, fast, and modern web applications.
        </motion.p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-50 hover:bg-white p-6 rounded-xl shadow-md border border-gray-100 transition duration-300 flex flex-col items-center justify-center min-h-[150px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <span className="mt-3 text-gray-800 font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 uppercase">Contact Me</h2>
        <p className="mt-4 text-gray-600">
          You can reach me at{' '}
          <a href="mailto:aswalmansi1680@gmail.com" className="text-blue-600">
            aswalmansi1680@gmail.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 text-center text-sm text-gray-500">
        © 2025 Sonali Aswal. All rights reserved.
      </footer>
    </main>
  );
}
