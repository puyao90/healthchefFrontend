import logo from "../assets/logo.png";
import smileface from "../assets/icon/smileface.svg";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      {/* <img
        src={logo}
        alt="A canvas"
        className="mb-8 w-44 h-44 object-contain"
      /> */}
      <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">
        Health Chef
      </h1>
      <div className="search">
        <button className="w-6">
          <img src={smileface} alt="" />
        </button>
      </div>
      <nav>
        <div>
          <a href="">Home</a>
        </div>
        <div>
          <a href="">Recipes</a>
        </div>
      </nav>
      <div className="signIn">
        <img className="w-6" src={smileface} alt="" />
        <a href="">Sign in</a>
      </div>
      {/* <p className="text-stone-500">A community of artists and art-lovers.</p> */}
    </header>
  );
}
