import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/navbar-logo.png';
import { useForm } from 'react-hook-form';

const Footer = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm();

    function formSubmit() {
        alert("Thank you for subscribing to ShopKart! 🎉 You’ll now receive the latest deals, exclusive offers, and exciting updates straight to your inbox.");
        reset();
    }
    return (
        <footer className='footer-section'>
            <section className='search-footer'>
                <div>
                    <h3>Never miss a closing bell</h3>
                    <p>Get ending-soon alerts and new rare listings in your inbox.</p>
                </div>

                <div className='newsletter-form'>
                    <input
                        type='email'
                        placeholder='Enter Email'
                        {...register("email", {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Za-z0-9]+@gmail\.com$/,
                                message: 'Gmail Format is Invalid'
                            }
                        })}
                    />
                    <br />
                    {errors.email && <p>{errors.email.message}</p>}
                        
                    <button type="button" onClick={handleSubmit(formSubmit)}>Subscribe</button>
                </div>
            </section>

            <section className='brand-details'>
                <div className='footer-brand'>
                    <div className='footer-brand-heading'>
                        <img src={logo} alt='ShopKart logo' />
                    </div>
                    <p>ShopKart is your one-stop destination for the latest trends, unbeatable deals, and everyday essentials.
                        Discover quality products, shop with confidence, and enjoy a seamless shopping experience—all in one place.</p>
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className='container-fluid Marketplace'>
                    <h4>Quick Links</h4>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to='/product'>Product</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>

                <div className='container-fluid Support'>
                    <h4>Customer Support</h4>
                    <p>Pune, Maharastra, India</p>
                    <p>support@shopkart.com</p>
                    <p>+91 98765 43210</p>
                    <p>Mon-sat: 9 AM - 7 PM</p>
                </div>

                <div className='container-fluid Company'>
                    <h4>Company</h4>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/terms'>Terms</NavLink>
                    <NavLink to='/policy'>Privacy Policy</NavLink>
                </div>
            </section>
            <hr></hr>



            <div className='copyright'>
                <p>© 2026 ShopKart. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
