import type { ReactNode } from 'react'
import Header from '../Header/Header'
import styles from './Layout.module.css'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  )
}