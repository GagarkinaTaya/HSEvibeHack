import { Navigate, useLocation } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import styles from './DetailsPage.module.css'

type DetailsState = {
  departureCountry: string
  departureCity: string
  arrivalCountry: string
  arrivalCity: string
  departureDate: string
  arrivalDate: string
  peopleCount: string
  budget: string
  interests: string
  travelStyle: string
  diffDays: number
}

export default function DetailsPage() {
  const location = useLocation()
  const state = location.state as DetailsState | null

  if (!state) {
    return <Navigate to="/" replace />
  }

  const {
    departureCity,
    departureCountry,
    arrivalCity,
    departureDate,
    arrivalDate,
    peopleCount,
    budget,
    interests,
    travelStyle,
    diffDays,
  } = state

  const routeText = `
День 1: Знакомство с ${arrivalCity} (${departureDate})
Ранний выезд из ${departureCity || departureCountry} — и вы в ${arrivalCity}. 
По прибытии можно посвятить первую часть дня прогулке по центральной части города, знакомству с его атмосферой и основными достопримечательностями.
Этот день лучше провести в спокойном темпе, особенно если формат поездки — ${travelStyle}. 
Рекомендуем начать с самых узнаваемых мест, сделать остановку на завтрак или кофе и постепенно погрузиться в ритм города.

Во второй половине дня можно посетить культурные локации, музеи или старые улицы, которые лучше всего соответствуют вашим интересам: ${interests}. 
К вечеру — ужин в атмосферном месте и лёгкая прогулка.

День 2: Основные впечатления (${arrivalDate})
Следующий день стоит посвятить более глубокому знакомству с ${arrivalCity}. 
В зависимости от ваших предпочтений маршрут можно построить вокруг гастрономии, архитектуры, прогулок, музеев или локальных районов города.

Поездка рассчитана на ${peopleCount} человек с ориентировочным бюджетом ${budget}, поэтому маршрут лучше держать комфортным и реалистичным.
Если времени достаточно, можно добавить ещё 1–2 точки, но без перегрузки.

Итог поездки
Ваш маршрут рассчитан примерно на ${diffDays} дней и подойдёт для тех, кто хочет увидеть главное, сохранить комфортный темп и получить цельное впечатление от ${arrivalCity}.
Хорошего путешествия!
  `.trim()

  return (
    <Layout>
      <section className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.title}>Подробный маршрут</h1>

          <div className={styles.meta}>
            <p>
              <strong>Маршрут:</strong> {departureCity || departureCountry} → {arrivalCity}
            </p>
            <p>
              <strong>Даты:</strong> {departureDate} — {arrivalDate}
            </p>
            <p>
              <strong>Человек:</strong> {peopleCount}
            </p>
            <p>
              <strong>Бюджет:</strong> {budget}
            </p>
            <p>
              <strong>Стиль:</strong> {travelStyle}
            </p>
            <p>
              <strong>Интересы:</strong> {interests}
            </p>
          </div>

          <div className={styles.routeBox}>
            <p className={styles.routeText}>{routeText}</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}