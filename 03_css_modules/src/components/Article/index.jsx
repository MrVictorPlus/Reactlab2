import styles from "./Article.module.css";

function Article({ title, text }) {
    return (
      <article className={styles.article}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </article>
    );
}

export default Article;

  