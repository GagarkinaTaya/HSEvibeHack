import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import HotToursPage from '../pages/HotToursPage/HotToursPage'
import NewPlacesPage from '../pages/NewPlacesPage/NewPlacesPage'
import DetailsPage from '../pages/DetailsPage/DetailsPage'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hot-tours" element={<HotToursPage />} />
      <Route path="/new-places" element={<NewPlacesPage />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
    </Routes>
  )
}