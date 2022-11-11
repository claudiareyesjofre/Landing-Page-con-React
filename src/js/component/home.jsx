import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	const datos =[
		{
			titulo:"Echeveria chihuahuensis",
			descripcion:"es originaria de México, Posee hojas espatuladas bastante carnosas de 4 a 6 cm de largo. Sus hojas son color pastel con bordes rojizos y terminan en puntas rojas. Es de crecimiento lento y sus rosetas no superan los 10 cm de diametro. Sus flores son acampanadas de colores coral y amarillo en su parte interna. Aparecen en ramas de unos 20 cm. Suele confundirse con la Echeveria Beatrice aunque esta ultima tiene mayores dimensiones que la Chihuahuaensis. Deberemos evitar el contacto de sus hojas con la humedad del sustrato.",
			img:"https://todoparatuhuerta.com/wp-content/uploads/2021/01/Echeveria-chihuahuensis.jpg",
			color:"info"
		},
		{
			titulo:"Echeveria colorata",
			descripcion:" es originaria de México. La planta crece lentamente y se desarrolla formando rosetas, las plantas adultas pueden llegar a alcanzar cuarenta centímetros de diámetro. Las hojas son carnosas, ovaladas y puntiagudas, de color verde azulado pálido, debido a una capa similar a la cera de color blanquecino, que las cubre. Las hojas tienen los extremos rojizos o rosados, y se desarrollan de forma densa formando rosetas redondeadas. ",
			img:"https://cactusandes.cl/wp-content/uploads/2022/10/Echeveria_colorata_brandtii-scaled.jpg",
			color:"danger"
		},
		{
			titulo:"Echeveria Morning Beauty",
			descripcion:" Esta Echeveria tiene dos nombres, ‘Morning Beauty’ y Subsessilis, pero son una forma de la Echeveria Desmetiana. De pequeño tamaño, y sus hermosas hojas ten tonos pastel la vuelven una hermosa suculenta digna de cualquier colección.",
			img:"https://cactusandes.cl/wp-content/uploads/2022/01/echeveria_morning_beauty.jpg",
			color:"warning"
			
		}
	];
	return (
		<div className="container-fluid">
		<Navbar/>
		<div className="container my-5">
			<Jumbotron/>
		</div>
		<div className="d-flex justify-content-center my-5">
			{datos.map((objeto, posicion)=>{
				return(<Card 
					titulo={objeto.titulo} 
					descripcion={objeto.descripcion}
					 img={objeto.img} color={objeto.color}/>)
			})}
		</div>
        <Footer/>
		</div>
	);
};

export default Home;
