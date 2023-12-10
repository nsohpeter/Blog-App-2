"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import Google from "next-auth/providers/Google";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await signIn("credentials", formData);
      setLoading(false);
      setFormData({
        email: "",
        password: "",
      });

      console.log(session);
      // await getSession().update();
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  if (session.status === "loading") {
    return <h1>loading....</h1>;
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/dashboard.png" fill alt="hero" className={styles.image} />
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Log in to your account</h1>
        <p className={styles.para}>
          Don{"'"}t have an account?{" "}
          <span>
            <Link href="/dashboard/register">sign up</Link>
          </span>
        </p>

        <button className={styles.sigInbtn} onClick={() => signIn(Google)}>
          login with google
        </button>
        <button className={styles.sigInbtn}>login with github</button>

        <p>or with email and Password</p>
        <form className={styles.form} action="" onSubmit={handleSubmit}>
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
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
