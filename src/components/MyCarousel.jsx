import { Carousel } from "flowbite-react";

export default function MyCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 px-4">
      <Carousel>
        <img src="../../src/assets/image/ef3-placeholder-image.jpg" alt="..." />
        <img src="../../src/assets/image/ef3-placeholder-image.jpg" alt="..." />
        <img src="../../src/assets/image/ef3-placeholder-image.jpg" alt="..." />
        <img src="../../src/assets/image/ef3-placeholder-image.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
