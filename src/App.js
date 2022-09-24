import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
	return (
		<div>
			<div>
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
