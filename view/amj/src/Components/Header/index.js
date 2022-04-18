import "./Header.css";
import { Link } from "react-router-dom";
import useDarkMode from 'use-dark-mode';

function Header(){
    const darkMode = useDarkMode(false);

    return(
    <div>
        <div className="header">
            <Link to={"/"}   style={{ textDecoration: 'none', color: "#ffffff" }}> <h1>Mohammed Adam</h1> </Link>

            <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      {/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
        </div>
    </div>
    
    );
}

export default Header;