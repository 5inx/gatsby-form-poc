import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import styles from "./form-page-2.module.css";

const FormPageTwo = ({ location }) => (
  <Layout>
    <div className={styles.formWrapper}>
    <h1>Step Two</h1> 
      <form>
        <p className={styles.playText}>Your chosen postcode is {location.state.name}</p>
        <p className={styles.playText}>Yout date of bith is {location.state.name}</p>
        <div className={styles.inputWrapper}>
          <select className={styles.titleField} type="text" placeholder="Title">
            <option value="Mr">Mr</option>
            <option value="Miss">Miss</option>
            <option value="Mrs">Mrs</option>
            <option value="x">X</option>
          </select>
          <input className={styles.inputField} type="text" placeholder="Full Name"></input>
          <input className={styles.inputField} type="text" placeholder="Email"></input>
          <input className={styles.inputField} type="text" placeholder="Phone Number"></input>
        </div>
        <button navigate to="/form/" className={styles.backButton}>Back</button>
        <button className={styles.pageOneButton}>Continue</button>
      </form>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default FormPageTwo;
