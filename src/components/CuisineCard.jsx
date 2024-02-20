import { Card } from "flowbite-react";
export default function CuisineCard() {
  const cardStyle = {
    backgroundImage: `url("../../src/assets/image/ef3-placeholder-image1.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Card
      href="#"
      className="mx-4 mb-4 rounded-full w-28 h-28 sm:w-30 sm:h-30 md:w-32 md:h-32 lg:w-34 lg:h-34"
      style={cardStyle}
    >
      <div>
        <h5 className="text-sm text-center font-normal tracking-tight text-gray-700 dark:text-gray-400">
          COLLECTION
        </h5>
      </div>
    </Card>
  );
}
