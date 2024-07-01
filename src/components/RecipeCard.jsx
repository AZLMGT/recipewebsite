import { Heart, HeartPulse, Soup } from "lucide-react";

const RecipeCard = () => {
  return (
    <div className=" relative flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3  ">
      <a href="*" className="relative h-40">
        <img
          src="/1.jpg"
          alt="1"
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-2 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} />4 Servings
        </div>
        <div className="bg-white absolute top-1 right-1 rounded-full p-1 cursor-pointer">
          <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">Roasted Chicken</p>
      </div>
      <p className="my-2">Turkish Kitchen</p>

      <div className="flex gap-2 mt-auto">
        <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
          <HeartPulse size={16} />
          <span className="text-sm tracking-tighter font-semibold">
            Gluten Free
          </span>
        </div>
        <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
          <HeartPulse size={16} />
          <span className="text-sm tracking-tighter font-semibold">
            Heart Healthy
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
