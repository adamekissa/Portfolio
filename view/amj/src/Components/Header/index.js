import "./Header.css";
import { Link } from "react-router-dom";

function Header(){

    return(
    <div>
        <div className="header">
            <Link to={"/"}   style={{ textDecoration: 'none', color: "#ffffff" }}> <h1>Mohammed Adam</h1> </Link>
        </div>
    </div>
    
    );
}

export default Header;