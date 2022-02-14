import { useState } from "react";
import memeData from "../memeData";

export default function Meme(props) {
  let [meme, setMeme] = useState({
    id: "1",
    topText: "shut up",
    bottomText: "take my money",
    image: "https://i.imgflip.com/1bij.jpg",
  });

  function handleOnClick() {
    const aMemes = memeData.data.memes;
    const randomIndex = Math.floor(Math.random() * aMemes.length);
    const newImageUrl = aMemes[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      image: newImageUrl,
    }));
  }

  return (
    <section>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top text"></input>
        <input type="text" className="form--input" placeholder="Bottom text"></input>
      </div>
      <button className="form--button" onClick={handleOnClick}>
        Get a new meme image 🖼
      </button>
      <img src={meme.image} alt="meme" className="meme--image"></img>
    </section>
  );
}
