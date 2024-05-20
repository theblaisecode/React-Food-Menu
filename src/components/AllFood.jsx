import Food from "./Food";

export default function AllFood({ isFoodMenu }) {
  return (
    <div className="allItems">
      {isFoodMenu.map((item) => {
        return <Food key={item.id} {...item} />;
      })}
    </div>
  );
}
