import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const Login = () => {

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    let signinError;
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user || userGoogle);

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])


    if (user || userGoogle) {
        navigate(from, { replace: true });
    }

    if (loading || loadingGoogle) {
        return <Loading></Loading>
    }

    if (error || errorGoogle) {
        signinError = <p className='text-red-600'>{error?.message || errorGoogle.message} </p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold uppercase">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Pssword</span>
                            </label>
                            <input type="password" placeholder="Your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        <input className='btn w-full max-w-xs text-white btn-secondary' type="submit" value="Login" />
                        {signinError}
                    </form>
                    <p><small>New to Doctors Portal? <Link className='text-secondary font-semibold' to="/register">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-secondary hover: text-white"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login; <h1>login</h1>