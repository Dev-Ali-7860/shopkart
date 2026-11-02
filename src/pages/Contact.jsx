import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm();

    function formSubmit() {
        alert(`✅ Thank you for contacting ShopKart!
                    Your message has been submitted successfully.
                    Our team will get back to you soon.`);
        reset();
    }
    return (
        <section className='contact-info'>
            <div className='info'>
                <div className='heading'>
                    <h2>Contact Information</h2>
                    <h3>We'd Love to Hear From You</h3>
                </div>

                <div className='body'>
                    <p><i className="fa-brands fa-whatsapp"></i> Chat</p>
                    <p>+91 90909 09090</p>
                    <p>1800 00 1800</p>
                    <p><i className="fa-solid fa-phone"></i> Call</p>
                    <p><i className="fa-solid fa-briefcase"></i>Office</p>
                    <p>ShopKart Pvt. Ltd.<br />
                        Office No. 402, Business Square, <br />
                        Baner Road, Pune, Maharashtra 411045, India.<br />
                        Phone: +91 98765 43210<br />
                        Email: info@auctionvistas.com</p>
                </div>

                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.75965574005!2d73.85529461076874!3d18.449218582558142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb00109c8a5d%3A0xdcdbaea7c651f7cd!2sItvedant%20-%20Katraj!5e0!3m2!1sen!2sin!4v1792996250635!5m2!1sen!2sin"></iframe>
                </div>

                <div className='links-social'>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-telegram"></i>
                </div>
            </div>

            <div className='form-contact'>
                <form onSubmit={handleSubmit(formSubmit)}>
                    <p>Send Us a Message ------</p>
                    <label>Full Name</label>
                    <input type='text'
                        placeholder='Enter Your Name'
                        autoFocus
                        {...register('fullName', {
                            required: 'Full Name is Required'
                        })}
                    />
                    <br /> {errors.fullName && <p>{errors.fullName.message}</p>}

                    <label>Email Address</label>
                    <input type='email'
                        placeholder='Enter Your email'
                        {...register('email', {
                            required: 'Email is Required',
                            pattern: {
                                value: /^[A-Za-z0-9]+@gmail\.com$/,
                                message: 'Please enter a valid email address (e.g., name@example.com).'
                            }
                        })}
                    />
                    <br /> {errors.email && <p>{errors.email.message}</p>}

                    <label>Phone Number</label>
                    <input type='tel'
                        placeholder='Enter Your Phone Number'
                        {...register('phone', {
                            required: 'Phone Number is Required',
                            pattern: {
                                value: '[6-9][0-9]{9}',
                                message: 'Please enter a valid 10-digit Indian mobile number.'
                            }
                        })}
                    />
                    <br /> {errors.phone && <p>{errors.phone.message}</p>}

                    <label>Subject</label>
                    <select id="subject" className="form-select" defaultValue="" required>
                        <option value="" disabled>
                            Select a subject
                        </option>
                        <option>Payment Issues</option>
                        <option>Shipping & Delivery</option>
                        <option>Returns & Refunds</option>
                        <option>Product Inquiry</option>
                        <option>Account Issues</option>
                        <option>Technical Support</option>
                        <option>Other</option>
                    </select>

                    <label>Message</label>
                    <textarea rows="5"
                        placeholder='Type your message here...'
                        {...register('message', {
                            min: {
                                value: 500,
                                message: 'Your message cannot exceed 500 characters.'
                            }
                        })}
                    />
                    <br /> {errors.message && <p>{errors.message.message}</p>}

                    <button type='submit'>Submit Enquiry</button>
                    <button onClick={() => reset()} type='button'>Clear</button>
                </form>
            </div>
        </section>
    )
}

export default Contact