import { NavLink } from 'react-router-dom';
import corousal from '../assets/corousal.png';
import corousal3 from '../assets/corousal3.png';
import Clothing from '../assets/Clothing.png';
import shoes from '../assets/shoes.png';
import electronic from '../assets/electronic.png';
import accs from '../assets/accs.png';
import bags from '../assets/bags.png';

const Home = () => {
  return (
    <>
      <section className="home-carousel carousel slide" id="homeCarousel" data-bs-ride="carousel" data-bs-interval="5500">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Show men's fashion"></button>
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Show electronics sale"></button>
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Show handbag collection"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={corousal} alt="Men's seasonal fashion collection" className="home-carousel-image" />
            <div className="home-carousel-shade"></div>
            <div className="carousel-caption home-carousel-caption">
              <p className="home-carousel-eyebrow">The new season edit</p>
              <h1>Style that<br />speaks for you.</h1>
              <p className="home-carousel-description">Refresh your wardrobe with the latest in men’s fashion.</p>
              <p className="home-carousel-offer"><strong>30% OFF</strong><span>on men’s fashion</span></p>
              <NavLink to="/products" className="home-carousel-cta">Shop the collection <span aria-hidden="true">→</span></NavLink>
              <p className="home-carousel-terms">*Terms &amp; conditions apply</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src='https://images.stockcake.com/public/0/d/5/0d5b4194-5076-410f-96df-f3bbbc5b3fe9_large/tech-overload-display-stockcake.jpg' alt="Latest electronics including phones, cameras and laptops" className="home-carousel-image" />
            <div className="home-carousel-shade"></div>
            <div className="carousel-caption home-carousel-caption">
              <p className="home-carousel-eyebrow">Upgrade your everyday</p>
              <h1>Big tech.<br />Bigger savings.</h1>
              <p className="home-carousel-description">Discover gadgets that keep you one step ahead.</p>
              <p className="home-carousel-offer"><strong>35% OFF</strong><span>on phones, laptops &amp; cameras</span></p>
              <NavLink to="/products" className="home-carousel-cta">Shop electronics <span aria-hidden="true">→</span></NavLink>
              <p className="home-carousel-terms">Free delivery over ₹499 · Easy 7-day returns</p>
            </div>
          </div>

          <div className="carousel-item carousel-item--bags">
            <img src={corousal3} alt="The ShopKart handbag collection" className="home-carousel-image" />
            <div className="home-carousel-shade"></div>
            <div className="carousel-caption home-carousel-caption">
              <p className="home-carousel-eyebrow">A little something lovely</p>
              <h1>Carry your<br />own kind of style.</h1>
              <p className="home-carousel-description">Meet the handbags you’ll love, at prices you’ll love more.</p>
              <p className="home-carousel-offer"><strong>50% OFF</strong><span>on the handbag collection</span></p>
              <NavLink to="/products" className="home-carousel-cta">Shop handbags <span aria-hidden="true">→</span></NavLink>
              <p className="home-carousel-terms">*Terms &amp; conditions apply</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev" aria-label="Previous slide">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next" aria-label="Next slide">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </section>

      <section>
        <div className=' row category'>
          <div className='col-7'>
            <img src={electronic} alt='device' />
            <h3>Electronics</h3>
            <NavLink to={'/products'}>View More</NavLink>
          </div>

          <div className='col-5'>
            <img src={Clothing} alt='device' />
            <h3>Clothing</h3>
            <NavLink to={'/products'}>View More</NavLink>
          </div>
        </div>

        <div className=' row category'>
          <div className='col-5'>
            <img src={accs} alt='device' />
            <h3>Accessories</h3>
            <NavLink to={'/products'}>View More</NavLink>
          </div>

          <div className='col-4'>
            <img src={shoes} alt='device' />
            <h3> Shoes </h3>
            <NavLink to={'/products'}>View More</NavLink>
          </div>

          <div className='col-3'>
            <img src={bags} alt='device' />
            <h3>Bags</h3>
            <NavLink to={'/products'}>View More</NavLink>
          </div>
        </div>
      </section>

      <div className="home-benefits" aria-label="ShopKart benefits">
        <div><span className="benefit-icon">✦</span><span><strong>Good value</strong><small>Everyday prices you'll love</small></span></div>
        <div><span className="benefit-icon">♡</span><span><strong>Great selection</strong><small>Find something for everyone</small></span></div>
        <div><span className="benefit-icon">↗️</span><span><strong>Easy shopping</strong><small>Simple from browse to buy</small></span></div>
      </div>
    </>
  );
};

export default Home;
