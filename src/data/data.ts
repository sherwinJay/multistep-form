import iconArcade from "../assets/images/planIcons/icon-arcade.svg"
import iconAdvance from "../assets/images/planIcons/icon-advanced.svg"
import iconPro from "../assets/images/planIcons/icon-pro.svg"

export const plansData = [
  {
    id: "1b",
    name: "Arcade",
    amountMonthly: 9, // '+$9/mo'
    amountYearly: 90,
    imgSrc: iconArcade,
    // isMonthly: true,
  },
  {
    id: "2b",
    name: "Advance",
    amountMonthly: 12, // '+$12/mo'
    amountYearly: 120,
    imgSrc: iconAdvance,
    // isMonthly: true,
  },
  {
    id: "3b",
    name: "Pro",
    amountMonthly: 15, // '+$15/mo'
    amountYearly: 150,
    imgSrc: iconPro,
    // isMonthly: true,
  },
]

export const stepsData = [
  {
    id: "1a",
    title: "step 1",
    description: "your info",
    fields: ["name", "email", "phone"],
  },
  {
    id: "2a",
    title: "step 2",
    description: "select plan",
    fields: ["planOptions"],
    // fields: ["test"],
  },
  {
    id: "3a",
    title: "step 3",
    description: "add-ons",
    fields: ["addOnsOptionIds"],
  },
  {
    id: "4a",
    title: "step 4",
    description: "summary",
    fields: ["totalPrice", "billing"],
  },
  {
    id: "5a",
    title: "step 5",
    description: "done",
    fields: [],
  },
]

export const addOnsData = [
  {
    id: "1a",
    name: "Online Service",
    description: "Access to multiplayer games",
    amountMonthly: 1, // '+$1/mo'
    amountYearly: 10, //'+12/yr'
    selected: false,
  },
  {
    id: "2a",
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    amountMonthly: 2, //'+$2/mo'
    amountYearly: 20, // '+24/yr'
    selected: false,
  },
  {
    id: "3a",
    name: "Customizable Profile",
    description: "Custom theme on you profile",
    amountMonthly: 2, // '+$2/mo'
    amountYearly: 20, // '+24/yr'
    selected: false,
  },
]
