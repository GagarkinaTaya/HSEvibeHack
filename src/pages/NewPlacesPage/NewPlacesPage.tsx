import Layout from '../../components/Layout/Layout'
import { mockPlaces } from '../../api/mockPlaces'
import styles from './NewPlacesPage.module.css'

export default function NewPlacesPage() {
  return (
    <Layout>
      <section className={styles.grid}>
        {mockPlaces.map((place) => (
          <article key={place.id} className={styles.card}>
            <img
              className={styles.image}
              src={place.image}
              alt={`${place.city}, ${place.country}`}
            />

            <div className={styles.content}>
              <h2 className={styles.city}>{place.city},</h2>
              <p className={styles.country}>{place.country}</p>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  )
}