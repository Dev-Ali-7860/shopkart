import React from 'react'

const AboutBrand = ({ image, name }) => {
    return (
        <div>
            <img src={image} alt='brand-name' />
            <h5>{name}</h5>
        </div>
    )
}

export default AboutBrand
