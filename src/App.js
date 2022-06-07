import { Route, Routes } from 'react-router-dom'
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./components/Home/Home"
import { Events } from "./components/Events/Events"
import { Contacts } from "./components/Contacts/Contacts"
import EventSingle from './components/EventSingle/EventSingle'
import MainMenu from './components/Menu/MainMenu'
import SoftDrinksMenu from './components/Menu/SoftDrinksMenu'
import PhotoGallery from './components/PhotoGallery'


function App() {
  return (
		<div id="page-wrapper">
			<Header />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/main-menu" element={<MainMenu />}/>
					<Route path="/soft-drinks-menu" element={<SoftDrinksMenu />}/>
					<Route path="/events" element={<Events />}/>
					<Route path="/event-single/" element={<EventSingle />}/>
					<Route path="/photo-gallery" element={<PhotoGallery />}/>
					<Route path="/contacts" element={<Contacts />}/>	
				</Routes>
			<Footer />

		</div>

  );
}

export default App;
