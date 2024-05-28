import './App.css'
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="forms" onSubmit={handleSubmit(onSubmit)}>
      <h1 className='tittle-form'>REGISTER</h1>
      <div className='div-form'>
        <label className='label'>Username</label>
        <input 
          className="form-fields" 
          type="text" 
          placeholder="Username" 
          {...register("username", { required: "Username is required" })} 
        />
        {errors.username && <p className="error-message">{errors.username.message}</p>}
      </div>

      <div className='div-form'>
      <label className='label'>Email</label>
        <input 
          className="form-fields" 
          type="email" 
          placeholder="Email" 
          {...register("email", { 
            required: "Email is required", 
            pattern: { 
              value: /^\S+@\S+$/i, 
              message: "Invalid email address" 
            } 
          })} 
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className='div-form'>
      <label className='label'>Phone Number</label>
        <input 
          className="form-fields" 
          type="tel" 
          placeholder="Phone Number" 
          {...register("phoneNumb", { 
            required: "Phone number is required",  
            minLength: { value: 9, message: "Phone number must be at least 9 digits" }, 
            maxLength: { value: 13, message: "Phone number must be at most 13 digits" },
            pattern: { value: /^[0-9]+$/i, message: "Phone number must be a number" } 
          })} 
        />
        {errors.phoneNumb && <p className="error-message">{errors.phoneNumb.message}</p>}
      </div>

      <div className='div-form'>
      <label className='label'>Password</label>
        <input 
          className="form-fields" 
          type="password" 
          placeholder="Password" 
          {...register("password", { required: "Password is required" })} 
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}
      </div>

      <div className='div-form'>
      <label className='label'>Confirm Password</label>
        <input 
          className="form-fields" 
          type="password" 
          placeholder="Confirm Password" 
          {...register("confPassword", { 
            required: "Confirm password is required", 
            validate: (value) => value === watch("password") || "Passwords do not match" 
          })} 
        />
        {errors.confPassword && <p className="error-message">{errors.confPassword.message}</p>}
      </div>

      <input className="btn-submit" type="submit" value="Register"/>
    </form>
  );
}
