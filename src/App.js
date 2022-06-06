import { Route, Routes } from 'react-router-dom'
import { Header} from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./components/Home/Home"

function App() {
  return (
		<div id="page-wrapper">
			<Header />
				<Routes>
					<Route path="/" element={<Home />}/>

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
