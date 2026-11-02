import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import logo from "../assets/navbar-logo.png";
import { useForm } from "react-hook-form";

const Navbar = () => {
    const { theme, dispatch } = useContext(ThemeContext);

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm();

    function formSubmit({ search }) {
        navigate(`/products?q=${encodeURIComponent(search.trim())}`);
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/" aria-label="ShopKart home">
                <img className="navbar-logo" src={logo} alt="ShopKart" />
            </NavLink>
            <form className="navbar-search" onSubmit={handleSubmit(formSubmit)}>
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search products..."
                    aria-invalid={Boolean(errors.search)}
                    aria-describedby={errors.search ? "navbar-search-error" : undefined}
                    {...register("search", {
                        required: "Please enter a product name to search.",
                        validate: value =>
                            value.trim() !== "" || "Search field cannot contain only spaces."
                    })}
                />
                <button className="btn btn-dark" type="submit">Search</button>
                {errors.search && (
                    <p className="navbar-search-error" id="navbar-search-error" role="alert">
                        {errors.search.message}
                    </p>
                )}
            </form>
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