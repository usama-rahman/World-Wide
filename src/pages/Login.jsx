import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty👀");

  const { login, isAutenticated } = useAuth;
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();

    if (email && password) {
      login(email, password);
    }
  }

  useEffect(
    function () {
      if (isAutenticated) navigate("/app", { replace: true });
    },
    [isAutenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary" onClick={handelSubmit}>
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
