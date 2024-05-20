import { useState } from "react";
import menu from "./data";
import AllFood from "./components/AllFood";
import Categories from "./components/Categories";

const setCategory = [
  "all",
  ...new Set(menu.map((item) => item.category)),
];

function App() {
  const [isFoodMenu, setIsFoodMenu] = useState(menu);
  console.log(isFoodMenu);
  const [isCategories, setIsCategories] = useState(setCategory);

  function filterMenu(item) {
    setIsFoodMenu(
      menu.filter((menuCategory) => {
        return item === "all" ? menuCategory : menuCategory.category === item;
      })
    );
  }

  return (
    <>
      <div className="allFood">
        <div className="heading">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>

        <div className="selection">
          <Categories isCategories={isCategories} filterMenu={filterMenu} />
        </div>

        <AllFood isFoodMenu={isFoodMenu} />
      </div>
    </>
  );
}

export default App;
