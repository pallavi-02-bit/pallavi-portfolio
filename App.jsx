function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">
          Pallavi<span>.</span>
        </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#internship">Internship</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Pallavi K.S.</span>
          </h1>

          <h2>
            Aspiring Software Engineer | B.Tech CSE Student
          </h2>

          <p>
            I am a third-year Computer Science and Engineering
            student passionate about software development,
            problem-solving, and building practical applications.
            I aspire to become a successful software engineer by
            continuously learning new technologies and developing
            innovative solutions.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="profile-circle">
          <span>PK</span>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <div className="about-box">
          <h3>Hello! I'm Pallavi K.S.</h3>

          <p>
            I am a third-year B.Tech Computer Science and
            Engineering student at CMR University, Lakeside
            Campus, with a strong interest in becoming a
            successful software engineer.
          </p>

          <p>
            I enjoy programming, learning new technologies,
            solving problems, and developing user-friendly
            applications. My technical interests include Java,
            Python, JavaScript, React.js, and full-stack
            web development.
          </p>

          <p>
            I have worked on academic projects involving
            application development and am developing projects
            such as Community Help Connect, TravelTales, and
            Student Data Management System to strengthen my
            technical and problem-solving skills.
          </p>

          <p>
            My goal is to become a skilled software engineer,
            gain practical industry experience, and contribute
            to meaningful technology projects that solve
            real-world problems.
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section dark-section">
        <h2>Education</h2>

        <div className="card">
          <h3>B.Tech – Computer Science and Engineering</h3>
          <p>CMR University – Lakeside Campus</p>
          <p>2024 – Present | 3rd Year</p>
          <strong>CGPA: 9.23</strong>
        </div>

        <div className="card">
          <h3>PUC</h3>
          <p>Chinmaya Independent College, Kolar</p>
          <p>2024</p>
          <strong>Percentage: 95%</strong>
        </div>

        <div className="card">
          <h3>SSLC</h3>
          <p>Chinmaya Grameena Vidyalaya, Kolar</p>
          <p>2022</p>
          <strong>Percentage: 98%</strong>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="section">
        <h2>Technical Skills</h2>

        <div className="skills">
          <div>Java</div>
          <div>Python</div>
          <div>JavaScript</div>
          <div>React.js</div>
          <div>Node.js</div>
          <div>Express.js</div>
          <div>MongoDB</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>SQL</div>
          <div>Git &amp; GitHub</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section dark-section">
        <h2>My Projects</h2>

        <div className="projects">

          {/* Community Help Connect */}
          <div className="card">
            <h3>Community Help Connect</h3>

            <p>
              Developed a full-stack community support platform
              designed to connect people with assistance for
              education, book exchange, blood donation, health
              support, financial assistance, and disaster relief.
              The platform also provides student opportunities,
              user authentication, and an admin dashboard.
            </p>

            <strong>
              Technologies: JavaScript, React.js, Node.js,
              Express.js, MongoDB
            </strong>
          </div>

          {/* TravelTales */}
          <div className="card">
            <h3>TravelTales – Travel Planning Platform</h3>

            <p>
              Designed a travel planning web application to help
              users explore destinations and organize their
              travel experiences. The platform aims to provide
              destination information and a user-friendly
              interface for discovering travel options.
            </p>

            <strong>
              Technologies: React.js, Node.js, Express.js
            </strong>
          </div>

          {/* Student Data Management System */}
          <div className="card">
            <h3>Student Data Management System</h3>

            <p>
              Developed a full-stack web application designed
              to organize and manage student records efficiently.
              The system supports student information management
              and CRUD operations to create, view, update, and
              delete student records through a user-friendly
              interface.
            </p>

            <strong>
              Technologies: React.js, Node.js, Express.js,
              MongoDB
            </strong>
          </div>

          {/* Tower of Hanoi */}
          <div className="card">
            <h3>Tower of Hanoi – GUI</h3>

            <p>
              Developed a graphical version of the Tower of Hanoi
              puzzle with an interactive graphical user interface
              to demonstrate the puzzle-solving process.
            </p>

            <strong>
              Technologies: Python, Tkinter
            </strong>
          </div>

          {/* Online Voting System */}
          <div className="card">
            <h3>Online Voting System</h3>

            <p>
              Developed an Online Voting System using Java to
              demonstrate the basic functionality of a digital
              voting application.
            </p>

            <strong>Technology: Java</strong>
          </div>

        </div>
      </section>

      {/* Internship */}
      <section id="internship" className="section">
        <h2>Internship</h2>

        <div className="card internship-card">
          <h3>Bharat Electronics Limited (BEL), Bengaluru</h3>

          <h4>Internship Project: Student Management System</h4>

          <p>
            During my internship at Bharat Electronics Limited
            (BEL), Bengaluru, I worked on a Student Management
            System project.
          </p>

          <p>
            The internship helped me gain practical experience
            in software development and understand how
            programming concepts can be applied to
            real-world applications.
          </p>

          <p>
            I also improved my technical, problem-solving,
            and teamwork skills.
          </p>
        </div>
      </section>

      {/* Career Objective */}
      <section className="objective">
        <h2>Career Objective</h2>

        <p>
          To become a successful software engineer by
          continuously improving my programming and
          problem-solving skills, gaining practical industry
          experience, and contributing to innovative software
          solutions that make a positive impact.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>

        <div className="contact">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:pallavigowda8855@gmail.com">
              pallavigowda8855@gmail.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:8618627772">
              8618627772
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/pallavi-k-s-10975b330"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LinkedIn
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/pallavi-02-bit"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h3>Pallavi K.S.</h3>
        <p>B.Tech CSE | Aspiring Software Engineer</p>
        <p>© 2026 Pallavi K.S.</p>
      </footer>

    </div>
  );
}

export default App;