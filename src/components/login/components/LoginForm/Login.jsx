import React, { useState } from 'react'
import styles from "./LoginForm.module.css"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../lib/firebase';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
const Login = () => {
  var navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: "",
      });
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(false);
      const createUser = async (event) => {
        event.preventDefault()
        try {
          setLoading(true);
        //   console.log(formData);
    
          // Create user
          const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
          
    
    
          setLoading(false);
          // Handle success, e.g., redirect or display a success message
          console.log('User created successfully:', userCredential.user);
        } catch (error) {
          setLoading(false);
          navigate("/")
          setError(error.message);
          // Handle error, e.g., display an error message to the user
          console.error('Error creating user:', error.message);
        }
      };
  return (
    <div className={styles.my_register}>
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.logo}>Instagram</h1>
        <div>
          <hr />
          <p>OR</p>
          <hr />
        </div>
      </div>
      <div className={styles.container}>
        <form onSubmit={createUser} className={styles.form}>
       
          <input
            className={styles.input}
            type='text'
            placeholder='Email'
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            className={styles.input}
            type='password'
            placeholder='Password'
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <Button className={styles.button} htmlType='submit' type='submit'>Login</Button>
        </form>
      </div>
    </div>
    <div className={styles.option}>
      <p>
        Don't have an account? <a href='/sign'>Sign up</a>
      </p>
    </div>
    <div className={styles.otherapps}>
      <p>Get the app.</p>
      <button type='button'>
        <i className='fab fa-apple'></i> App Store
      </button>
      <button type='button'>
        <i className='fab fa-google-play'></i> Google Play
      </button>
    </div>
    <div className='footer'>
      <p>© 2020 PICTUREGRAM</p>
    </div>
  </div>
  )
}

export default Login