import { Card } from "flowbite-react";

export default function CollectionCard() {
  const cardStyle = {
    backgroundImage: `url("../../src/assets/image/ef3-placeholder-image.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
      <Card href="#" className="mx-4 mb-6 h-44" style={cardStyle}>
        <div>
          <h5 className="text-sm font-normal tracking-tight text-gray-700 dark:text-gray-400">
            COLLECTION
          </h5>
          <h5 className="text-xl font-normal  text-gray-900 dark:text-white">
            TOP 100 COMFORT FOOD RECIPES
          </h5>
        </div>
      </Card>
    </div>
  );
}
