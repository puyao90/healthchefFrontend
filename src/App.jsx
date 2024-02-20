import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";
import MyCarousel from "./components/MyCarousel.jsx";
import CollectionCard from "./components/CollectionCard.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="mx-auto px-4">
        <MyCarousel />
        <div className="collections mt-8 ">
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
        <div className="cuisine"></div>
        <div className="trending"></div>
        <div className="recommend"></div>
      </main>
      <footer></footer>

      {/* <main>
        <AuthInputs />
      </main> */}
    </>
  );
}
