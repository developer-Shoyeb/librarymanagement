import React from "react";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import { Route, Routes } from "react-router-dom";
const App = () => {
	return (
		<>
			<Nav />
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/add" element={<AddBook />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
