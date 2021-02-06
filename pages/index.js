import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import styles from '../components/layout.module.css'
import TextField from '@material-ui/core/TextField';

const login = async (headers) => {
  var res = await fetch('http://0.0.0.0:8080/login', {
  method: 'GET',
  headers: headers
});
res = await res.json();
const token = res.auth_token;
localStorage.setItem('Authorization', token);
_loginRedirect(res)
}

function _loginRedirect(res){
  if (res.status === 'success') {
    window.location.href = "http://localhost:3000/main/homePage"
  } else {
    alert("Login failed, please try again or sign up");
  }
}



const register = async (headers) => {
  var res = await fetch('http://0.0.0.0:8080/register', {
  method: 'POST',
  headers: headers
});
res = await res.json();

const token = res.auth_token;
localStorage.setItem('Authorization', token);
return res
}

export default function LoginPage() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <form>
          <div>
            <div className={styles.loginForm}>
              <TextField id="email-textbox" label="Email" variant="outlined" />
            </div>
            <div className={styles.loginForm}>
              <TextField id="login-textbox" label="Username" variant="outlined" />
            </div>
            <div className={styles.loginForm}>
              <TextField id="password-textbox" label="Password" variant="outlined" type="password" />
            </div>
          </div>
        </form>
          <Grid container className={utilStyles.grid} direction="row" justify="center" alignItems="center" spacing={100}>
            <Grid className={utilStyles.gridItemLogin} item xs={3}>
              <Button classname={utilStyles.signUpPageButton} onClick={() => {
                const myHeaders = new Headers();
                var emailEntered = document.getElementById("email-textbox").value;
                var usernameEntered = document.getElementById("login-textbox").value;
                var passwordEntered = document.getElementById("password-textbox").value;

                myHeaders.append('email', emailEntered);
                myHeaders.append('username', usernameEntered);
                myHeaders.append('password', passwordEntered);
                
                register(myHeaders);

                }} variant="contained">Sign up!</Button>

            </Grid>
            <Grid className={utilStyles.gridItemLogin} item xs={3}>
              <Button className={utilStyles.loginPageButton} onClick={() => {
                const myHeaders = new Headers();
                var emailEntered = document.getElementById("email-textbox").value;
                var usernameEntered = document.getElementById("login-textbox").value;
                var passwordEntered = document.getElementById("password-textbox").value;

                myHeaders.append('email', emailEntered);
                myHeaders.append('username', usernameEntered);
                myHeaders.append('password', passwordEntered);
                
                login(myHeaders);
                


            }} variant="contained">Login</Button>
            </Grid>
          </Grid>
      </section>
    </Layout>
  )
}
