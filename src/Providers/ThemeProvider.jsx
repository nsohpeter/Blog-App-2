"use client";

import { themeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(themeContext);

  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (mount) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
