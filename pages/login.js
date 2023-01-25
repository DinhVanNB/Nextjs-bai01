import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";

export default function Login() {
  const router = useRouter();
  return (
    <div>
        <div class={styles.wrapper}>
            <div class={styles.formContent} >
                <h2>Login</h2>
                <form>
                    <input 
                        class={styles.input}
                        type="text"
                        id="login"
                        name="login"
                        placeholder="User Name"
                    />
                    <input 
                        class={styles.input}
                        type ="password"
                        id="password"
                        name="login"
                        placeholder="Pass Word" 
                    />
                    <buton
                        class={styles.button} 
                        type="submit"
                        onClick={()=>router.push("/")}
                    >
                        Log In
                    </buton>
                </form>
            </div>
        </div>
    </div>
   
  );
}