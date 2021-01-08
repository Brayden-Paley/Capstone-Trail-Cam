import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

const name = 'View your pictures!'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
    
      <main>{children}</main>
    </div>
  )
}