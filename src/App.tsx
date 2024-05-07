import { useState } from 'react'
import dinnerLogo from './assets/Dinner.png'
import emptyDishIcon from "./assets/dish.png"
import bibimbapIcon from "./assets/bibimbap.png"
import cauliflowerIcon from "./assets/cauliflower.png"
import japchaeIcon from "./assets/japchae.png"
import pratoFeitoIcon from "./assets/pf.png"
import moquecaIcon from "./assets/moqueca.png"
import pastaIcon from "./assets/coco-and-pepe-pasta.png"
import risottoIcon from "./assets/risotto.png"
import pizzaIcon from "./assets/pizza.png"
import lasagnaIcon from "./assets/lasagna.png"
import aubergineIcon from "./assets/aubergine.png"
import sushiIcon from "./assets/sushi.png"
import noodlesIcon from "./assets/noodles.png"
import riceBowlIcon from "./assets/chilli-sen-carne.png"
import fritterIcon from "./assets/corn-fritter.png"
import menemenIcon from "./assets/menemen.png"
import dumplingsIcon from "./assets/dumplings.png"
import burgerIcon from "./assets/burger.png"
import happyMealIcon from "./assets/mcdonalds.png"
import './App.css'

function App() {
  const [randomDishIndex, setRandomDishIndex] = useState(0)

  const dishes = [
    {
      dishName: "...",
      dishImg: emptyDishIcon,
      imgAlt: "empty dish icon"
    },
    {
      dishName: "bibimbap",
      dishImg: bibimbapIcon,
      imgAlt: "bibimbap icon"
    },
    {
      dishName: "cauliflower gochujang",
      dishImg: cauliflowerIcon,
      imgAlt: "cauliflower icon"
    },
    {
      dishName: "japchae",
      dishImg: japchaeIcon,
      imgAlt: "japchae icon"
    },
    {
      dishName: "prato feito",
      dishImg: pratoFeitoIcon,
      imgAlt: "prato feito icon"
    },
    {
      dishName: "heart of palm moqueca",
      dishImg: moquecaIcon,
      imgAlt: "moqueca icon"
    },
    {
      dishName: "coco & pepe pasta",
      dishImg: pastaIcon,
      imgAlt: "pasta icon"
    },
    {
      dishName: "creamy mushroom risotto",
      dishImg: risottoIcon,
      imgAlt: "risotto icon"
    },
    {
      dishName: "pizza",
      dishImg: pizzaIcon,
      imgAlt: "pizza icon"
    },
    {
      dishName: "vegetable lasagna",
      dishImg: lasagnaIcon,
      imgAlt: "lasagna icon"
    },
    {
      dishName: "miso aubergine",
      dishImg: aubergineIcon,
      imgAlt: "aubergine icon"
    },
    {
      dishName: "sushi",
      dishImg: sushiIcon,
      imgAlt: "sushi icon"
    },
    {
      dishName: "soupy noodle",
      dishImg: noodlesIcon,
      imgAlt: "noodles icon"
    },
    {
      dishName: "chilli sen carne",
      dishImg: riceBowlIcon,
      imgAlt: "rice bowl icon"
    },
    {
      dishName: "corn fritter",
      dishImg: fritterIcon,
      imgAlt: "fritter icon"
    },
    {
      dishName: "menemen",
      dishImg: menemenIcon,
      imgAlt: "meneme icon"
    },
    {
      dishName: "dumplings",
      dishImg: dumplingsIcon,
      imgAlt: "dumplings icon"
    },
    {
      dishName: "burger",
      dishImg: burgerIcon,
      imgAlt: "burger icon"
    },
    {
      dishName: "McD",
      dishImg: happyMealIcon,
      imgAlt: "Happy meal icon"
    },
  ];

    const handleClick = () => {
      setRandomDishIndex(Math.floor(Math.random() * dishes.length));
    }

  return (
    <body>
      <div className='container'>
        <img src={dinnerLogo} alt="Plate icon" height="250px" />
        <button onClick={handleClick}>
          Click to generate a random dish!
        </button>
        <h1>Today's dinner is {dishes[randomDishIndex].dishName}!</h1>
        <img src={dishes[randomDishIndex].dishImg} alt={dishes[randomDishIndex].imgAlt} />
      </div>
    </body>
  )
}

export default App