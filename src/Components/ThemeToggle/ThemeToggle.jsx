"use client";

import React, { useContext } from "react";
import styles from "./ThemeToggle.module.css";
import { themeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <div
      style={
        theme === "dark"
          ? { left: "2px", backgroundColor: "#0f172a" }
          : { right: "2px", backgroundColor: "#fff" }
      }
      className={styles.container}
      onClick={toggleTheme}
    >
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: "2px", backgroundColor: "#fff" }
            : { right: "2px", backgroundColor: "#0f172a" }
        }
      />
    </div>
  );
};

export default ThemeToggle;
