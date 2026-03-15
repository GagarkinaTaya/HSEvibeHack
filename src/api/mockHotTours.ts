export type HotTour = {
  id: number
  title: string
  price: string
  image: string
}

export const mockHotTours: HotTour[] = [
  {
    id: 1,
    title: 'Kyoto Kokusai Hotel',
    price: 'тур от 75 тыс. р',
    image: '/images/kyoto-hotel.jpg',
  },
  {
    id: 2,
    title: 'Diwane Marrakech Hotel',
    price: 'тур от 300 тыс. р',
    image: '/images/marrakech-hotel.jpg',
  },
  {
    id: 3,
    title: 'Hotel Ritz Paris',
    price: 'тур от 90 тыс. р',
    image: '/images/ritz-paris.jpg',
  },
  {
    id: 4,
    title: 'Limak Eurasia Luxury Hotel Istanbul',
    price: 'тур от 35 тыс. р',
    image: '/images/istanbul-hotel.jpg',
  },
]