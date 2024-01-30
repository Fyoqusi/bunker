// Фіктивний список характеристик
const professions = [
  "Лікар-хірург",
  "Інженер-механік",
  "Вчитель фізкультури",
  "Архітектор",
  "Помічник кухаря",
  "Пілот",
  "Художник",
  "Програміст",
  "Медсестра",
  "Фермер",
  "Психолог",
  "Снайпер",
  "Пожежник",
  "Астронавт",
  "Дизайнер",
  "Юрист",
  "Музикант",
  "Фотограф",
  "Офіціант",
  "Будівельник",
  "Клоун",
  "Актор театру",
  "Нотаріус",
  "Столяр",
  "Безробітний",
];
const healths = [
  "Ідеальне здоров'я",
  "Пневмонія",
  "Алкоголізм",
  "ВІЛ",
  "Вітрянка",
  "Амнезія",
  "Грип",
  "Застуда",
  "Мігрень",
  "Алергія на пил",
  "Немає лівої ноги",
  "Немає двох пальців на лівій руці",
  "Депресія",
  "Синдром Туретта",
  "Ідеальне здоров'я",
  "Астма",
  "Цукровий діабет 1-го типу",
  "Гіпертонія",
  "Гастрит",
  "Карлик",
  "Грибок нігтів",
];
const genders = ["Чоловік", "Жінка"];
const hobbies = [
  "Малювання",
  "Фотографування",
  "Подорожі",
  "Футбол",
  "Грання на фортепіано",
  "Готування",
  "Гірські походи",
  "Велоспорт",
  "Читання книг",
  "Настільні ігри",
  "Танці",
  "Риболовля",
  "Виноробство",
  "Театр",
  "Волонтерство",
  "Пошиття",
  "Плавання",
  "Колекціонування марок",
  "Астрономія",
  "Громадська робота",
  "Колекціонування жуків",
  "Сталкеринг",
];
const facts = [
  "Пограбував власного дідуся",
  "Був у комі 4 роки",
  "Може дотягнутися язиком до ліктя",
  "Знає 5 мов",
  "Залишався на другий рік в школі",
  "Вегетаріанець",
  "Може з'їсти цілий кавун за 10 хвилин",
  "Має дві вищі освіти",
  "Грає у водне поло",
  "Співає в метро",
  "Не має передніх зубів",
  "Палить цигарки",
  "Має чотирьох дітей",
  "Вірить у всесвітню змову",
  "Проходив курс воєнної підготовки",
  "Пройшов похід 100 км",
  "Отримав у спадок 1 мільйон доларів",
  "Вміє грати на гітарі",
  "Успішний блогер в Інстаграм",
  "Практикується у віщуванні",
  "Поцупив сирок з АТБ",
  "Знається на народній медицині",
];
const baggagelist = [
  "Енциклопедія юного натураліста",
  "Чіхуахуа",
  "Компас",
  "Ножиці",
  "Карти",
  "Молоток",
  "Викрутка",
  "Мультиінструмент",
  "Насінинка пшениці",
  "Телефон",
  "Робот-пилосос",
  "Шахи",
  "Збірник 4500 анекдотів",
  "Інструкція зі збирання крісла",
  "Безлімітна картка",
  "Турецький килим",
  "Туалетний папір",
  "Набір для в'язання",
  "Парасолька",
  "Ящик полуниці",
  "Глобус",
  "Лампочка",
  "Подушка",
  "Біблія",
  "Фікус",
  "Коробка патронів 5.56 мм",
  "Лупа",
  "Цегла",
];
const actioncards = [
  "У цьому раунді ти не голосуєш, але голоси проти вибраного учасника подвоюються",
  "Цього раунду проти тебе не можуть голосувати",
  "Ти можеш обмінятися багажем з однією людиною",
  "Ти можеш обмінятися здров'ям з однією людиною",
  "Ти можеш обмінятися професією з однією людиною",
  "Ти можеш обмінятися хобі з однією людиною",
  "Омолоди вибраного гравця на 15 років, якщо йому 33 і більше років (стаж віднімається також)",
  "Дістань нову характеристику здоров'я з колоди для вибраного гравця",
  "Дістань нову характеристику професії з колоди для вибраного гравця",
  "Дістань нову характеристику хобі з колоди для вибраного гравця",
  "Дістань нову характеристику факту з колоди для вибраного гравця",
  "Наступного раунду примусь усіх гравців відкрити характеристику за твоїм бажанням",
];
const phobias = [
  "Клаустрофобія (страх перед замкненим простором)",
  "Агорафобія (страх перед відкритим простором)",
  "Гемофобія (страх крові)",
  "Арахнофобія (страх павуків)",
  "Ніктофобія (страх темряви, ночі)",
  "Талассофобія (страх морських подорожей, моря)",
  "Урофобія (страх захотіти в туалет в умовах, коли зробити це неможливо)",
  "Кінофобія (страх собак)",
  "Пеладофобія (страх лисих людей)",
  "Аквафобія (страх води)",
  "Арахнофобія (страх павуків)",
  "Авіафобія (страх польоту або літаків)",
  "Гідрофобія (страх води)",
  "Офідофобія (страх змій)",
  "Гермофобія (страх бруду або мікробів)",
  "Акрофобія (страх висоти)",
  "Некрофобія (страх смерті або трупів)",
  "Еметофобія (страх блювання)",
  "Ентомофобія (страх комах)",
  "Клауновідна фобія (страх клоунів)",
  "Термофобія (страх тепла або жару)",
  "Технофобія (страх технологій)",
  "Колібрифобія (страх колібрі)",
  "Немає фобії",
];
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
  const lastDigitAge = age % 10;
  let ageYears;

  if (lastDigitAge === 1) {
    ageYears = "рік";
  } else if (lastDigitAge >= 2 && lastDigitAge <= 4) {
    ageYears = "роки";
  } else {
    ageYears = "років";
  }
  const experience = Math.floor(Math.random() * (age - 18 + 1)); // Стаж від нуля до різниці віку та вісімнадцяти
  const health = getRandomElement(healths);
  const lastDigitExperience = experience % 10;
  let ageExperience;

  if (lastDigitExperience === 1) {
    ageExperience = "рік";
  } else if (
    (lastDigitExperience >= 2 && lastDigitExperience <= 4 && experience < 11) ||
    (lastDigitExperience >= 2 && lastDigitExperience <= 4 && experience > 14)
  ) {
    ageExperience = "роки";
  } else {
    ageExperience = "років";
  }
  const phobia = getRandomElement(phobias);
  const hobby = getRandomElement(hobbies);
  const fact = getRandomElement(facts);
  const baggage = getRandomElement(baggagelist);
  const condition = getRandomElement(conditions);

  const actionCard1 = [getRandomElement(actioncards)];

  let actionCard2;
  do {
    actionCard2 = getRandomElement(actioncards);
  } while (actionCard2 == actionCard1);

  const characterCard = `
        <h2>Характеристики гравця</h2>
        <div class="charwithbutton"><p class="professionpar" onclick="toggleDecoration(this)">&#128188; <strong>Професія та Стаж:</strong> ${profession}, ${experience} ${ageExperience}</p></div>
        <div class="charwithbutton"><p onclick="toggleDecoration(this)">&#9892; <strong>Стать та Вік:</strong> ${gender}, ${age} ${ageYears}</p></div>
        <div class="charwithbutton"><p onclick="toggleDecoration(this)">&#10084; <strong>Стан Здоров'я:</strong> ${health}</p></div>
        <div class="charwithbutton"><p onclick="toggleDecoration(this)">&#128552; <strong>Фобія:</strong> ${phobia}</p></div>
        <div class="charwithbutton"><p onclick="toggleDecoration(this)">&#9917; <strong>Хобі:</strong> ${hobby} </p></div>
        <div class="charwithbutton"><p onclick="toggleDecoration(this)">&#129523; <strong>Багаж:</strong> ${baggage}</p></div>
        <div class="charwithbutton"><p onclick="toggleDecoration(this)">&#10071; <strong>Факт:</strong> ${fact}</p></div>
        <p>&#9889; <strong>Картки дії:</strong></p>
        <ul>
            <li onclick="toggleDecoration(this)">${actionCard1}</li>
            <li onclick="toggleDecoration(this)">${actionCard2}</li>
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
