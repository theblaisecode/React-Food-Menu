export default function Categories({ isCategories, filterMenu }) {
  return isCategories.map((item) => {
    return (
      <button className="btn" key={item} onClick={() => filterMenu(item)}>
        {item}
      </button>
    );
  });
}
