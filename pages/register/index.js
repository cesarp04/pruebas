import Link from 'next/link';
import styles from './register.module.scss';

const Register = () => {
  return <div className={styles.register}>
      <Link href="/"><a className={styles.register__logo}></a></Link>
      <div className={styles.register__main}>
        <h1>Registrese a GritReaders</h1>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Contraseña"></input>
        <button>Sign Up</button>
      </div>
    </div>;
};

export default Register;