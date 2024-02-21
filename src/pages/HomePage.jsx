import MyCarousel from "../components/MyCarousel.jsx";
import CollectionCard from "../components/CollectionCard.jsx";
import CuisineCard from "../components/CuisineCard.jsx";
import RecipeCard from "../components/RecipeCard.jsx";
import smileface from "../assets/icon/smileface.svg";

export default function HomePage() {
  return (
    <>
      <main className="mx-auto px-4">
        <MyCarousel />
        <div className="collections mt-10 ">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ml-4">
            Curated Collections
          </h5>
          <div className=" flex flex-wrap justify-between mx-auto mt-4">
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
          </div>
        </div>
        <div className="cuisine mt-10">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ml-4">
            Explore More Cuisine
          </h5>
          <div className="flex flex-wrap mt-4">
            <CuisineCard />
            <CuisineCard />
            <CuisineCard />
            <CuisineCard />
            <CuisineCard />
            <CuisineCard />
          </div>
        </div>
        <div className="trending mt-10">
          <div className="flex justify-between mr-6">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ml-4">
              Trending Now
            </h5>
            <button className="more w-6">
              <img src={smileface} alt="" />
            </button>
          </div>
          <div className="flex flex-wrap mt-4">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
        </div>
        <div className="recommend mt-10">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ml-4">
            Don’t Miss
          </h5>
          <div className="flex flex-wrap mt-4">
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
          </div>
        </div>
      </main>
      {/* <MyFooter /> */}
    </>
  );
}
