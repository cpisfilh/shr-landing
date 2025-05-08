import './App.css'
import Banner from './components/banner/Banner'
import ImagesGrid from './components/grid-fotos/ImagesGrid'
import Navbar from './components/nav/Navbar'
import UsSection from './components/nosotros/UsSection'
import InfoProyecto from './components/primer-proyecto/InfoProyecto'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <UsSection />
      <InfoProyecto />
      <ImagesGrid />
    </>
  )
}

export default App
