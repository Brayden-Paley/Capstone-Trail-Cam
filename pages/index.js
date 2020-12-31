import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../components/layout.module.css'
import TextField from '@material-ui/core/TextField';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <form>
          <div>
            <div className={styles.loginForm}>
              <TextField id="login-textbox" label="Username" variant="outlined" />
            </div>
            <div className={styles.loginForm}>
              <TextField id="password-textbox" label="Password" variant="outlined" />
            </div>
          </div>
        </form>
          <Grid container className={utilStyles.grid} direction="row" justify="center" alignItems="center" spacing={100}>
            <Grid className={utilStyles.gridItem} item xs={3}>
              <Button classname={utilStyles.loginPageButton} variant="contained">Sign up!</Button>
            </Grid>
            <Grid className={utilStyles.gridItem} item xs={3}>
              <Button classname={utilStyles.loginPageButton} variant="contained">Login</Button>
            </Grid>
          </Grid>


      </section>
    </Layout>
  )
}