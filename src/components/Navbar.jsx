import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import logo from "../assets/navbar-logo.png";

const Navbar = () => {
    const { theme, dispatch } = useContext(ThemeContext);

    return (
        <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/" aria-label="ShopKart home">
                <img className="navbar-logo" src={logo} alt="ShopKart" />
            </NavLink>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search products..." />
                <button className="btn btn-dark" type="button">Search</button>
            </div>
            <ul className="navbar-nav ml-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <button
                    className="theme-toggle"
                    type="button"
                    onClick={() => dispatch({ type: "TOGGLE" })}
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                >
                    {theme === "dark" ? "Light" : "Dark"}
                </button>
            </ul>
        </nav>
    );
};

export default Navbar;