import Layout from '../../components/Layout/Layout'
import { mockHotTours } from '../../api/mockHotTours'
import styles from './HotToursPage.module.css'

export default function HotToursPage() {
  return (
    <Layout>
      <section className={styles.grid}>
        {mockHotTours.map((tour) => (
          <article key={tour.id} className={styles.card}>
            <img
              className={styles.image}
              src={tour.image}
              alt={tour.title}
            />

            <div className={styles.overlay}>
              <h2 className={styles.title}>{tour.title}</h2>
              <p className={styles.price}>{tour.price}</p>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  )
}