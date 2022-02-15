import { useState, useEffect } from "react";

export default function Meme(props) {
  const [allMemes, setAllMemes] = useState([]);
  let [meme, setMeme] = useState({
    topText: "shut up",
    bottomText: "take my money",
    image: "https://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((response) => response.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

  function handleOnClick() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const newImageUrl = allMemes[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      image: newImageUrl,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <section>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        ></input>
      </div>
      <button className="form--button" onClick={handleOnClick}>
        Get a new meme image 🖼
      </button>
      <div className="meme">
        <div className="meme--image">
          <img src={meme.image} alt="meme"></img>
        </div>
        <h2 className="top meme--text">{meme.topText}</h2>
        <h2 className="bottom meme--text">{meme.bottomText}</h2>
      </div>
    </section>
  );
}
