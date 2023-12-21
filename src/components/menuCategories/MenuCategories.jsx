import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        News
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Tutoriales
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Consultas
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        Otros
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        General
      </Link>
    </div>
  );
};

export default MenuCategories;
