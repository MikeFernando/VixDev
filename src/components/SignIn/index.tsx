import { useState, FormEvent, useContext } from "react";
import { ActivitiesContext } from "../../context/ActivitiesContext";

import styles from './styles.module.scss';

export function SignIn() {
  const { login } = useContext(ActivitiesContext);

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password
    }

    await login(data);
  }

  return(
    <main className={styles.container}>
      <section className={styles.content}>
        <h1>VixDev</h1>
        <div>
          <form className={styles.form_signin} onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type="submit">
              Entrar
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
