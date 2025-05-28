import './App.css'
import Banner from './components/banner/Banner'
import ContactUs from './components/contact/ContactUs'
import Footer from './components/footer/Footer'
import ImagesGrid from './components/grid-fotos/ImagesGrid'
import Navbar from './components/nav/Navbar'
import UsSection from './components/nosotros/UsSection'
import InfoProyecto from './components/primer-proyecto/InfoProyecto'
import UpButton from './components/util/UpButton'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <UsSection />
      <div id="proyecto" className='bg-white text-[#226752] flex flex-col md:flex-row items-center justify-center px-2 pt-[60px] md:px-20'>
        <h1 className='text-5xl text-center font-bold'>... y este es nuestro proyecto principal</h1>
      </div>

      <InfoProyecto />
      <ImagesGrid />
      <ContactUs />
      <Footer />
      <UpButton />
    </>
  )
}

export default App
