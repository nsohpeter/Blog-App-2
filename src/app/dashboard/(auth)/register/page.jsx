"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success = account has been created");
      setLoading(false);

      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/dashboard.png" fill alt="hero" className={styles.image} />
      </div>
      <div className={styles.formContent}>
        <h1 className={styles.title}>Create your account</h1>
        <p className={styles.para}>
          Don{"'"}t have an account?{" "}
          <span>
            <Link href="/dashboard/login">login</Link>
          </span>
        </p>
        {loading && <h1>loading...</h1>}
        <form className={styles.form} action="" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button className={styles.btn} type="submit">
            register
          </button>
        </form>
        {error && <h1>oops! something went wrong</h1>}
        {/* <Link href="/dashboard/login" className="linkEl">
         login with an existing account
       </Link> */}
      </div>
    </div>
  );
};

export default Register;
