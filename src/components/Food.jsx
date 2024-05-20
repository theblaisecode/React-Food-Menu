export default function Food({ id, title, category, price, img, desc }) {
  return (
    <div className="foodItem" key={id}>
      <div className="contentTop">
        <img src={img} alt={title} />
      </div>

      <div className="contentBottom">
        <div className="head">
          <h3 className="title">{title}</h3>
          <span className="price">${price}</span>
        </div>

        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}
