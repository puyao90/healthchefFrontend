import logo from "../assets/logo.png";
import smileface from "../assets/icon/smileface.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center ml-7 mr-8 mt-2 mb-6 md:mb-8">
      <div className="title flex">
        <img src={logo} alt="A canvas" className="w-12 object-contain" />
        <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase font-title ml-2">
          Health Chef
        </h1>
      </div>

      <div className="rightLink flex">
        <button className="search w-6">
          <img src={smileface} alt="" />
        </button>

        <nav className="flex gap-x-6 ml-10 mr-10">
          <div>
            <a href="">Home</a>
          </div>
          <div>
            <a href="">Recipes</a>
          </div>
        </nav>
        <div className="signIn flex">
          <img className="w-6 mr-2" src={smileface} alt="" />
          <a href="">Sign in</a>
        </div>
      </div>
    </header>
  );
}
