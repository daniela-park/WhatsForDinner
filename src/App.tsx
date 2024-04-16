import { useState } from 'react'
import dinnerLogo from './assets/Dinner.png'
import './App.css'

function App() {
  const [randomDishIndex, setRandomDishIndex] = useState(0)

  const dishes = [
    {
      dishName: "...",
      dishImg: "src/assets/DishesIcon/dish.png"
    },
    {
      dishName: "bibimbap",
      dishImg: "src/assets/DishesIcon/bibimbap.png"
    },
    {
      dishName: "cauliflower gochujang",
      dishImg: "src/assets/DishesIcon/cauliflower.png"
    },
    {
      dishName: "japchae",
      dishImg: "src/assets/DishesIcon/japchae.png"
    },
    {
      dishName: "prato feito",
      dishImg: "src/assets/DishesIcon/pf.png"
    },
    {
      dishName: "heart of palm moqueca",
      dishImg: "src/assets/DishesIcon/moqueca.png"
    },
    {
      dishName: "coco & pepe pasta",
      dishImg: "src/assets/DishesIcon/coco-and-pepe-pasta.png"
    },
    {
      dishName: "creamy mushroom risotto",
      dishImg: "src/assets/DishesIcon/risotto.png"
    },
    {
      dishName: "pizza",
      dishImg: "src/assets/DishesIcon/pizza.png"
    },
    {
      dishName: "vegetable lasagna",
      dishImg: "src/assets/DishesIcon/lasagna.png"
    },
    {
      dishName: "miso aubergine",
      dishImg: "src/assets/DishesIcon/aubergine.png"
    },
    {
      dishName: "sushi",
      dishImg: "src/assets/DishesIcon/sushi.png"
    },
    {
      dishName: "soupy noodle",
      dishImg: "src/assets/DishesIcon/noodles.png"
    },
    {
      dishName: "chilli sen carne",
      dishImg: "src/assets/DishesIcon/chilli-sen-carne.png"
    },
    {
      dishName: "corn fritter",
      dishImg: "src/assets/DishesIcon/corn-fritter.png"
    },
    {
      dishName: "menemen",
      dishImg: "src/assets/DishesIcon/menemen.png"
    },
    {
      dishName: "dumplings",
      dishImg: "src/assets/DishesIcon/dumplings.png"
    },
    {
      dishName: "burger",
      dishImg: "src/assets/DishesIcon/burger.png"
    },
    {
      dishName: "McD",
      dishImg: "src/assets/DishesIcon/mcdonalds.png"
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
