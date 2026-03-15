import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import styles from './HomePage.module.css'

export default function HomePage() {
  const [departureCountry, setDepartureCountry] = useState('')
  const [departureCity, setDepartureCity] = useState('')
  const [arrivalCountry, setArrivalCountry] = useState('')
  const [arrivalCity, setArrivalCity] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [arrivalDate, setArrivalDate] = useState('')
  const [peopleCount, setPeopleCount] = useState('')
  const [budget, setBudget] = useState('')
  const [interests, setInterests] = useState('')
  const [travelStyle, setTravelStyle] = useState('')
  const [generatedText, setGeneratedText] = useState('')
  const [error, setError] = useState('')

  const isFormValid =
    departureCountry.trim() !== '' &&
    departureCity.trim() !== '' &&
    arrivalCountry.trim() !== '' &&
    arrivalCity.trim() !== '' &&
    departureDate.trim() !== '' &&
    arrivalDate.trim() !== '' &&
    peopleCount.trim() !== '' &&
    budget.trim() !== '' &&
    interests.trim() !== '' &&
    travelStyle.trim() !== ''

  const start = departureDate ? new Date(departureDate) : null
  const end = arrivalDate ? new Date(arrivalDate) : null

  const diffDays =
    start && end
      ? Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
      : 0

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid) {
      setError('Пожалуйста, заполните все поля.')
      return
    }

    setError('')

    const result = `
Ранний выезд из ${departureCity || departureCountry} ${departureDate} — и вы в ${arrivalCity}. 
За ${diffDays} дней вы успеете познакомиться с атмосферой города, прогуляться по его центральным улицам 
и увидеть основные достопримечательности.

Поездка рассчитана на ${peopleCount} человек с ориентировочным бюджетом ${budget}. 
Формат путешествия — ${travelStyle}.

Мы подобрали маршрут, который соответствует вашим интересам: ${interests}. 
    `.trim()

    setGeneratedText(result)
  }

  const detailsState = {
    departureCountry,
    departureCity,
    arrivalCountry,
    arrivalCity,
    departureDate,
    arrivalDate,
    peopleCount,
    budget,
    interests,
    travelStyle,
    diffDays,
  }

  return (
    <Layout>
      <form className={styles.page} onSubmit={handleGenerate}>
        <section className={styles.topSection}>
          <div className={styles.leftTop}>
            <div className={styles.fromBlock}>
              <h2 className={styles.blockTitle}>Откуда</h2>
              <div className={styles.column}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Страна"
                  value={departureCountry}
                  onChange={(e) => setDepartureCountry(e.target.value)}
                />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Город"
                  value={departureCity}
                  onChange={(e) => setDepartureCity(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.toBlock}>
              <h2 className={styles.blockTitle}>Куда</h2>
              <div className={styles.column}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Страна"
                  value={arrivalCountry}
                  onChange={(e) => setArrivalCountry(e.target.value)}
                />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Город"
                  value={arrivalCity}
                  onChange={(e) => setArrivalCity(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.datesBlock}>
              <h2 className={styles.blockTitle}>Даты</h2>
              <div className={styles.column}>
                <input
                  className={styles.input}
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
                <input
                  className={styles.input}
                  type="date"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.smallField}>
                <h2 className={styles.blockTitle}>Кол-во человек</h2>
                <input
                  className={styles.input}
                  type="number"
                  placeholder="Например: 2"
                  value={peopleCount}
                  onChange={(e) => setPeopleCount(e.target.value)}
                />
              </div>

              <div className={styles.smallField}>
                <h2 className={styles.blockTitle}>Бюджет</h2>
                <input
                  className={styles.input}
                  type="number"
                  min={0}
                  step={10000}
                  placeholder="Например: 70000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className={styles.rightTop}>
            <div className={styles.styleBlock}>
              <h2 className={styles.blockTitle}>Стиль поездки</h2>
              <textarea
                className={styles.textarea}
                placeholder="Например: спокойный, комфорт"
                value={travelStyle}
                onChange={(e) => setTravelStyle(e.target.value)}
              />
            </div>

            <div className={styles.interestsBlock}>
              <h2 className={styles.blockTitle}>Интересы</h2>
              <textarea
                className={styles.textarea}
                placeholder="Еда, музеи, прогулки..."
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
              />
            </div>
          </div>
        </section>

        <div className={styles.submitSection}>
          <button className={styles.button} type="submit">
            Отправить
          </button>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <section className={styles.bottomSection}>
          <h2 className={styles.routeTitle}>Твой маршрут</h2>

          <div className={styles.resultBox}>
            {generatedText ? (
              <div className={styles.resultContent}>
                <p className={styles.resultText}>{generatedText}</p>

                <Link
                  to="/details"
                  state={detailsState}
                  className={styles.detailsLink}
                >
                  Подробнее
                </Link>
              </div>
            ) : (
              <p className={styles.placeholder}>
                После заполнения формы и нажатия на кнопку здесь появится готовый маршрут.
              </p>
            )}
          </div>
        </section>
      </form>
    </Layout>
  )
}