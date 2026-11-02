import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

const Register = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const formSubmit = (data) => {
        alert('Registration Successful!');
        console.log(data);
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(formSubmit)}>

                <input
                    type='text'
                    placeholder='Enter Name'
                    autoFocus
                    {...register("name", {
                        required: 'Name is required'
                    })}
                />
                <br />
                {errors.name && <p>{errors.name.message}</p>}

                <input
                    type='email'
                    placeholder='Enter Email'
                    {...register("email", {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@gmail\.com$/,
                            message: 'Gmail Format is Invalid'
                        }
                    })}
                />
                <br />
                {errors.email && <p>{errors.email.message}</p>}

                <input
                    type='password'
                    placeholder='Enter Password'
                    {...register("password", {
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters long'
                        }
                    })}
                />
                <br />
                {errors.password && <p>{errors.password.message}</p>}

                <br />
                <button type='submit'>Register</button>
                <button type='button' onClick={() => reset()}>
                    Reset
                </button>
                <div className='main d-flex'>
                    <p>Already have an account?</p>
                    <Link  to='/login'>Login</Link>
                </div>

            </form>
        </div>
    )
}

export default Register