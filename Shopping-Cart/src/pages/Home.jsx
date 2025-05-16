import { Link } from "react-router-dom";

function Home(){

    return(<>
    <div className="imgContainer">
        <Link to="./shop">
        <button className="ShopNowBtn btn btn-danger">Click Here To Shop Now!</button>
        </Link>
    </div>

    </>);
}
export default Home;

