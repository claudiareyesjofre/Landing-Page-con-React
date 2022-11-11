import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
		<Navbar/>
		<div className="container my-5">
			<Jumbotron/>
		</div>
		<div className="row my-5">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>


		</div>
	);
};

export default Home;
