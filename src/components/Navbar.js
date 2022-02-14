import trollFace from "../images/Troll Face.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar--left">
        <img src={trollFace} alt="logo" className="navbar--logo" />
        <h3 className="navbar--title">Meme Generator</h3>
      </div>
      <h4 className="navbar--subtitle">React Course - Project 3</h4>
    </nav>
  );
}
