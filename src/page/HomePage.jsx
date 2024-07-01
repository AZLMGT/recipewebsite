import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
  return (
    <div className="bg-home1 p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label className="input shadow-md flex items-center gap-2">
            <Search />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="What do you want to cook today"
            />
          </label>
        </form>
        <div className="flex flex-col items-start">
          <p className="font-bold text-3xl md:text-5xl mt-4">
            Recomended Recipes
          </p>
          <p className="font-semibold text-slate-500 ml-1 my-4 text-sm tracking-tight">
            Popular choices
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <RecipeCard />
          
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
