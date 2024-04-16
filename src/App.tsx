import { useState } from 'react'
import dinnerLogo from './assets/Dinner.png'
import './App.css'

function App() {
  const [randomDishIndex, setRandomDishIndex] = useState(0)

  const dishes = [
    {
      dishName: "...",
      dishImg: "src/assets/dish.png"
    },
    {
      dishName: "bibimbap",
      dishImg: "src/assets/bibimbap.png"
    },
    {
      dishName: "cauliflower gochujang",
      dishImg: "src/assets/cauliflower.png"
    },
    {
      dishName: "japchae",
      dishImg: "src/assets/japchae.png"
    },
    {
      dishName: "prato feito",
      dishImg: "src/assets/pf.png"
    },
    {
      dishName: "heart of palm moqueca",
      dishImg: "src/assets/moqueca.png"
    },
    {
      dishName: "coco & pepe pasta",
      dishImg: "src/assets/coco-and-pepe-pasta.png"
    },
    {
      dishName: "creamy mushroom risotto",
      dishImg: "src/assets/risotto.png"
    },
    {
      dishName: "pizza",
      dishImg: "src/assets/pizza.png"
    },
    {
      dishName: "vegetable lasagna",
      dishImg: "src/assets/lasagna.png"
    },
    {
      dishName: "miso aubergine",
      dishImg: "src/assets/aubergine.png"
    },
    {
      dishName: "sushi",
      dishImg: "src/assets/sushi.png"
    },
    {
      dishName: "soupy noodle",
      dishImg: "src/assets/noodles.png"
    },
    {
      dishName: "chilli sen carne",
      dishImg: "src/assets/chilli-sen-carne.png"
    },
    {
      dishName: "corn fritter",
      dishImg: "src/assets/corn-fritter.png"
    },
    {
      dishName: "menemen",
      dishImg: "src/assets/menemen.png"
    },
    {
      dishName: "dumplings",
      dishImg: "src/assets/dumplings.png"
    },
    {
      dishName: "burger",
      dishImg: "src/assets/burger.png"
    },
    {
      dishName: "McD",
      dishImg: "src/assets/mcdonalds.png"
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
        <img src={dishes[randomDishIndex].dishImg} />
      </div>
    </>
  )
}

export default App
