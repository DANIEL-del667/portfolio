"use client";

import Link from "next/link";
import styles from "./gallery.module.css";

type GalleryProject = {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  status: string;
};

const projects: GalleryProject[] = [
  {
    slug: "smart-marketplace",
    number: "01",
    category: "E-COMMERCE",
    title: "Smart Marketplace",
    description:
      "A full-stack online marketplace designed for customers, sellers and administrators.",
    status: "IN DEVELOPMENT",
  },

  {
    slug: "smart-tvet-platform",
    number: "02",
    category: "EDTECH",
    title: "Smart TVET Platform",
    description:
      "A digital platform designed to support students, lecturers and institutional administration.",
    status: "IN DEVELOPMENT",
  },

  {
    slug: "polytechnic-mis",
    number: "03",
    category: "MANAGEMENT SYSTEM",
    title: "Polytechnic MIS",
    description:
      "A management information system prototype for academic and institutional operations.",
    status: "PROTOTYPE",
  },

  {
    slug: "oliech-shop",
    number: "04",
    category: "ONLINE BUSINESS",
    title: "Oliech Shop",
    description:
      "An online shopping platform for displaying electronics and other products.",
    status: "LIVE PROJECT",
  },
];

export default function ProjectGallery() {
  return (
    <div className={styles.gallery}>

      {projects.map((project) => (

        <article
          className={styles.projectCard}
          key={project.slug}
        >

          <Link
            href={`/projects/${project.slug}`}
            className={styles.imageLink}
          >

            <div className={styles.imageWrapper}>

              <div className={styles.projectPlaceholder}>

                <span>
                  {project.category}
                </span>

                <h2>
                  {project.title}
                </h2>

                <p>
                  Project {project.number} · {project.status}
                </p>

              </div>

              <div className={styles.imageOverlay}>
                <span>
                  VIEW PROJECT ↗
                </span>
              </div>

              <div className={styles.number}>
                {project.number}
              </div>

            </div>

          </Link>

          <div className={styles.cardContent}>

            <div className={styles.cardTop}>

              <span>
                {project.category}
              </span>

              <span>
                {project.status}
              </span>

            </div>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <Link
              href={`/projects/${project.slug}`}
              className={styles.projectLink}
            >
              Explore Project
              <span>↗</span>
            </Link>

          </div>

        </article>

      ))}

    </div>
  );
}