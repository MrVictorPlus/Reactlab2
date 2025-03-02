function Article({ title, text }) {
  return (
    <article className="card shadow-sm mb-4">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </article>
  );
}

export default Article;
