import React, { useState } from "react";
import { Link } from "gatsby";
import { navigate } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import styles from "./form.module.css";

const FormPage = () => {
  
  const [name, setName] = useState('');
    const handleInput = (e) => {
      setName(e.target.value);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      navigate('/form-page-2/', { state: { name }})
    };

  return (
    <Layout>
      <div className={styles.formWrapper}>
      <h1>Play</h1> 
        <form onSubmit={handleSubmit}>
          <p className={styles.playText}>
            To start we need the postcode you will playing with and your date of birth
          </p>
          <div className={styles.inputWrapper}>
            <input className={styles.inputField} onChange={(e) => handleInput(e)} type="text" placeholder="Postcode"></input>
            <input className={styles.inputField} onChange={(e) => handleInput(e)} type="date" placeholder="Date of Birth"></input>
          </div>
          <button type="submit" className={styles.pageOneButton}>Continue</button>
        </form>
      <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default FormPage;
