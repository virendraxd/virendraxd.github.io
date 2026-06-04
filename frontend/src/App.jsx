import { useState, useEffect } from 'react'
import './App.css'
import heroImage from './assets/virendra_crossing_arms_main_nobg_full.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons()
    }

    // 2. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal')
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight
      revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top
        const elementVisible = 100
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll()

    // 5. Terminal Typing Effect
    const terminalLines = document.querySelectorAll('.terminal-body code span')
    terminalLines.forEach((line, index) => {
      line.style.opacity = '0'
      line.style.transform = 'translateX(-10px)'
      line.style.transition = 'opacity 0.3s ease, transform 0.3s ease'

      setTimeout(() => {
        line.style.opacity = '1'
        line.style.transform = 'translateX(0)'
      }, 300 + (index * 80))
    })

    return () => {
      window.removeEventListener('scroll', revealOnScroll)
    }
  }, [])

  // Re-run lucide when menu opens/closes if needed
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
    // Toggle body scroll
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      {/* <!-- Background Glows --> */}
      <div className="glow-bg" aria-hidden="true"></div>
      
      {/* Side Menu Overlay */}
      <div 
        className={`sidemenu-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>

      <nav id="main-nav" aria-label="Main Navigation">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>Virendra<span>.</span></a>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#projects" onClick={closeMenu}>Work</a></li>
            <li><a href="#skills" onClick={closeMenu}>Stack</a></li>
            <li><a href="#contact" className="nav-cta" onClick={closeMenu}>Let's Talk</a></li>
          </ul>
          <button 
            className="menu-toggle" 
            id="mobile-menu" 
            aria-label="Toggle Menu" 
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <i data-lucide={isMenuOpen ? "x" : "menu"}></i>
          </button>
        </div>
      </nav>

      <main>
        {/* <!-- ===== HERO SECTION ===== --> */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="hero-badge reveal">
              <span className="pulse" aria-hidden="true"></span> Available for Freelance / Internship
            </div>
            <h1 className="reveal">I build modern web apps and <span>automation tools</span>.</h1>
            <p className="hero-sub reveal">Engineering scalable solutions for the digital age. I specialize in crafting
              modern web applications, intuitive user experiences and digital products.</p>

            <div className="hero-actions reveal">
              <a href="#projects" className="btn btn-primary">View Projects <i data-lucide="arrow-right"
                aria-hidden="true"></i></a>
              <a href="#contact" className="btn btn-secondary">Hire Me</a>
            </div>

            <div className="hero-stats reveal">
              <div className="stat-item">
                <span className="count">10+</span>
                <span className="label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="count">510+</span>
                <span className="label">Downloads on Modrinth</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="terminal-card">
              <div className="terminal-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="terminal-title">developer.js</span>
              </div>
              <div className="terminal-body">
                <pre>
                  <code>
                    <span className="keyword">const</span> <span className="variable">developer</span> = {"{"}
                    <br />
                    &nbsp;&nbsp;name: <span className="string">'Virendra Singh'</span>,
                    <br />
                    &nbsp;&nbsp;role: <span className="string">'Full-Stack Engineer'</span>,
                    <br />
                    &nbsp;&nbsp;focus: [<span className="string">'Webapps'</span>, <span className="string">'Automation'</span>],
                    <br />
                    &nbsp;&nbsp;status: <span className="string">'Ready to deliver results'</span>
                    <br />
                    {"};"}
                    <br /><br />
                    <span className="keyword">function</span> <span className="function">solveProblem</span>(req) {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="keyword">return</span> <span className="variable">virendra</span>.<span className="function">build</span>(req);
                    <br />
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ===== ABOUT SECTION ===== --> */}
        <section className="about" id="about">
          <div className="about-content reveal">
            <div className="section-header" style={{textAlign: "left", marginBottom: "30px"}}>
              <h2 className="title">About <span>Me</span></h2>
            </div>
            <p>Hi, I'm Virendra Singh Shakyawar, a web developer focused on building modern websites and web applications.</p>
            <p>I create responsive, user-friendly and visually polished digital experiences for students, startups
              and small businesses. With a strong interest in UI/UX and product development, I enjoy turning ideas
              into practical solutions that are both functional and engaging.</p>
            <p>Currently, I'm expanding my skills in backend development, web technologies and digital product
              creation while working on projects that deliver real value and meaningful user experiences.</p>
          </div>
          <div className="about-img reveal">
            <img src={heroImage} alt="Virendra Singh" />
          </div>
        </section>

        {/* <!-- ===== SERVICES SECTION ===== --> */}
        <section className="services" id="services">
          <div className="section-header reveal">
            <h2 className="title">Professional <span>Services</span></h2>
            <p>Tailored solutions to help your business grow and scale.</p>
          </div>

          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-icon"><i data-lucide="globe" aria-hidden="true"></i></div>
              <h3>Web Applications</h3>
              <p>Custom web applications built for businesses, startups and creators with modern, responsive
                interfaces.</p>
            </div>

            <div className="service-card reveal">
              <div className="service-icon"><i data-lucide="briefcase" aria-hidden="true"></i></div>
              <h3>Portfolio Websites</h3>
              <p>Professional portfolio websites for students, creators and professionals looking to
                strengthen their online presence.</p>
            </div>

            <div className="service-card reveal">
              <div className="service-icon"><i data-lucide="rocket" aria-hidden="true"></i></div>
              <h3>Landing Pages</h3>
              <p>High-converting landing pages for startups, products, events and personal brands.</p>
            </div>
          </div>
        </section>

        {/* <!-- ===== CURRENTLY BUILDING ===== --> */}
        <section className="currently-building reveal">
          <div className="building-card">
            <div className="building-info">
              <div className="building-label">CURRENTLY BUILDING</div>
              <h3>KnightTechLabs's Products</h3>
              <p>Building focused tools for students and professionals that make work faster and easier.</p>
            </div>
            <div className="building-progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                aria-valuemax="100">
                <div className="progress-fill" style={{width: "85%"}}></div>
              </div>
              <span>Ongoing</span>
            </div>
          </div>
        </section>

        {/* <!-- ===== PROJECTS SECTION ===== --> */}
        <section className="projects" id="projects">
          <div className="section-header reveal">
            <h2 className="title">Featured <span>Work</span></h2>
            <p>A selection of top projects that showcase my technical excellence and problem-solving skills.</p>
          </div>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card reveal">
              <div className="project-content">
                <div className="project-tags">
                  <span>Web App</span>
                  <span>Utilities</span>
                </div>
                <h3>KnightTechLabs</h3>
                <p>A digital laboratory building smart solutions and utilities for students and professionals.
                </p>
                <div className="project-links">
                  <a href="https://knighttechlabs.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <i data-lucide="external-link" aria-hidden="true"></i> Live Demo
                  </a>
                  <a href="https://github.com/virendraxd/knighttechlabs" target="_blank"
                    rel="noopener noreferrer">
                    <i data-lucide="code" aria-hidden="true"></i> Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card reveal">
              <div className="project-content">
                <div className="project-tags">
                  <span>React</span>
                  <span>Web App</span>
                  <span>Quiz</span>
                </div>
                <h3>Interactive Quiz App</h3>
                <p>A responsive quiz application featuring score, review system and dynamic question
                  fetching.
                </p>

                <div className="project-links">
                  <a href="https://quiz-app-react-theta-wine.vercel.app/" target="_blank"
                    rel="noopener noreferrer">
                    <i data-lucide="external-link" aria-hidden="true"></i> Live Demo
                  </a>
                  <a href="https://github.com/virendraxd/quiz-app-react" target="_blank"
                    rel="noopener noreferrer">
                    <i data-lucide="code" aria-hidden="true"></i> Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card reveal">
              <div className="project-content">
                <div className="project-tags">
                  <span>Java</span>
                  <span>Minecraft</span>
                </div>
                <h3>KnightHomes</h3>
                <p>Modern home management system for MC servers with intuitive GUI and sound.</p>
                <div className="project-links">
                  <a href="https://modrinth.com/plugin/knighthomes" target="_blank" rel="noopener noreferrer">
                    <i data-lucide="external-link" aria-hidden="true"></i> View Project
                  </a>
                  <a href="https://github.com/virendraxd/KnightHomes" target="_blank"
                    rel="noopener noreferrer">
                    <i data-lucide="code" aria-hidden="true"></i> Code
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project 4 --> */}
            <div className="project-card reveal">
              <div className="project-content">
                <div className="project-tags">
                  <span>Node.js</span>
                  <span>AI</span>
                  <span>Automation</span>
                </div>
                <h3>AI Minecraft Bot</h3>
                <p>Intelligent bot with natural language processing for in-game interaction and autonomous
                  tasks using in-game cmds.</p>
                <div className="project-links">
                  <a href="https://github.com/virendraxd/minecraftbot" target="_blank"
                    rel="noopener noreferrer">
                    <i data-lucide="code" aria-hidden="true"></i> Code
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project 5 --> */}
            <div className="project-card reveal">
              <div className="project-content">
                <div className="project-tags">
                  <span>Discord.js</span>
                  <span>Automation</span>
                </div>
                <h3>KnightMC Bot</h3>
                <p>Comprehensive Discord automation for chat detection, XP systems.</p>
                <div className="project-links">
                  <a href="https://github.com/virendraxd/KnightMC" target="_blank" rel="noopener noreferrer">
                    <i data-lucide="code" aria-hidden="true"></i> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ===== SKILLS SECTION ===== --> */}
        <section className="skills" id="skills">
          <div className="section-header reveal">
            <h2 className="title">Technical <span>Stack</span></h2>
            <p>The tools and technologies I use to bring ideas to life.</p>
          </div>

          <div className="skills-container">

            {/* <!-- Frontend --> */}
            <div className="skill-category reveal">
              <h4>Frontend</h4>

              <div className="skill-icons">
                <i className="devicon-html5-plain colored" title="HTML5"></i>
                <i className="devicon-css3-plain colored" title="CSS3"></i>
                <i className="devicon-javascript-plain colored" title="JavaScript"></i>

                <i className="devicon-react-original colored" title="React"></i>

                <i className="devicon-vscode-plain colored" title="VS Code"></i>
              </div>
            </div>

            {/* <!-- Backend & Tools --> */}
            <div className="skill-category reveal">
              <h4>Backend & Tools</h4>

              <div className="skill-icons">
                <i className="devicon-nodejs-plain colored" title="Node.js"></i>

                <i className="devicon-express-original"></i>

                <i className="devicon-mongodb-plain colored" title="MongoDB"></i>

                <i className="devicon-firebase-plain colored" title="Firebase"></i>

                <i className="devicon-git-plain colored" title="Git"></i>

                <i className="devicon-github-original"></i>
              </div>
            </div>

          </div>
        </section>

        {/* <!-- ===== GITHUB SECTION ===== --> */}
        <section className="github-proof reveal">
          <div className="github-content">
            <div className="github-header">
              <i className="fab fa-github" aria-hidden="true"></i>
              <h3>Open Source Credibility</h3>
            </div>
            <div className="github-stats">
              <img src="https://streak-stats.demolab.com?user=virendraxd&theme=tokyonight&hide_border=true&background=0D1117"
                alt="GitHub Streak" loading="lazy" />
              <img src="https://github-readme-stats-eight-theta.vercel.app/api?username=virendraxd&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117"
                alt="GitHub Stats" loading="lazy" />

              <img src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=virendraxd&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117"
                alt="Top Languages" loading="lazy" />
            </div>
          </div>
        </section>

        {/* <!-- ===== CONTACT SECTION ===== --> */}
        <section className="contact" id="contact">
          <div className="contact-card reveal">
            <div className="contact-grid">
              <div className="contact-info">
                <h2 className="title">Let's build something <span>together</span></h2>
                <p>Have a project in mind? Let's turn your vision into reality.</p>

              </div>

              <div className="contact-socials">
                <a href="https://linkedin.com/in/virendra-shakyawar-b1975135a/" target="_blank"
                  rel="noopener noreferrer" className="social-link">
                  <i className="fa-brands fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/virendraxd" target="_blank" rel="noopener noreferrer"
                  className="social-link">
                  <i className="fa-brands fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a href="https://instagram.com/virendraxd" target="_blank" rel="noopener noreferrer"
                  className="social-link">
                  <i className="fa-brands fa-instagram"></i>
                  <span>Instagram</span>
                </a>
                <a href="mailto:devvirendrasingh@gmail.com" className="contact-email">
                  <i data-lucide="mail" aria-hidden="true"></i>
                  <span>devvirendrasingh@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Virendra Singh | All rights reserved.</p>
        </div>
      </footer >
    </>
  )
}

export default App
