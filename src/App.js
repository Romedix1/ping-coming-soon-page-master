import React from 'react';
import ReactDOM from 'react-dom';
import favicon from './images/favicon-32x32.png';
import logo from './images/logo.svg'
import mainImg from './images/illustration-dashboard.png'
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  
  const EMAIL_REGEX_VALIDATION = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;

    const { 
      register, 
      handleSubmit, 
      watch, 
      formState: { errors } 
    } = useForm();

    const onSubmit = (data) =>{
      console.log(data)
    }

  return (
    <>
    <nav className='nav'>
      <img className='nav-logo' src={logo} alt='main logo' />
    </nav>

    <main className='main-section'>
      <header class='header-section'>
        <h1>We are launching <span className='h1-element'>soon!</span></h1>
        <p>Subscribe and get notified</p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='email' placeholder='Your email address...' 
        {...register("email", {
          required: true,
          pattern: EMAIL_REGEX_VALIDATION,
        })}
        />
        {
          errors.email && (
          <p className='error'>Please enter a valid email address</p>
          )}

        <input type="submit" value="Notify Me" />
      </form>
      
      <section className='img-section'>
        <img className='main-img' src={mainImg} alt='main img' />
      </section>
    </main>

    <footer>
      <section className='icon-section'>

          <svg className='footer-icon' xmlns="http://www.w3.org/2000/svg" fill='#4f7df2'  viewBox="0 0 50 50" ><path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"/></svg>
          <svg className='footer-icon' xmlns="http://www.w3.org/2000/svg" fill='#4f7df2'  viewBox="0 0 55 55" ><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/></svg>
          <svg className='footer-icon' xmlns="http://www.w3.org/2000/svg" fill='#4f7df2'  viewBox="0 0 50 50" ><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg>

      </section>

     <p className='copyright'>&copy; Copyright Ping. All rights reserved.</p>
    </footer>
    </>
  );
}

export default App;
