import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm();
    const navigate = useNavigate();

    const formSubmit = (data) => {
        alert('Login Successful')
        navigate('/home');
        reset();
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <input type="email"
                placeholder="Enter Email"
                {...register("email", {
                    required: 'Email is Required'
                })}
            />
            <br />
            {errors.email && <p>{errors.email.message}</p>}

            <input type="password"
                placeholder="Enter Password"
                {...register("password", {
                    required: 'Password is Required',
                    minLength: {
                        value: 8,
                        message: 'Minimum 8 Charecter Required'
                    }
                })}
            />
            <br />
            {errors.password && <p>{errors.password.message}</p>}

            <button type='submit'>Login</button>
            <button type='button' onClick={() => reset()}>
                Clear
            </button>
            <div className="reg-link d-flex">
                <p>Don't have an account?</p>
                <Link to='/register'>Register</Link>
            </div>
        </form>
    )
}
export default Login;