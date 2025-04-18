'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
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



export default function Home() {
  return (
    <main className="font-sans scroll-smooth">
      <Navbar />

      {/* Hero Section with Text on Left, Image on Right */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white px-6 md:px-16"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-12">

          {/* Left - Text */}
          <motion.div
            className="text-center md:text-left flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-8xl font-bold text-gray-800">
              Hi, I'm Sonali 👋
            </h1>
            <p className="mt-4 text-s text-gray-600">
              Full Stack Developer | Python | React | Next.js
            </p>
            <a
              href="#projects"
              className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              See My Work
            </a>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/me.jpg"
                alt="Sonali"
                width={356}
                height={356}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

        </div>
      </section>

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
            I'm a passionate full stack developer who thrives on building beautiful and functional web applications. With experience in Python, JavaScript, React, and Next.js, I enjoy solving problems and crafting intuitive user experiences. I believe in writing clean, maintainable code and continuously learning new tools and technologies to improve my craft.
          </p>
        </motion.div>
      </section>

     {/* ProjectSEction */ }
      <section id="projects" className="py-20 px-6 md:px-16 bg-gray-50 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Contact Me</h2>
        <p className="mt-4 text-gray-600">
          You can reach me at <a href="mailto:your@email.com" className="text-blue-600">aswalmansi1680@gmail.com</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 text-center text-sm text-gray-500">
        © 2025 Sonali Aswal. All rights reserved.
      </footer>
    </main>
  );
}
