

import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log("Navbar user:", user); // Debug log
  const handleLogin = () => {
    navigate('/login');



    




};

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking.SriLanka</span>
        </Link>
        
        {user ? user.username : (
          <div className="navItems">
            
            <button
                    type="button"
                    className="Loginbutton"
                    onClick={handleLogin}
                >
                    Login
                </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;


