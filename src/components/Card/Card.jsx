const Card = ({ news }) => {
  return (
    <section>
      <h2>{news.title}</h2>
      <p>{news.text}</p>
      <img src={news.image} alt={news.title} />
      <i className="ri-thumb-up-line"></i>
      <span>{news.likes}</span>
      <i className="ri-chat-1-line"></i>
      <span>{news.comments}</span>
    </section>
  );
};

export default Card;
