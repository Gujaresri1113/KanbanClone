import React, { useState } from "react";

import { dummyProjects } from "../../Dummydata.js";
import { Bullet } from "../../assets/Bullet";
import { AddSquare } from "../../assets/AddSquare";
import { Menu1 } from "../../assets/Menu1";

import styles from "../../styles/Drawer/MyProjects.module.css";

export default function MyProjects() {
  const [projects, setProjects] = useState(dummyProjects);
  const [currentProject, setCurrentProject] = useState(dummyProjects[0]);

  return (
    <div>
      <header className={styles.header}>
        <span className={styles.headerText}>MY PROJECTS</span>
        <AddSquare />
      </header>
      <ul className={styles.projectsList}>
        {projects.map((project) => (
          <li
            key={project.id}
            className={`${styles.projectItem} ${
              project.id === currentProject.id && styles.active
            }`}
          >
            <span className={styles.projectInfo}>
              <Bullet color={project.favColor} />
              <span className={styles.projectName}>{project.name}</span>
            </span>
            {project.id === currentProject.id && (
              <span className={styles.activeIcon}>
                <Menu1 />
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
