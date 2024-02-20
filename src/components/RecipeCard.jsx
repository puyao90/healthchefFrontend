import { Card } from "flowbite-react";
import smileface from "../assets/icon/smileface.svg";

export default function RecipeCard() {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
      <Card
        href="#"
        className="mx-4 mb-8"
        imgSrc="../../src/assets/image/ef3-placeholder-image.jpg"
      >
        <h5 className="text-base font-normal  text-gray-900 dark:text-white -mt-4 -ml-3">
          5-Ingredient Ground Beef Casserole
        </h5>
        <div className="stars flex gap-1 w-3.5 -mt-2 -ml-3">
          <img src={smileface} alt="" />
          <img src={smileface} alt="" />
          <img src={smileface} alt="" />
          <img src={smileface} alt="" />
          <img src={smileface} alt="" />
        </div>
        <div className="info flex gap-3 text-sm tracking-tight text-gray-700 dark:text-gray-400 -mt-1 -mb-2 -ml-3">
          <div className="time flex">
            <img src={smileface} alt="" className="w-3.5 mr-1" />
            10 min
          </div>
          <div className="cals flex">
            <img src={smileface} alt="" className="w-3.5 mr-1" />
            350 cals
          </div>
        </div>
      </Card>
    </div>
  );
}
