import { Link } from "react-router-dom";
function About(){
  return (
    <div className="box">
      <div className="about">
            <div>
            <h1 className="head">About Us</h1>
        <p>
          Founded in <span>2018</span>, Leviora started as a small online store with a vision to transform the way people shop. What began as a single-product brand has grown into a global marketplace, offering a wide range of high-quality products – from fashion and accessories to electronics and home essentials.
        </p>
        <p>
          Leviora was born out of a passion for making premium products accessible to everyone. Our journey started with a mission to bridge the gap between affordability and quality, and over the years, we have stayed true to that promise.
        </p>
        <p>
          Today, with over <span>500,000 satisfied customers</span>, Leviora continues to expand its product range, collaborate with emerging designers, and implement innovative solutions to redefine online shopping.
        </p>
        <div className="center">
          <Link to="../shop">
          <button className="btn btn-warning extra">Explore Our Collection</button>
          </Link>
        </div>
            </div>
      </div>
    </div>
  );
};

export default About;




