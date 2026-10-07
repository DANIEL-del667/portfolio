import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../projects.module.css";

type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  overview: string;
  status: string;
  year: string;
  role: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Record<string, Project> = {
  "smart-marketplace": {
    slug: "smart-marketplace",
    number: "01",
    category: "E-Commerce",
    title: "Smart Marketplace",

    shortDescription:
      "A modern full-stack online marketplace designed for customers, sellers and administrators.",

    overview:
      "Smart Marketplace is a full-stack e-commerce platform being developed to provide a complete online shopping experience. The system is designed around customers, sellers and administrators, with products, categories, shopping carts, orders, seller management and administration forming the core of the platform.",

    status: "In Development",
    year: "2026",
    role: "Full-Stack Developer",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
      "Responsive Design",
    ],

    features: [
      "Customer shopping experience",
      "Seller product management",
      "Product categories",
      "Product details",
      "Shopping cart",
      "Order management",
      "Seller dashboard",
      "Admin dashboard",
      "Database-driven products",
      "Authentication architecture",
      "Responsive interface",
    ],

    githubUrl: "https://github.com/DANIEL-del667",
  },

  "smart-tvet-platform": {
    slug: "smart-tvet-platform",
    number: "02",
    category: "Education Technology",
    title: "Smart TVET Platform",

    shortDescription:
      "A digital TVET management platform supporting students, lecturers and administrators.",

    overview:
      "Smart TVET Platform is an education technology system designed to digitize important institutional activities. The platform brings together student information, academic activities, administration and institutional workflows into a centralized web application.",

    status: "In Development",
    year: "2026",
    role: "Full-Stack Developer",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
      "Authentication",
    ],

    features: [
      "Student dashboard",
      "Student profiles",
      "Course management",
      "Timetable management",
      "Attendance management",
      "Academic results",
      "Fees management",
      "Admissions",
      "Department management",
      "Administrative dashboard",
    ],

    githubUrl: "https://github.com/DANIEL-del667",
  },

  "polytechnic-mis": {
    slug: "polytechnic-mis",
    number: "03",
    category: "Management Information System",
    title: "Polytechnic MIS",

    shortDescription:
      "A management information system prototype for academic and institutional operations.",

    overview:
      "Polytechnic MIS is a prototype management information system designed to demonstrate how a polytechnic institution can manage students, admissions, departments, courses, units, fees, attendance, results and reporting from one digital platform.",

    status: "Prototype",
    year: "2026",
    role: "System Designer & Developer",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "LocalStorage",
      "Responsive Design",
      "GitHub",
    ],

    features: [
      "Student management",
      "Admissions",
      "Departments",
      "Courses and units",
      "Fees management",
      "Attendance",
      "Results management",
      "Transcript generation",
      "GPA reporting",
      "Data export and backup",
      "Staff management",
      "Timetable management",
      "Library management",
      "Procurement management",
      "Alumni management",
    ],

    liveUrl: "https://steady-marshmallow-2499db.netlify.app",
    githubUrl: "https://github.com/DANIEL-del667/my-learning-website",
  },

  "oliech-shop": {
    slug: "oliech-shop",
    number: "04",
    category: "Online Business",
    title: "Oliech Shop",

    shortDescription:
      "An online shopping platform for displaying electronics and other products.",

    overview:
      "Oliech Shop is an online business website created to provide a digital storefront for products. The project focuses on product presentation and creating a foundation for customers to interact with an online store.",

    status: "Live Project",
    year: "2026",
    role: "Web Developer",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Responsive Design",
      "GitHub",
    ],

    features: [
      "Product display",
      "Product categories",
      "Responsive shopping interface",
      "Firebase integration",
      "Product management foundation",
      "Online business presentation",
      "Customer-focused interface",
    ],

    liveUrl: "https://oliech-shop.onrender.com",
    githubUrl: "https://github.com/DANIEL-del667/oliech-shop",
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.projectPage}>

      {/* NAVIGATION */}
      <nav className={styles.projectNav}>
        <Link href="/" className={styles.logo}>
          DANIEL<span>.</span>
        </Link>

        <Link href="/#projects" className={styles.backLink}>
          ← Back to Projects
        </Link>
      </nav>

      {/* HERO */}
      <section className={styles.projectHero}>
        <div className={styles.heroInner}>

          <div className={styles.projectNumber}>
            PROJECT {project.number}
          </div>

          <div className={styles.projectCategory}>
            {project.category}
          </div>

          <h1>{project.title}</h1>

          <p className={styles.heroDescription}>
            {project.shortDescription}
          </p>

          <div className={styles.heroMeta}>

            <div>
              <span>STATUS</span>
              <strong>{project.status}</strong>
            </div>

            <div>
              <span>YEAR</span>
              <strong>{project.year}</strong>
            </div>

            <div>
              <span>ROLE</span>
              <strong>{project.role}</strong>
            </div>

          </div>

        </div>
      </section>

      {/* PROJECT VISUAL */}
      <section className={styles.visualSection}>
        <div className={styles.projectVisual}>

          <div className={styles.visualNumber}>
            {project.number}
          </div>

          <div className={styles.visualContent}>

            <span>{project.category}</span>

            <h2>{project.title}</h2>

            <p>
              Digital solution · {project.year}
            </p>

          </div>

          <div className={styles.visualMark}>
            ✦
          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className={styles.contentSection}>

        <div className={styles.contentGrid}>

          <div>

            <span className={styles.sectionLabel}>
              01 / OVERVIEW
            </span>

            <h2>
              About
              <br />
              <span>the project.</span>
            </h2>

          </div>

          <div className={styles.contentText}>

            <p className={styles.largeParagraph}>
              {project.overview}
            </p>

            <p>
              The project focuses on creating practical digital
              experiences that combine usability, structured
              information and modern web technologies.
            </p>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section
        className={`${styles.contentSection} ${styles.lightSection}`}
      >

        <div className={styles.contentGrid}>

          <div>

            <span className={styles.sectionLabel}>
              02 / FEATURES
            </span>

            <h2>
              What it
              <br />
              <span>does.</span>
            </h2>

          </div>

          <div className={styles.featuresGrid}>

            {project.features.map((feature, index) => (

              <div
                className={styles.featureCard}
                key={feature}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{feature}</h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TECHNOLOGY */}
      <section className={styles.darkSection}>

        <div className={styles.contentGrid}>

          <div>

            <span className={styles.darkLabel}>
              03 / TECHNOLOGY
            </span>

            <h2>
              Built with
              <br />
              <span>modern tools.</span>
            </h2>

          </div>

          <div className={styles.technologyGrid}>

            {project.technologies.map((technology, index) => (

              <div
                className={styles.technologyItem}
                key={technology}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {technology}
                </strong>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ROLE */}
      <section className={styles.contentSection}>

        <div className={styles.contentGrid}>

          <div>

            <span className={styles.sectionLabel}>
              04 / MY ROLE
            </span>

            <h2>
              From idea
              <br />
              <span>to implementation.</span>
            </h2>

          </div>

          <div className={styles.roleBox}>

            <span>ROLE</span>

            <h3>{project.role}</h3>

            <p>
              I worked on the planning, interface development,
              functionality and technical implementation of
              this project.
            </p>

          </div>

        </div>

      </section>

      {/* LINKS */}
      <section className={styles.projectLinksSection}>

        <div className={styles.projectLinksInner}>

          <div>

            <span>
              PROJECT RESOURCES
            </span>

            <h2>
              Explore
              <br />
              <span>the project.</span>
            </h2>

          </div>

          <div className={styles.linksList}>

            {project.liveUrl && (

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceLink}
              >

                <span>
                  LIVE PROJECT
                </span>

                <strong>
                  Open Website ↗
                </strong>

              </a>

            )}

            {project.githubUrl && (

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceLink}
              >

                <span>
                  SOURCE CODE
                </span>

                <strong>
                  View GitHub ↗
                </strong>

              </a>

            )}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className={styles.projectCta}>

        <span>
          HAVE A PROJECT IN MIND?
        </span>

        <h2>
          Let&apos;s build
          <br />
          <span>something useful.</span>
        </h2>

        <Link
          href="/#contact"
          className={styles.ctaButton}
        >
          Start a Conversation ↗
        </Link>

      </section>

      {/* FOOTER */}
      <footer className={styles.projectFooter}>

        <Link href="/" className={styles.logo}>
          DANIEL<span>.</span>
        </Link>

        <p>
          Web Developer · ICT Professional · Trainer
        </p>

        <span>
          © {new Date().getFullYear()} Daniel Oliech
        </span>

      </footer>

    </main>
  );
}