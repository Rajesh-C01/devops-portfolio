import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaDocker,
  FaAws,
  FaLinux,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaJenkins,
  FaDownload,
} from "react-icons/fa";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const background = dark
    ? "linear-gradient(135deg, #020617, #0f172a, #1e3a8a)"
    : "linear-gradient(135deg, #f1f5f9, #e2e8f0, #cbd5f5)";

  const textColor = dark ? "white" : "#0f172a";

  // ✅ Footer style inside App (correct place)
  const footerStyle = {
    background: dark ? "#020617" : "#e2e8f0",
    color: dark ? "white" : "#0f172a",
    padding: "60px 20px",
    textAlign: "center",
  };

  return (
    <div style={{ ...container, background, color: textColor }}>
      {/* Navbar */}
      <nav
        style={{
          ...nav,
          ...(scrolled ? navScrolled : {}),
          background: dark
            ? "rgba(2,6,23,0.8)"
            : "rgba(255,255,255,0.9)",
        }}
      >
        <h2 style={logo}>
          Rajesh<span style={logoAccent}>Dev</span>
        </h2>

        <div style={navLinks}>
          <a href="#skills" style={link}>Skills</a>
          <a href="#projects" style={link}>Projects</a>
          <a href="#contact" style={link}>Contact</a>
          <a href="#footer" style={link}>Footer</a>

          <button onClick={() => setDark(!dark)} style={toggleBtn}>
            {dark ? "☀" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={hero}>
        <div style={circleOne}></div>
        <div style={circleTwo}></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={heroCard}
        >
          <img src="/profile.jpg" alt="profile" style={image} />

          <h1 style={{ fontSize: "clamp(26px, 5vw,40px)" }}>
            Rajesh Chakali
          </h1>

          <TypeAnimation
            sequence={[
              "DevOps Engineer",
              1500,
              "AWS Cloud Enthusiast",
              1500,
              "Docker & CI/CD Learner",
              1500,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            style={{ color: "#38bdf8" }}
          />

          <p style={heroText}>
            I build, containerize, and deploy applications using
            Docker, AWS, and CI/CD pipelines.
          </p>

          <div style={{ marginTop: "20px" }}>
            <a href="/resume.pdf" style={btn}>
              <FaDownload /> Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" style={section}>
        <h2>Skills</h2>
        <div style={skills}>
          <Skill icon={<FaAws />} name="AWS" />
          <Skill icon={<FaDocker />} name="Docker" />
          <Skill icon={<FaLinux />} name="Linux" />
          <Skill icon={<FaGitAlt />} name="Git" />
          <Skill icon={<FaGithub />} name="GitHub" />
          <Skill icon={<FaJenkins />} name="Jenkins" />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={section}>
        <h2>Projects</h2>
        <div style={projects}>
          <Project
            title="Dockerized Portfolio"
            desc="React portfolio deployed on AWS EC2."
            github="https://github.com/Rajesh-C01"
            live="#"
          />

          <Project
            title="CI/CD Pipeline"
            desc="Automated deployment using GitHub Actions."
            github="https://github.com/Rajesh-C01"
            live="#"
          />

          <Project
            title="AWS EC2 Server"
            desc="Configured and deployed web server on EC2."
            github="https://github.com/Rajesh-C01"
            live="#"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={section}>
        <h2>Contact</h2>
        <p>📧 rajeshchakali01@gmail.com</p>
        <p>📞 +91 9618794302</p>
      </section>

      {/* Footer */}
      <footer id="footer" style={footerStyle}>
        <div style={footerContent}>
          <h3>Rajesh Chakali</h3>
          <p>DevOps & Cloud Engineer</p>

          <div style={socials}>
            <a
              href="https://github.com/Rajesh-C01"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIcon}
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/rajesh-chakali"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIcon}
            >
              <FaLinkedin />
            </a>
          </div>

          <p style={copyright}>
            © 2026 Rajesh Chakali. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* Components */

function Skill({ icon, name }) {
  return (
    <motion.div style={skill} whileHover={{ scale: 1.1 }}>
      <div style={{ fontSize: "26px" }}>{icon}</div>
      <p>{name}</p>
    </motion.div>
  );
}

function Project({ title, desc, github, live }) {
  return (
    <motion.div style={project} whileHover={{ scale: 1.05 }}>
      <h3>{title}</h3>
      <p>{desc}</p>

      <div style={{ marginTop: "15px", display: "flex", gap: "10px", justifyContent: "center" }}>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" style={btn}>
            <FaGithub /> Code
          </a>
        )}

        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" style={btn}>
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

/* Styles */

const container = {
  fontFamily: "Arial, sans-serif",
  minHeight: "100vh",
  transition: "all 0.3s ease",
  scrollBehavior: "smooth",
};

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 30px",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  backdropFilter: "blur(14px)",
  flexWrap: "wrap",
};

const navScrolled = {
  padding: "10px 60px",
};

const navLinks = {
  display: "flex",
  gap: "20px",
  alignItems: "center",
  flexWrap: "wrap",
};

const link = {
  textDecoration: "none",
  color: "inherit",
};

const toggleBtn = {
  padding: "6px 10px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.2)",
  cursor: "pointer",
  background: "transparent",
  color: "inherit",
};

const logo = {
  fontSize: "22px",
  fontWeight: "bold",
};

const logoAccent = {
  color: "#38bdf8",
};

const hero = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  padding: "40px 20px",
  position: "relative",
};

const heroCard = {
  background: "rgba(255,255,255,0.08)",
  padding: "30px 20px",
  borderRadius: "20px",
  textAlign: "center",
  maxWidth: "400px",
  width: "90%",
};

const image = {
  width: "120px",
  borderRadius: "50%",
  marginBottom: "15px",
  border: "4px solid #38bdf8",
};

const heroText = {
  margin: "15px auto",
};

const section = {
  padding: "80px 20px",
  textAlign: "center",
};

const skills = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
  padding: "0 20px",
};

const skill = {
  background: "rgba(255,255,255,0.08)",
  padding: "15px 25px",
  borderRadius: "12px",
};

const projects = {
  display: "flex",
  justifyContent: "center",
  gap: "25px",
  flexWrap: "wrap",
  padding: "0 20px",
};

const project = {
  background: "rgba(255,255,255,0.08)",
  padding: "25px",
  borderRadius: "14px",
  width: "270px",
};

const btn = {
  background: "#3b82f6",
  color: "white",
  padding: "10px 20px",
  margin: "5px",
  borderRadius: "8px",
  textDecoration: "none",
};

const footerContent = {
  maxWidth: "600px",
  margin: "auto",
};

const socials = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  margin: "15px 0",
};

const socialIcon = {
  color: "#38bdf8",
  fontSize: "22px",
};

const copyright = {
  fontSize: "14px",
  color: "#94a3b8",
};

const circleOne = {
  position: "absolute",
  width: "300px",
  height: "300px",
  background: "#3b82f6",
  opacity: 0.2,
  borderRadius: "50%",
  top: "-80px",
  left: "-80px",
};

const circleTwo = {
  position: "absolute",
  width: "250px",
  height: "250px",
  background: "#22c55e",
  opacity: 0.2,
  borderRadius: "50%",
  bottom: "-80px",
  right: "-80px",
};

export default App;