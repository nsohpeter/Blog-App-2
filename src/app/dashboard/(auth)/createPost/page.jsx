"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const CreatePost = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.create}>Create Post</h1>
      {/* {loading && <h1>Loading...</h1>} */}
      <form className={styles.form} action="">
        <div className={styles.titleCat}>
          <input
            className={styles.firstInput}
            type="text"
            id="title"
            placeholder="title"
            name="title"
            //   value={formData.title}
            //   onChange={handleChange}
            required
          />
          <div className={styles.Catinput}>
            <select className={styles.select}>
              <option value="style">style</option>
              <option value="fashion">fashion</option>
              <option value="food">food</option>
              <option value="culture">culture</option>
              <option value="travel">travel</option>
              <option value="coding">coding</option>
            </select>
          </div>
        </div>

        {/* <input
          className={styles.input}
          type="file"
          name="image"
          //   onChange={handleFileChange}
          accept="image/*"
        /> */}

        <div className={styles.editor}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image src="/plus.png" alt="" width={18} height={18} />
          </button>
          {open && (
            <div className={styles.add}>
              <input
                type="file"
                id="image"
                // onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
              <button className={styles.addButton}>
                <label htmlFor="image">
                  <Image src="/image.png" alt="" width={18} height={18} />
                </label>
              </button>
              <button className={styles.addButton}>
                <Image src="/external.png" alt="" width={18} height={18} />
              </button>
              <button className={styles.addButton}>
                <Image src="/video.png" alt="" width={18} height={18} />
              </button>
            </div>
          )}
        </div>
        <textarea
          className={styles.textArea}
          id="content"
          placeholder="content"
          name="content"
          //   value={formData.content}
          //   onChange={handleChange}
          required
          cols="30"
          rows="10"
        ></textarea>

        <button className={styles.btn} type="submit">
          submit post
        </button>
      </form>
      {/* {error && <h1>oops! something went wrong</h1>} */}
    </div>
  );
};

export default CreatePost;
