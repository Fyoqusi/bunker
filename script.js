// Фіктивний список характеристик
const professions = [
  "Лікар-хірург",
  "Інженер-механік",
  "Вчитель фізкультури",
  "Архітектор",
  "Кухар",
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
  "Інстаграм-блогер",
  "Столяр",
  "Безробітний",
  "Еколог",
  "Лікар-вірусолог",
  "Дипломат",
  "Поліцейський",
  "Працівник швидкої",
  "Електрик",
  "Лікар-терапевт",
  "Дроворуб",
  "Викидайло",
  "Священник",
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
  "Ожиріння",
  "Наркоманія",
  "Лудоманія",
  "Шизофренія",
  "Біполярний розлад",
  "Повна сліпота",
];
const genders = ["Чоловік", "Жінка"];
const hobbies = [
  "Подорожі",
  "Футбол",
  "Готування їжі",
  "Гірські походи",
  "Велоспорт",
  "Читання книг",
  "Танці",
  "Риболовля",
  "Виноробство",
  "Волонтерство",
  "Пошиття",
  "Плавання",
  "Астрономія",
  "Сталкінг",
  "Важка атлетика",
  "Легка атлетика",
  "Фотографування",
  "Бокс",
  "Ботаніка",
  "Садівництво",
  "В'язання",
  "Гончарство",
  "Малювання",
  "Програмування",
  "Хобіхорсинг",
];
const facts = [
  "Пограбував власного дідуся",
  "Був у комі 14 років",
  "Знає 5 мов",
  "Залишався на другий рік в школі",
  "Вегетаріанець",
  "Має дві вищі освіти",
  "Грає у водне поло",
  "Палить цигарки",
  "Має чотирьох дітей",
  "Вірить у всесвітню змову",
  "Проходив курс воєнної підготовки",
  "Отримав у спадок 1 мільйон доларів",
  "Практикується у віщуванні",
  "Поцупив сирок з АТБ",
  "Знається на народній медицині",
  "Колабораціоніст",
  "Знайомий з президентом",
  "Не носить спідню білизну",
  "Пройшов курс домедичної допомоги",
  "Частково винен у катастрофі",
  "Перепливав Тису",
  "Був у шлюбі тричі",
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
  "Безлімітна картка",
  "Турецький килим",
  "Туалетний папір",
  "Набір для в'язання",
  "Парасолька",
  "Ящик полуниці",
  "Лампочка",
  "Біблія",
  "Фікус",
  "Коробка патронів 5.56 мм",
  "Цегла",
  "Отрута для мишей",
];
const actioncards = [
  "У цьому раунді ти не голосуєш, але голоси проти вибраного учасника подвоюються",
  "Цього раунду проти тебе не можуть голосувати",
  "Ти можеш обмінятися багажем з однією людиною",
  "Ти можеш обмінятися здров'ям з однією людиною",
  "Ти можеш обмінятися професією з однією людиною",
  "Ти можеш обмінятися хобі з однією людиною",
  "Ти можеш обмінятися фактом з однією людиною",
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
const stages = ["40%", "20%", "60%", "80%", "100%"];
const conditions = [""];

// Функція для генерації випадкового елемента з масиву
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Функція для генерації картки гравця
function generateCharacter() {
  var button = document.querySelector(".button-generate");
  button.style.display = "none";
  var notes = document.querySelector("#notesContainer");
  notes.style.display = "block";
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
  const hobbyExperience = Math.floor(Math.random() * (age - 14 + 1)); // Стаж від нуля до різниці віку та чотирнадцяти
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
  const stage = getRandomElement(stages);
  const condition = getRandomElement(conditions);

  const actionCard1 = [getRandomElement(actioncards)];

  let actionCard2;
  do {
    actionCard2 = getRandomElement(actioncards);
  } while (actionCard2 == actionCard1);

  const characterCard = `
        <h2>Характеристики гравця</h2>
        <div class="charwithbutton"><span>&#128188;</span><p class="professionpar" onclick="toggleDecoration(this)"> <strong>Професія:</strong> ${profession}, ${experience} ${ageExperience}</p></div>
        <div class="charwithbutton"><span>&#9892;</span><p onclick="toggleDecoration(this)"> <strong>Стать та вік:</strong> ${gender}, ${age} ${ageYears}</p></div>
        <div class="charwithbutton"><span>&#10084;</span><p onclick="toggleDecoration(this)"> <strong>Здоров'я:</strong> ${health}, ${stage} (якщо можна застосувати)</p></div>
        <div class="charwithbutton"><span>&#128552;</span><p onclick="toggleDecoration(this)"> <strong>Фобія:</strong> ${phobia}</p></div>
        <div class="charwithbutton"><span>&#9917;</span><p onclick="toggleDecoration(this)"> <strong>Хобі:</strong> ${hobby}, ${hobbyExperience} р.</p></div>
        <div class="charwithbutton"><span>&#129523;</span><p onclick="toggleDecoration(this)"> <strong>Багаж:</strong> ${baggage}</p></div>
        <div class="charwithbutton"><span>&#10071;</span><p onclick="toggleDecoration(this)"> <strong>Факт:</strong> ${fact}</p></div>
        <p>&#9889; <strong>Картки дії:</strong></p>
        <ul>
            <li onclick="toggleDecoration(this)" class="actionCards">${actionCard1}</li>
            <li onclick="toggleDecoration(this)" class="actionCards">${actionCard2}</li>
        </ul>
    `;

  document.getElementById("characterCard").innerHTML = characterCard;
  const htmlEl = document.documentElement;
  htmlEl.style.height = "auto";
}

function toggleDecoration(paragraph) {
  // Перевірка, чи вже є стиль line-through
  if (paragraph.style.textDecorationLine === "line-through") {
    // Якщо є, то видаляємо стиль
    paragraph.style.textDecorationLine = "underline";
  } else {
    // Інакше додаємо стиль
    paragraph.style.textDecorationLine = "line-through";
  }
}
