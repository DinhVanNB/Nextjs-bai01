import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <ul class={styles.ul}>
        <li>
          <Link legacyBehavior href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/login">
            <a>Logout</a>
          </Link>
        </li>
      </ul>
      <div className={styles.container}>{children}</div>
    </div>
  );
}