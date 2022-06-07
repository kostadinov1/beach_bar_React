import { Route, Routes } from 'react-router-dom'
import { Header} from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./components/Home/Home"
import { Events } from "./components/Events/Events"
import EventSingle from './components/EventSingle/EventSingle'
import { Contacts } from "./components/Contacts/Contacts"
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
		
				<script src="assets/js/jquery.min-1.js"></script>
				<script src="assets/js/jquery.dropotron.min.js"></script>
				<script src="assets/js/jquery.scrolly.min.js"></script>
				<script src="assets/js/jquery.scrollex.min.js"></script>
				<script src="assets/js/browser-1.min.js"></script>
				<script src="assets/js/breakpoints-1.min.js"></script>
				<script src="assets/js/util-1.js"></script>
				<script src="assets/js/main-1.js"></script>
		</div>

  );
}

export default App;
