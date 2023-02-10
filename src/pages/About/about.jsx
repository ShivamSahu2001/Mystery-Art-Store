import React from "react";
import "./about.css";
import { useNavigate } from "react-router-dom";
import product10 from "./Assets/10.webp";
import product11 from "./Assets/11.webp";
import product12 from "./Assets/12.webp";

export const About = () => {
  const navigate = useNavigate();
  return (
  <div className="About-page">
    <h1> <em><u> The world of Arts</u></em></h1>
    <h3>“Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn’t really do it, they just saw something. It seemed obvious to them after a while. ”</h3>
    <h2 >~ Steve Jobs </h2>
    <div className="Image">
      <article className="product10" style={{ backgroundImage: `url(${product10})` }}>
        <h1 className="product10_text">“The object of art is not to reproduce reality, but to create a reality of the same intensity.”</h1>
      </article>
      <article className="product11" style={{ backgroundImage: `url(${product11})` }}>
        <h1 className="product11_text">"Painting is just another way of keeping a diary."</h1>
      </article>
      <article className="product12" style={{ backgroundImage: `url(${product12})` }}>
        <h1 className="product12_text1">“Every artist dips his brush in his own soul, and paints his own nature into his pictures.”</h1>
        <h1 className="product12_text2">“Color is the place where our brain and the universe meet.”</h1>
      </article>
    </div>
    <h3>“We cannot measure the influence that one or another artist has upon the child’s sense of beauty, upon his power of seeing, as in a picture, the common sights of life:
        he is enri ched more than we know in having really looked at a single picture.”</h3>
    <h2>~ Charlotte Mason</h2>

    <div className="GoForShop">
      <img className="ClickMe" onClick={() => navigate("/")} src={require('./Assets/13.png')} alt="ClickMe" />
      <div className="ForShopping">for shopping...</div>
    </div>
  </div>
)};