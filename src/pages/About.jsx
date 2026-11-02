import heroAbout from '../assets/heroAbout.png';
import storyimg from '../assets/storyimg.png';
import { NavLink } from 'react-router-dom';
import AboutBrand from '../components/AboutBrand';
import brands from '../data/brands';

const About = () => {


    return (
        <>
            <section>
                <div className='about us'>
                    <h2>ABOUT US</h2>
                    <h4>Your Trusted Shopping Partner</h4>
                    <p>At ShopKart, we believe shopping should be simple, convenient, and enjoyable.
                        We bring you the best products, great deals, and a seamless experience — all in one place.</p>
                    <NavLink to={'/products'} className='btn'>Explore Now</NavLink>
                </div>
                <div className='imgs'>
                    <img src={heroAbout} alt='hero-img' />
                </div>
            </section >

            <section className='services'>
                <h2>Our Services</h2>
                <div className='Delivery'>
                    <h3>Fast & Reliable Delivery</h3>
                    <p>Get your favorite products delivered right to your doorstep.</p>
                </div>

                <div className='payment'>
                    <h3>Secure Payments</h3>
                    <p>Shop with confidence using our safe and trusted payment options.</p>
                </div>

                <div className='Support'>
                    <h3>24/7 Custom Supporter</h3>
                    <p>We're always here to help, whenever you need us.</p>
                </div>

                <div className='Quality'>
                    <h3>Premium Quality</h3>
                    <p>We offer only the best products from trusted brands.</p>
                </div>
            </section>

            <section>
                <div className='img-story'>
                    <img src={storyimg} alt='' />
                </div>
                <div className='story'>
                    <h2>OUR STORY</h2>
                    <h4>How ShopKart Began</h4>
                    <p>ShopKart was founded with a simple idea — to make online shopping better for everyone.
                        We noticed that while there were many options, customers often had to deal with complicated processes,
                        high prices, and unreliable service.</p>
                    <p>So, we created ShopKart — a platform that brings together great products, competitive prices,
                        and a smooth shopping experience, all under one roof.</p>
                    <p>More than just a store, we're your shopping partner. </p>
                </div>
            </section>

            <section className='brand'>
                <div className='brand-intro'>
                    <h2>Our Trusted Brands</h2>
                    <p>Shop your favorite products from brands you trust.</p>
                </div>

                <div className='brands'>
                    {brands.map(prod => (
                        <AboutBrand
                            image={prod.image}
                            name={prod.name}
                        />
                    ))}
                </div>

            </section>

            <section className='shopping-link'>
                <div className='shopping-link-content'>
                    <span className='shopping-link-eyebrow'>YOUR NEXT GREAT FIND</span>
                    <h2>Good finds. Great prices. <span>All in one place.</span></h2>
                    <p>From everyday essentials to little upgrades, discover products that make life better—without making shopping complicated.</p>
                    <div className='shopping-link-actions'>
                        <NavLink to={'/products'} className='btn'>Explore the collection <span aria-hidden='true'>→</span></NavLink>
                        <span className='shopping-link-note'>A better way to shop starts here.</span>
                    </div>
                </div>
                <div className='shopping-link-visual' aria-hidden='true'>
                    <div className='shopping-link-orbit'></div>
                    <div className='shopping-link-card'>
                        <span>SHOPKART PICKS</span>
                        <strong>Made for<br />your everyday.</strong>
                        <span className='shopping-link-card-footer'>Find your next favorite <span>↗</span></span>
                    </div>
                    <span className='shopping-link-tag'>Discover more</span>
                </div>
            </section>
        </>
    )
}

export default About

