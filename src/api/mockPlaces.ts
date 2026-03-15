export type Place = {
  id: number
  city: string
  country: string
  image: string
}

export const mockPlaces: Place[] = [
  {
    id: 1,
    city: 'Киото',
    country: 'Япония',
    image: '/images/kyoto.jpg',
  },
  {
    id: 2,
    city: 'Нью-Йорк',
    country: 'США',
    image: '/images/new-york.jpg',
  },
  {
    id: 3,
    city: 'Святой Стефан',
    country: 'Черногория',
    image: '/images/sveti-stefan.jpg',
  },
]