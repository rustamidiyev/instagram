import React, { useState } from 'react'
import styles from "./Sign.module.css"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
// import {auth} from "../../../../components/lo/"
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, firestore } from '../../../lib/firebase';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
  var navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNj2neyxX6xCcoiQLdU8IzlbZNT6PQ2nsQab0-MzEwgTllwCCrosZ8IrEmjXd9-923wLg&usqp=CAU"
      });
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(false);
      const createUser = async (event) => {
        event.preventDefault()
        try {
          setLoading(true);
        //   console.log(formData);
    
          // Create user
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
          );
          
          // Add user data to Firestore
          const usersData = {
            userId:auth.currentUser.uid,
            userPhoto: data.photo,
            userName: data.name,
            userEmail: data.email,
          };
          const usersRef = collection(firestore, 'Users');
          await addDoc(usersRef, usersData);
    
          // Update user profile
          await updateProfile(auth.currentUser, {
            displayName: data.name,
            photoURL: data.photo,
          });
    
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
        <form className={styles.form} onSubmit={createUser}>
        <input
            className={styles.input}
            type='text'
            placeholder='Full Name'
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
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
          <Button className={styles.button} htmlType='submit' loading={loading} type='submit'>Sign</Button>
        </form>
      </div>
    </div>
    <div className={styles.option}>
      <p>
        Already have an account? <a href='/'>Login</a>
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

export default Sign