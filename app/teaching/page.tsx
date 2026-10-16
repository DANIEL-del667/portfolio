import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const subjects = [
  {
    number: "01",
    title: "Computer Studies and ICT",
    description:
      "Computer fundamentals, digital literacy, computer applications and practical ICT skills.",
  },
  {
    number: "02",
    title: "Website Design and Programming",
    description:
      "HTML, CSS, JavaScript, programming principles and practical web development.",
  },
  {
    number: "03",
    title: "Databases and Information Systems",
    description:
      "Database concepts, data management, information systems and system development.",
  },
  {
    number: "04",
    title: "Computer Networks and Support",
    description:
      "Networking fundamentals, computer hardware, troubleshooting and technical support.",
  },
];

const methods = [
  "Clear, step-by-step explanations",
  "Practical demonstrations and guided exercises",
  "Real-world examples and project-based learning",
  "Learner participation, assessment and feedback",
];

export default function TeachingPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          DO<span>.</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/teaching" aria-current="page">Teaching</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>
            TEACHING · ICT · WEB DEVELOPMENT
          </p>

          <h1>Making technology easier to understand and use.</h1>

          <p className={styles.intro}>
            I am Daniel Oliech, an ICT and web development practitioner
            with an interest in teaching, technical training and practical
            technology education. I value clear explanations, hands-on
            learning and solutions that help people develop useful skills.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryButton}>
              Contact me
            </a>
            <a href="#subjects" className={styles.secondaryButton}>
              Explore teaching areas
            </a>
          </div>

          <div className={styles.tags}>
            <span>ICT Education</span>
            <span>Practical Training</span>
            <span>Web Development</span>
          </div>
        </div>

        <div className={styles.portraitFrame}>
          <Image
            src="/images/OLIECH.jpeg"
            alt="Daniel Oliech in his teaching-profession photograph"
            width={600}
            height={750}
            priority
            className={styles.portrait}
          />
          <p className={styles.caption}>
            Daniel Oliech · Teaching and ICT
          </p>
        </div>
      </section>

      <section className={styles.section} id="profile">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>MY TEACHING PROFILE</p>
          <h2>Learning through understanding and practice.</h2>
          <p>
            My approach to technical education is to break down concepts,
            demonstrate how they work and give learners opportunities to
            practise. I aim to support curiosity, confidence and continuous
            improvement.
          </p>
        </div>

        <div className={styles.cardGrid}>
          <article className={styles.card}>
            <span className={styles.number}>01 / EXPLAIN</span>
            <h3>Clear explanations</h3>
            <p>
              Present technical concepts in manageable steps with examples
              learners can follow.
            </p>
          </article>

          <article className={styles.card}>
            <span className={styles.number}>02 / PRACTISE</span>
            <h3>Hands-on learning</h3>
            <p>
              Connect theory with demonstrations, exercises and practical
              projects.
            </p>
          </article>

          <article className={styles.card}>
            <span className={styles.number}>03 / IMPROVE</span>
            <h3>Feedback and support</h3>
            <p>
              Encourage questions, review progress and identify opportunities
              to improve.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section} id="subjects">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>TECHNICAL SUBJECT AREAS</p>
          <h2>Teaching meets technology.</h2>
          <p>
            Explore the computing and ICT areas I can showcase through
            technical knowledge, learning materials and development projects.
          </p>
        </div>

        <div className={styles.subjectGrid}>
          {subjects.map((subject) => (
            <article className={styles.subjectCard} key={subject.number}>
              <span className={styles.number}>{subject.number}</span>
              <h3>{subject.title}</h3>
              <p>{subject.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="gallery">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>MY PROFESSIONAL PHOTOGRAPHS</p>
          <h2>Teaching and ICT in focus.</h2>
          <p>
            These photographs help present both my teaching identity and
            my broader ICT and web development interests.
          </p>
        </div>

        <div className={styles.gallery}>
          <figure className={styles.galleryCard}>
            <Image
              src="/images/OLIECH.jpeg"
              alt="Daniel Oliech teaching-profession photograph"
              width={800}
              height={650}
              className={styles.galleryImage}
            />
            <figcaption>
              <strong>Teaching and training</strong>
              <span>Technical education and learner support.</span>
            </figcaption>
          </figure>

          <figure className={styles.galleryCard}>
            <Image
              src="/images/profile.jpeg"
              alt="Daniel Oliech profile photograph"
              width={800}
              height={650}
              className={styles.galleryImage}
            />
            <figcaption>
              <strong>ICT and professional development</strong>
              <span>Computing, web development and digital solutions.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section} id="approach">
        <div className={styles.methodGrid}>
          <div>
            <p className={styles.eyebrow}>MY APPROACH</p>
            <h2>Understand it. Practise it. Apply it.</h2>
            <p className={styles.intro}>
              Technical education is most useful when learners can apply
              what they understand. I aim to connect explanations with
              practical activities and meaningful examples.
            </p>
          </div>

          <ul className={styles.methodList}>
            {methods.map((method) => (
              <li key={method}>
                <span aria-hidden="true">↗</span>
                {method}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <p className={styles.eyebrow}>LET'S CONNECT</p>
        <h2>Teaching, technology and practical solutions.</h2>
        <p>
          Contact me about teaching opportunities, ICT training, website
          development or collaborative projects.
        </p>

        <div className={styles.actions}>
          <a
            href="mailto:danielayuka7@gmail.com?subject=Teaching%20or%20ICT%20Opportunity"
            className={styles.primaryButton}
          >
            Email Daniel
          </a>
          <a
            href="https://wa.me/254111503221"
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryButton}
          >
            WhatsApp
          </a>
        </div>

        <Link href="/" className={styles.backLink}>
          ← Return to the main portfolio
        </Link>
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Daniel Oliech</span>
        <span>Teaching · ICT · Web Development</span>
      </footer>
    </main>
  );
}
