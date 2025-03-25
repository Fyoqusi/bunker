// Фіктивний список характеристик
const professions = [
  "Surgeon",
  "Mechanical Engineer",
  "PE Teacher",
  "Architect",
  "Cook",
  "Pilot",
  "Artist",
  "Programmer",
  "Nurse",
  "Farmer",
  "Psychologist",
  "Sniper",
  "Firefighter",
  "Astronaut",
  "Designer",
  "Lawyer",
  "Musician",
  "Photographer",
  "Waiter",
  "Builder",
  "Clown",
  "Theater Actor",
  "Instagram Blogger",
  "Carpenter",
  "Unemployed",
  "Ecologist",
  "Virologist",
  "Diplomat",
  "Police Officer",
  "Paramedic",
  "Electrician",
  "Therapist",
  "Lumberjack",
  "Bouncer",
  "Priest",
];
const healths = [
  "Perfect Health",
  "Pneumonia",
  "Alcoholism",
  "HIV",
  "Chickenpox",
  "Amnesia",
  "Flu",
  "Cold",
  "Migraine",
  "Dust Allergy",
  "Missing Left Leg",
  "Missing Two Fingers on Left Hand",
  "Depression",
  "Tourette Syndrome",
  "Perfect Health",
  "Asthma",
  "Type 1 Diabetes",
  "Hypertension",
  "Gastritis",
  "Dwarfism",
  "Nail Fungus",
  "Obesity",
  "Drug Addiction",
  "Gambling Addiction",
  "Schizophrenia",
  "Bipolar Disorder",
  "Total Blindness",
];
const genders = ["Male", "Female"];
const hobbies = [
  "Traveling",
  "Football",
  "Cooking",
  "Hiking",
  "Cycling",
  "Reading Books",
  "Dancing",
  "Fishing",
  "Winemaking",
  "Volunteering",
  "Sewing",
  "Swimming",
  "Astronomy",
  "Stalking",
  "Weightlifting",
  "Athletics",
  "Photography",
  "Boxing",
  "Botany",
  "Gardening",
  "Knitting",
  "Pottery",
  "Drawing",
  "Programming",
  "Hobby Horsing",
];
const facts = [
  "Robbed His Own Grandfather",
  "Was in a Coma for 14 Years",
  "Knows 5 Languages",
  "Was Held Back a Year in School",
  "Vegetarian",
  "Has Two Higher Degrees",
  "Plays Water Polo",
  "Smokes Cigarettes",
  "Has Four Children",
  "Believes in a Global Conspiracy",
  "Completed Military Training",
  "Inherited 1 Million Dollars",
  "Practices Fortune Telling",
  "Stole a Yogurt from Store",
  "Knowledgeable in Traditional Medicine",
  "Neo-Nazist",
  "Acquainted with the President",
  "Doesn't Wear Underwear",
  "Completed First Aid Training",
  "Partially Responsible for the Catastrophe",
  "Survived in a road accident",
  "Has Been Married Three Times",
];
const baggagelist = [
  "Young Naturalist's Encyclopedia",
  "Chihuahua",
  "Compass",
  "Scissors",
  "Playing Cards",
  "Hammer",
  "Screwdriver",
  "Multitool",
  "Wheat Seed",
  "Phone",
  "Robot Vacuum Cleaner",
  "Chess Board",
  "Collection of 4500 Anecdotes",
  "Unlimited Credit Card",
  "Turkish Carpet",
  "Toilet Paper",
  "Knitting Kit",
  "Umbrella",
  "Crate of Strawberries",
  "Light Bulb",
  "Bible",
  "Ficus",
  "Box of 5.56mm Cartridges",
  "Brick",
  "Mouse Poison",
];
const actioncards = [
  "In this round, you do not vote, but the votes against the chosen player are doubled",
  "In this round, no one can vote against you",
  "You can swap baggage with one person",
  "You can swap health with one person",
  "You can swap profession with one person",
  "You can swap hobby with one person",
  "You can swap a fact with one person",
  "Rejuvenate the chosen player by 15 years, if they are 33 or older (experience is deducted as well)",
  "Draw a new health characteristic from the deck for the chosen player",
  "Draw a new profession characteristic from the deck for the chosen player",
  "Draw a new hobby characteristic from the deck for the chosen player",
  "Draw a new fact characteristic from the deck for the chosen player",
  "In the next round, force all players to reveal a characteristic of your choosing",
];
const phobias = [
  "Claustrophobia (fear of confined spaces)",
  "Agoraphobia (fear of open spaces)",
  "Hemophobia (fear of blood)",
  "Arachnophobia (fear of spiders)",
  "Nyctophobia (fear of darkness or night)",
  "Thalassophobia (fear of sea travel or the sea)",
  "Urophobia (fear of needing to use the toilet when it's impossible to do so)",
  "Cynophobia (fear of dogs)",
  "Peladophobia (fear of bald people)",
  "Aquaphobia (fear of water)",
  "Arachnophobia (fear of spiders)",
  "Aviophobia (fear of flying or airplanes)",
  "Hydrophobia (fear of water)",
  "Ophidiophobia (fear of snakes)",
  "Germophobia (fear of dirt or germs)",
  "Acrophobia (fear of heights)",
  "Necrophobia (fear of death or corpses)",
  "Emetophobia (fear of vomiting)",
  "Entomophobia (fear of insects)",
  "Coulrophobia (fear of clowns)",
  "Thermophobia (fear of heat or warmth)",
  "Technophobia (fear of technology)",
  "Colibriphobia (fear of hummingbirds)",
  "No Phobia",
];
const stages = ["Incubation period", "20%", "50%", "75%", "100%"];
const conditions = [""];

// Функція для генерації випадкового елемента з масиву
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Функція для генерації картки гравця
function generateCharacter() {
  const profession = getRandomElement(professions);
  const gender = getRandomElement(genders);
  const age = Math.floor(Math.random() * 50) + 18; // Вік від 18 до 68 років
  let ageYears;

  if (age === 1) {
    ageYears = "year";
  } else {
    ageYears = "years";
  }
  const experience = Math.floor(Math.random() * (age - 18 + 1)); // Стаж від нуля до різниці віку та вісімнадцяти
  const hobbyExperience = Math.floor(Math.random() * (age - 14 + 1)); // Стаж від нуля до різниці віку та чотирнадцяти
  const health = getRandomElement(healths);
  let ageExperience;

  if (experience === 1) {
    ageExperience = "year";
  } else {
    ageExperience = "years";
  }
  const phobia = getRandomElement(phobias);
  const hobby = getRandomElement(hobbies);
  const fact = getRandomElement(facts);
  const baggage = getRandomElement(baggagelist);
  const stage = getRandomElement(stages);
  const condition = getRandomElement(conditions);

  const actionCard1 = [getRandomElement(actioncards)];

  let actionCard2;
  do {
    actionCard2 = getRandomElement(actioncards);
  } while (actionCard2 == actionCard1);

  const characterCard = `
        <h2>Player's characteristic</h2>
        <div class="charwithbutton"><p class="professionpar" onclick="toggleDecoration(this)">&#128188; <strong>Job:</strong> ${profession}, ${experience} ${ageExperience}</p></div>
        <div class="charwithbutton"><p onclick="toggleDecoration(this)">&#9892; <strong>Gender and Age:</strong> ${gender}, ${age} ${ageYears}</p></div>
        <div class="charwithbutton"><p onclick="toggleDecoration(this)">&#10084; <strong>Health:</strong> ${health}, ${stage} (if can be applied)</p></div>
        <div class="charwithbutton"><p onclick="toggleDecoration(this)">&#128552; <strong>Phobia:</strong> ${phobia}</p></div>
        <div class="charwithbutton"><p onclick="toggleDecoration(this)">&#9917; <strong>Hobby:</strong> ${hobby}, ${hobbyExperience} y.</p></div>
        <div class="charwithbutton"><p onclick="toggleDecoration(this)">&#129523; <strong>Baggage:</strong> ${baggage}</p></div>
        <div class="charwithbutton"><p onclick="toggleDecoration(this)">&#10071; <strong>Fact:</strong> ${fact}</p></div>
        <p>&#9889; <strong>Action cards:</strong></p>
        <ul>
            <li onclick="toggleDecoration(this)" class="actionCards">${actionCard1}</li>
            <li onclick="toggleDecoration(this)" class="actionCards">${actionCard2}</li>
        </ul>
    `;

  document.getElementById("characterCard").innerHTML = characterCard;
  document.querySelector(".button-generate").disabled = true;
}

function toggleDecoration(paragraph) {
  // Перевірка, чи вже є стиль line-through
  if (paragraph.style.textDecorationLine === "line-through") {
    // Якщо є, то видаляємо стиль
    paragraph.style.textDecorationLine = "none";
  } else {
    // Інакше додаємо стиль
    paragraph.style.textDecorationLine = "line-through";
  }
}
