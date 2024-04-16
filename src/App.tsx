import { useState } from 'react'
import dinnerLogo from './assets/Dinner.png'
import './App.css'

function App() {
  const [randomDishIndex, setRandomDishIndex] = useState(0)

  const dishes = [
    {
      dishName: "...",
      dishImg: "./assets/dish.png",
      imgAlt: "empty dish icon"
    },
    {
      dishName: "bibimbap",
      dishImg: "./assets/bibimbap.png",
      imgAlt: "bibimbap icon"
    },
    {
      dishName: "cauliflower gochujang",
      dishImg: "./assets/cauliflower.png",
      imgAlt: "cauliflower icon"
    },
    {
      dishName: "japchae",
      dishImg: "./assets/japchae.png",
      imgAlt: "japchae icon"
    },
    {
      dishName: "prato feito",
      dishImg: "./assets/pf.png",
      imgAlt: "prato feito icon"
    },
    {
      dishName: "heart of palm moqueca",
      dishImg: "./assets/moqueca.png",
      imgAlt: "moqueca icon"
    },
    {
      dishName: "coco & pepe pasta",
      dishImg: "./assets/coco-and-pepe-pasta.png",
      imgAlt: "pasta icon"
    },
    {
      dishName: "creamy mushroom risotto",
      dishImg: "./assets/risotto.png",
      imgAlt: "risotto icon"
    },
    {
      dishName: "pizza",
      dishImg: "./assets/pizza.png",
      imgAlt: "pizza icon"
    },
    {
      dishName: "vegetable lasagna",
      dishImg: "./assets/lasagna.png",
      imgAlt: "lasagna icon"
    },
    {
      dishName: "miso aubergine",
      dishImg: "./assets/aubergine.png",
      imgAlt: "aubergine icon"
    },
    {
      dishName: "sushi",
      dishImg: "./assets/sushi.png",
      imgAlt: "sushi icon"
    },
    {
      dishName: "soupy noodle",
      dishImg: "./assets/noodles.png",
      imgAlt: "noodles icon"
    },
    {
      dishName: "chilli sen carne",
      dishImg: "./assets/chilli-sen-carne.png",
      imgAlt: "rice bowl icon"
    },
    {
      dishName: "corn fritter",
      dishImg: "./assets/corn-fritter.png",
      imgAlt: "fritter icon"
    },
    {
      dishName: "menemen",
      dishImg: "./assets/menemen.png",
      imgAlt: "meneme icon"
    },
    {
      dishName: "dumplings",
      dishImg: "./assets/dumplings.png",
      imgAlt: "dumplings icon"
    },
    {
      dishName: "burger",
      dishImg: "./assets/burger.png",
      imgAlt: "burger icon"
    },
    {
      dishName: "McD",
      dishImg: "./assets/mcdonalds.png",
      imgAlt: "Happy meal icon"
    },
  ];

    const handleClick = () => {
      setRandomDishIndex(Math.floor(Math.random() * dishes.length));
    }

  return (
    <>
      <div>
        <img src={dinnerLogo} alt="Plate icon" height="250px" />
      </div>
      <div className="card">
        <button onClick={handleClick}>
          Click to generate a random dish!
        </button>
        <h1>Today's dinner is {dishes[randomDishIndex].dishName}!</h1>
        <img src={dishes[randomDishIndex].dishImg} alt={dishes[randomDishIndex].imgAlt} />
      </div>
    </>
  )
}

export default App
