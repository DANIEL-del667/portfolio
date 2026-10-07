import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const skills = [
  "Next.js & React",
  "TypeScript",
  "JavaScript",
  "HTML & CSS",
  "PostgreSQL",
  "Database Systems",
  "Website Design",
  "ICT & TVET",
  "System Development",
  "Git & GitHub",
];

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive and professional websites for businesses, organizations, institutions and personal brands.",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Functional web systems with authentication, dashboards, databases, forms, reports and role-based features.",
  },
  {
    number: "03",
    title: "ICT & Training",
    description:
      "Practical ICT, programming, database and website development support for students, trainees and organizations.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      {/* NAVIGATION */}
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          DO<span>.</span>
        </Link>

        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <Link href="/#projects">Projects</Link>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <Link href="#contact" className={styles.navButton}>
          Let&apos;s Talk
        </Link>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>WELCOME TO MY PORTFOLIO</p>

          <h1>
            I am <span>Daniel Oliech</span>
          </h1>

          <h2>
            Web Developer &amp; ICT Professional
          </h2>

          <p className={styles.heroText}>
            I design and build modern digital experiences, websites and
            practical information systems that help people, businesses and
            institutions work better.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/#projects" className={styles.primaryButton}>
              View My Work
            </Link>

            <a href="#contact" className={styles.secondaryButton}>
              Contact Me
            </a>
          </div>

          <div className={styles.quickStats}>
            <div>
              <strong>01+</strong>
              <span>Years Building</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>Technologies</span>
            </div>

            <div>
              <strong>04+</strong>
              <span>Major Projects</span>
            </div>
          </div>
        </div>

        <div className={styles.heroPhotoArea}>
          <div className={styles.photoGlow}></div>

          <div className={styles.photoFrame}>
            <Image
              src="/images/profile.jpeg"
              alt="Daniel Oliech"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 480px"
              className={styles.profileImage}
            />
          </div>

          <div className={styles.floatingCard}>
            <span className={styles.statusDot}></span>
            <div>
              <strong>Available for projects</strong>
              <small>Web • ICT • Systems</small>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p>ABOUT ME</p>
          <h2>Building technology with purpose.</h2>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutNumber}>01</div>

          <div className={styles.aboutText}>
            <p>
              I&apos;m <strong>Daniel Oliech</strong>, a web developer and ICT
              professional passionate about using technology to solve real
              problems.
            </p>

            <p>
              My work combines website development, web applications,
              databases, information systems and practical ICT skills. I enjoy
              turning ideas into functional digital products that are simple
              to use and built with room for future growth.
            </p>

            <p>
              I am particularly interested in modern web technologies,
              database-driven systems, education technology and digital
              solutions for businesses and institutions.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.sectionHeading}>
          <p>MY TOOLKIT</p>
          <h2>Technologies &amp; skills.</h2>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div className={styles.skillCard} key={skill}>
              <span>0{index + 1}</span>
              <strong>{skill}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p>SELECTED WORK</p>
          <h2>Projects I&apos;m building.</h2>
        </div>

        <div className={styles.projectGrid}>
          <Link
            href="/projects/smart-marketplace"
            className={styles.projectCard}
          >
            <div className={styles.projectTop}>
              <span>01</span>
              <span>WEB APPLICATION</span>
            </div>

            <h3>Smart Marketplace</h3>

            <p>
              A modern marketplace platform designed around sellers,
              products, customers, orders and scalable database functionality.
            </p>

            <div className={styles.projectLink}>
              View Project →
            </div>
          </Link>

          <Link
            href="/projects/smart-tvet-platform"
            className={styles.projectCard}
          >
            <div className={styles.projectTop}>
              <span>02</span>
              <span>EDTECH</span>
            </div>

            <h3>Smart TVET Platform</h3>

            <p>
              A digital platform concept for managing students, academic
              information, courses, attendance, results and institutional
              workflows.
            </p>

            <div className={styles.projectLink}>
              View Project →
            </div>
          </Link>

          <Link
            href="/projects/polytechnic-mis"
            className={styles.projectCard}
          >
            <div className={styles.projectTop}>
              <span>03</span>
              <span>INFORMATION SYSTEM</span>
            </div>

            <h3>Polytechnic MIS</h3>

            <p>
              An information management system concept covering admissions,
              students, departments, fees, attendance, results and reports.
            </p>

            <div className={styles.projectLink}>
              View Project →
            </div>
          </Link>

          <Link
            href="/projects/oliech-shop"
            className={styles.projectCard}
          >
            <div className={styles.projectTop}>
              <span>04</span>
              <span>E-COMMERCE</span>
            </div>

            <h3>Oliech Shop</h3>

            <p>
              An online shopping platform concept focused on products,
              customers, orders and a smooth digital shopping experience.
            </p>

            <div className={styles.projectLink}>
              View Project →
            </div>
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={`${styles.section} ${styles.serviceSection}`}>
        <div className={styles.sectionHeading}>
          <p>WHAT I DO</p>
          <h2>Services.</h2>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

    {/* CONTACT */}
<section id="contact" className={styles.contactSection}>
  <div className={styles.contactInner}>

    <div className={styles.contactMain}>
      <p className={styles.eyebrow}>
        LET&apos;S WORK TOGETHER
      </p>

      <h2>
        Have an idea?
        <br />
        <span>Let&apos;s build it.</span>
      </h2>

      <p className={styles.contactText}>
        Whether you need a professional website, a web application,
        an information system or technical ICT support, I&apos;d be
        happy to discuss your project.
      </p>

      <div className={styles.contactButtons}>

        <a
          href="mailto:danielayuka7@gmail.com?subject=Website%20Project%20Enquiry"
          className={styles.contactPrimary}
        >
          Send Me an Email ↗
        </a>

        <a
          href="https://wa.me/254111503221?text=Hello%20Daniel,%20I%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactWhatsApp}
        >
          WhatsApp Me ↗
        </a>

        <a
          href="tel:+254111503221"
          className={styles.contactCall}
        >
          Call Me ↗
        </a>

      </div>
    </div>

    <div className={styles.contactDetails}>

      <a href="mailto:danielayuka7@gmail.com">
        <span>Email</span>
        danielayuka7@gmail.com
      </a>

      <a href="tel:+254111503221">
        <span>Phone</span>
        +254 111 503 221
      </a>

      <a
        href="https://wa.me/254111503221"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>WhatsApp</span>
        +254 111 503 221
      </a>

      <div>
        <span>Location</span>
        Kenya
      </div>

    </div>

  </div>

  <div className={styles.cvBanner}>

    <div>
      <span>CAREER DOCUMENT</span>

      <h3>
        Need my CV?
      </h3>

      <p>
        Download my professional curriculum vitae.
      </p>
    </div>

    <a
      href="/documents/Daniel-Oliech-CV.pdf"
      download
      className={styles.cvButton}
    >
      Download CV ↓
    </a>

  </div>
</section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div>
          <strong>Daniel Oliech</strong>
          <span>Web Developer &amp; ICT Professional</span>
        </div>

        <p>
          © {new Date().getFullYear()} Daniel Oliech. All rights reserved.
        </p>
      </footer>
    </main>
  );
}