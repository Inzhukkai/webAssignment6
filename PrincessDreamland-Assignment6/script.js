const starterPrincesses = [
  {
    key: "cinderella",
    name: "Cinderella",
    category: "classic",
    image: "https://wallpaperaccess.com/full/3520000.jpg",
    alt: "Fairytale castle",
    text: "A kind-hearted dreamer who believes in magic.",
    story: "Cinderella teaches us to be kind, stay hopeful, and believe in our dreams."
  },
  {
    key: "mulan",
    name: "Mulan",
    category: "brave",
    image: "https://lumiere-a.akamaihd.net/v1/images/2024_hb_disneyprincess_mulan_mobile_3497_36a691ee.jpeg?region=0%2C0%2C1024%2C768",
    alt: "Beautiful green forest",
    text: "A courageous heroine who protects her family.",
    story: "Mulan is brave, determined, and willing to challenge expectations to protect the people she loves."
  },
  {
    key: "elsa",
    name: "Elsa",
    category: "magical",
    image: "https://i1.sndcdn.com/artworks-000110816449-0l34b3-t500x500.jpg",
    alt: "Magical snowy mountains",
    text: "A magical queen learning to embrace her powers.",
    story: "Elsa learns that accepting herself and caring for others are more powerful than fear."
  }
];
const products = [
  { name: "Royal Tiara", category: "accessories", price: 25, text: "A sparkling crown for every little princess." },
  { name: "Magic Wand", category: "accessories", price: 12, text: "Wave it and make a wish come true." },
  { name: "Glass Slipper Charm", category: "accessories", price: 35, text: "A tiny shining slipper for your bracelet." },
  { name: "Fairytale Storybook", category: "books", price: 18, text: "Classic stories to read before bedtime." },
  { name: "Coloring Book", category: "books", price: 8, text: "Color castles, gowns, and enchanted forests." },
  { name: "Princess Songbook", category: "music", price: 22, text: "Sing along with your favorite melodies." },
  { name: "Golden Music Box", category: "music", price: 40, text: "A gentle tune from a magical little box." }
];
const newsData = {
  movies: [
    "Snow White and the Seven Dwarfs (1937) was Disney's first full-length animated movie.",
    "Frozen became a worldwide hit and inspired fans of all ages.",
    "Moana takes us on an ocean adventure inspired by Pacific island cultures."
  ],
  music: [
    "Princess movies are famous for songs that people sing for many years.",
    "Beauty and the Beast has a beautiful ballroom waltz scene.",
    "Songs help princesses share their dreams, fears, and courage."
  ],
  tales: [
    "Rapunzel is a German fairy tale collected by the Brothers Grimm.",
    "The Little Mermaid was written by Hans Christian Andersen.",
    "Mulan comes from a Chinese poem called the Ballad of Mulan."
  ]
};
const translations = {
  en: {
    nav_home: "Home", nav_princesses: "Princesses", nav_faq: "FAQ", nav_team: "Our Team", nav_contact: "Contact",
    day_btn: "\u2600 Day", night_btn: "\u263E Night",
    hero_small: "WELCOME TO A MAGICAL WORLD", hero_text: "Discover your favorite princesses and enter a world of magic.", hero_btn: "Explore Princesses",
    name_placeholder: "Enter your name", name_button: "Greet Me", dreamer: "dreamer",
    greet_morning: "Good morning, {name}! A new fairytale is waiting for you.",
    greet_afternoon: "Good afternoon, {name}! Time for a little magic.",
    greet_evening: "Good evening, {name}! The stars are shining for you.",
    princesses_title: "Our Princesses", princesses_text: "Find a princess and discover her story.", search_placeholder: "Search princess...",
    filter_all: "All princesses", filter_classic: "Classic", filter_brave: "Brave", filter_magical: "Magical", load_more: "Load More Princesses",
    gallery_title: "Magic Gallery", gallery_text: "Click a small picture to see it bigger.",
    shop_title: "Magic Shop", shop_text: "Filter royal treasures by category and price.",
    shop_cat_all: "All categories", shop_cat_acc: "Accessories", shop_cat_books: "Books", shop_cat_music: "Music",
    shop_price_all: "All prices", shop_price_low: "Under $15", shop_price_mid: "$15 - $30", shop_price_high: "Over $30",
    news_title: "Princess News Feed", news_movies: "Movies", news_music: "Music", news_tales: "Fairy Tales",
    feature_title: "A Little Magic for Your Day", feature_text: "Change the page color and make your own magical atmosphere.",
    bg_btn: "Change Background", datetime_label: "Current date and time:", time_btn: "Show Current Time",
    fact_title: "Princess Fact", fact_text: "Press the button to learn something new about fairytales.", fact_btn: "New Magic Fact",
    about_title: "About Princess Dreamland", about_text: "Princess Dreamland is a magical corner of the internet created by two students who love fairytales.",
    about_more: "We built this website to practice HTML, CSS, and JavaScript. Every page is designed to feel like a storybook, with ratings, sounds, animations, and surprises waiting for you.",
    readmore_more: "Read More", readmore_less: "Read Less",
    faq_title: "Frequently Asked Questions", faq_q1: "What is Princess Dreamland?", faq_q2: "How can I find a princess?", faq_q3: "How can I contact the team?",
    faq_a1: "Princess Dreamland is a fan-inspired website where you can explore fairytale characters.",
    faq_a2: "Use the search box or choose a category from the filter.", faq_a3: "Visit our Contact page and fill out the contact form.",
    newsletter_title: "Join Our Magical Newsletter", newsletter_text: "Subscribe to receive updates from Princess Dreamland.",
    signup_name: "Your name", signup_email: "Your email", subscribe_btn: "Subscribe",
    team_hero_title: "Meet Our Team", team_hero_text: "Two creative minds behind Princess Dreamland.", team_title: "Our Team Members",
    contact_hero_title: "Contact Us", contact_hero_text: "We would love to hear from you!", get_title: "Get in Touch",
    get_text: "Have a question or suggestion? Send us a message.", send_title: "Send a Message",
    label_name: "Full Name", label_email: "Email Address", label_subject: "Subject", label_message: "Message",
    back_btn: "Back", next_btn: "Next", send_btn: "Send Message", clear_btn: "Clear Form",
    step_label: "Step {n} of {total}", step_1: "Your details", step_2: "Your message"
  },
  ru: {
    nav_home: "Главная", nav_princesses: "Принцессы", nav_faq: "Вопросы", nav_team: "Наша команда", nav_contact: "Контакты",
    day_btn: "\u2600 День", night_btn: "\u263E Ночь",
    hero_small: "ДОБРО ПОЖАЛОВАТЬ В ВОЛШЕБНЫЙ МИР", hero_text: "Найдите любимых принцесс и войдите в мир магии.", hero_btn: "Смотреть принцесс",
    name_placeholder: "Введите ваше имя", name_button: "Поприветствуй меня", dreamer: "мечтатель",
    greet_morning: "Доброе утро, {name}! Новая сказка уже ждёт тебя.",
    greet_afternoon: "Добрый день, {name}! Самое время для немного магии.",
    greet_evening: "Добрый вечер, {name}! Звёзды сияют для тебя.",
    princesses_title: "Наши принцессы", princesses_text: "Найдите принцессу и узнайте её историю.", search_placeholder: "Поиск принцессы...",
    filter_all: "Все принцессы", filter_classic: "Классические", filter_brave: "Храбрые", filter_magical: "Волшебные", load_more: "Загрузить ещё принцесс",
    gallery_title: "Волшебная галерея", gallery_text: "Нажмите на маленькую картинку, чтобы увидеть её крупнее.",
    shop_title: "Волшебный магазин", shop_text: "Фильтруйте королевские сокровища по категории и цене.",
    shop_cat_all: "Все категории", shop_cat_acc: "Аксессуары", shop_cat_books: "Книги", shop_cat_music: "Музыка",
    shop_price_all: "Все цены", shop_price_low: "До $15", shop_price_mid: "$15 - $30", shop_price_high: "Дороже $30",
    news_title: "Лента новостей о принцессах", news_movies: "Фильмы", news_music: "Музыка", news_tales: "Сказки",
    feature_title: "Немного магии для вашего дня", feature_text: "Измените цвет страницы и создайте свою волшебную атмосферу.",
    bg_btn: "Сменить фон", datetime_label: "Текущая дата и время:", time_btn: "Показать текущее время",
    fact_title: "Факт о принцессах", fact_text: "Нажмите на кнопку, чтобы узнать что-то новое о сказках.", fact_btn: "Новый волшебный факт",
    about_title: "О Princess Dreamland", about_text: "Princess Dreamland — это волшебный уголок интернета, созданный двумя студентами, которые любят сказки.",
    about_more: "Мы создали этот сайт, чтобы практиковаться в HTML, CSS и JavaScript. Каждая страница похожа на сказочную книгу: здесь вас ждут оценки, звуки, анимации и сюрпризы.",
    readmore_more: "Читать далее", readmore_less: "Свернуть",
    faq_title: "Часто задаваемые вопросы", faq_q1: "Что такое Princess Dreamland?", faq_q2: "Как найти принцессу?", faq_q3: "Как связаться с командой?",
    faq_a1: "Princess Dreamland — это сайт для фанатов, где можно познакомиться со сказочными героинями.",
    faq_a2: "Используйте поле поиска или выберите категорию в фильтре.", faq_a3: "Перейдите на страницу «Контакты» и заполните форму.",
    newsletter_title: "Подпишитесь на волшебную рассылку", newsletter_text: "Подпишитесь, чтобы получать новости Princess Dreamland.",
    signup_name: "Ваше имя", signup_email: "Ваш email", subscribe_btn: "Подписаться",
    team_hero_title: "Знакомьтесь с нашей командой", team_hero_text: "Два творческих человека, стоящих за Princess Dreamland.", team_title: "Участники команды",
    contact_hero_title: "Свяжитесь с нами", contact_hero_text: "Мы будем рады услышать вас!", get_title: "Как с нами связаться",
    get_text: "Есть вопрос или предложение? Напишите нам.", send_title: "Отправить сообщение",
    label_name: "Полное имя", label_email: "Адрес электронной почты", label_subject: "Тема", label_message: "Сообщение",
    back_btn: "Назад", next_btn: "Далее", send_btn: "Отправить сообщение", clear_btn: "Очистить форму",
    step_label: "Шаг {n} из {total}", step_1: "Ваши данные", step_2: "Ваше сообщение"
  },
  kk: {
    nav_home: "Басты бет", nav_princesses: "Ханшайымдар", nav_faq: "Сұрақтар", nav_team: "Біздің команда", nav_contact: "Байланыс",
    day_btn: "\u2600 Күн", night_btn: "\u263E Түн",
    hero_small: "СИҚЫРЛЫ ӘЛЕМГЕ ҚОШ КЕЛДІҢІЗ", hero_text: "Сүйікті ханшайымдарыңызды тауып, сиқыр әлеміне енбіңіз.", hero_btn: "Ханшайымдарды көру",
    name_placeholder: "Атыңызды енгізіңіз", name_button: "Сәлемдес", dreamer: "арманшыл",
    greet_morning: "Қайырлы таң, {name}! Жаңа ертегі сені күтіп тұр.",
    greet_afternoon: "Қайырлы күн, {name}! Аздап сиқыр жасайтын уақыт.",
    greet_evening: "Қайырлы кеш, {name}! Жұлдыздар саған жарқырап тұр.",
    princesses_title: "Біздің ханшайымдар", princesses_text: "Ханшайымды тауып, оның тарихын біліңіз.", search_placeholder: "Ханшайымды іздеу...",
    filter_all: "Барлық ханшайымдар", filter_classic: "Классикалық", filter_brave: "Батыл", filter_magical: "Сиқырлы", load_more: "Тағы ханшайымдарды жүктеу",
    gallery_title: "Сиқырлы галерея", gallery_text: "Үлкенірек көру үшін кішкентай суретті басыңыз.",
    shop_title: "Сиқырлы дүкен", shop_text: "Патшалық қазыналарды санат пен баға бойынша сүзгілеңіз.",
    shop_cat_all: "Барлық санаттар", shop_cat_acc: "Аксессуарлар", shop_cat_books: "Кітаптар", shop_cat_music: "Музыка",
    shop_price_all: "Барлық бағалар", shop_price_low: "$15-ке дейін", shop_price_mid: "$15 - $30", shop_price_high: "$30-дан жоғары",
    news_title: "Ханшайымдар жаңалықтары", news_movies: "Фильмдер", news_music: "Музыка", news_tales: "Ертегілер",
    feature_title: "Күніңізге аздап сиқыр", feature_text: "Бет түсін өзгертіп, өзіңіздің сиқырлы атмосфераңызды жасаңыз.",
    bg_btn: "Фонды өзгерту", datetime_label: "Қазіргі күн мен уақыт:", time_btn: "Қазіргі уақытты көрсету",
    fact_title: "Ханшайымдар туралы дерек", fact_text: "Ертегілер туралы жаңа нәрсе білу үшін батырманы басыңыз.", fact_btn: "Жаңа сиқырлы дерек",
    about_title: "Princess Dreamland туралы", about_text: "Princess Dreamland — ертегіні жақсы көретін екі студент жасаған интернеттің сиқырлы бұрышы.",
    about_more: "Біз бұл сайтты HTML, CSS және JavaScript жаттығу үшін жасадық. Әр бет ертегі кітабы сияқты: бағалар, дыбыстар, анимациялар мен тосын сыйлар күтіп тұр.",
    readmore_more: "Толығырақ", readmore_less: "Жасыру",
    faq_title: "Жиі қойылатын сұрақтар", faq_q1: "Princess Dreamland деген не?", faq_q2: "Ханшайымды қалай табуға болады?", faq_q3: "Командамен қалай байланысуға болады?",
    faq_a1: "Princess Dreamland — ертегі кейіпкерлерімен танысуға болатын жанкүйерлер сайты.",
    faq_a2: "Іздеу жолағын қолданыңыз немесе сүзгіден санатты таңдаңыз.", faq_a3: "«Байланыс» бетіне өтіп, форманы толтырыңыз.",
    newsletter_title: "Сиқырлы жаңалықтарға жазылыңыз", newsletter_text: "Princess Dreamland жаңалықтарын алу үшін жазылыңыз.",
    signup_name: "Атыңыз", signup_email: "Электрондық поштаңыз", subscribe_btn: "Жазылу",
    team_hero_title: "Біздің команданы танысыңыз", team_hero_text: "Princess Dreamland артындағы екі шығармашыл адам.", team_title: "Команда мүшелері",
    contact_hero_title: "Бізбен байланысыңыз", contact_hero_text: "Сізден хабар алсақ қуанамыз!", get_title: "Байланыс",
    get_text: "Сұрағыңыз немесе ұсынысыңыз бар ма? Бізге жазыңыз.", send_title: "Хабарлама жіберу",
    label_name: "Толық аты-жөні", label_email: "Электрондық пошта", label_subject: "Тақырып", label_message: "Хабарлама",
    back_btn: "Артқа", next_btn: "Келесі", send_btn: "Хабарлама жіберу", clear_btn: "Форманы тазарту",
    step_label: "{total} қадамның {n}-і", step_1: "Сіздің деректеріңіз", step_2: "Сіздің хабарламаңыз"
  }
};
const princessGallery = {
  list: document.getElementById("princessList"),
  items: [],
  has: function (key) {
    return this.items.some(function (princess) {
      return princess.key === key;
    });
  },
  findByKey: function (key) {
    return this.items.find(function (princess) {
      return princess.key === key;
    });
  },
  addPrincess: function (princess) {
    this.items.push(princess);
    const column = document.createElement("div");
    column.className = "col-md-4 princess-card card-enter";
    column.dataset.name = princess.name.toLowerCase();
    column.dataset.category = princess.category;
    let starsHTML = "";
    for (let i = 1; i <= 5; i++) {
      starsHTML += '<span class="star" data-value="' + i + '" role="button" tabindex="0" aria-label="Rate ' + i + ' out of 5">&#9733;</span>';
    }
    column.innerHTML =
      '<div class="card h-100">' +
        '<img data-src="' + princess.image + '" class="card-img-top a6-lazy" alt="' + princess.alt + '">' +
        '<div class="card-body">' +
          '<h3 class="card-title">' + princess.name + '</h3>' +
          '<p class="card-text">' + princess.text + '</p>' +
          '<div class="rating">' + starsHTML + '</div>' +
          '<p class="rating-text">Click a star to rate ' + princess.name + '.</p>' +
          '<button class="btn pink-btn details-btn" type="button" data-key="' + princess.key + '">Discover</button>' +
        '</div>' +
      '</div>';
    this.list.appendChild(column);
  }
};
const soundNotes = {
  click: 600,
  star: 440,
  load: 520,
  theme: 400,
  success: 784,
  error: 220
};
let audioContext = null;
let activeOscillator = null;
function playSound(frequency) {
  try {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    if (activeOscillator) {
      try {
        activeOscillator.stop();
      } catch (error) {
      }
    }
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const now = audioContext.currentTime;
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.35);
    activeOscillator = oscillator;
    oscillator.onended = function () {
      if (activeOscillator === oscillator) {
        activeOscillator = null;
      }
    };
  } catch (error) {
  }
}
function playAnimation(element, className) {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  element.addEventListener("animationend", function () {
    element.classList.remove(className);
  }, { once: true });
}
// Task 0: jQuery starts after the HTML is ready
$(document).ready(function () {
  console.log("jQuery is ready!");
  let currentLang = "en";
  let userName = "";
  const languageHooks = [];
  function getDictionary(lang) {
    switch (lang) {
      case "ru":
        return translations.ru;
      case "kk":
        return translations.kk;
      default:
        return translations.en;
    }
  }
  function t(key) {
    return getDictionary(currentLang)[key] || translations.en[key];
  }
  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "kk" ? "kk" : lang;
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
      element.placeholder = t(element.dataset.i18nPlaceholder);
    });
    languageHooks.forEach(function (hook) {
      hook();
    });
  }
  function getSavedLanguage() {
    try {
      return localStorage.getItem("princessLanguage") || "en";
    } catch (error) {
      return "en";
    }
  }
  // Tasks 6–7: The subscription button shows a spinner and then a notification
  $("#signupForm").on("submit", function (event) {
    event.preventDefault();
    const name = $("#signupName").val().trim();
    const button = $(this).find('button[type="submit"]');
    if (name.length < 2) {
      $("#signupMessage").text("Please enter at least 2 characters for your name.");
      return;
    }
    if (button.prop("disabled")) return;
    if (!this.checkValidity()) { this.reportValidity(); return; }
    const originalText = button.text();
    button.prop("disabled", true);
    button.html('<span class="a6-spinner" aria-hidden="true"></span>Please wait…');
    $("#signupMessage").text("Processing your practice subscription…");
    setTimeout(function () {
      button.prop("disabled", false).text(originalText);
      $("#signupMessage").text("Thank you, " + name + "! Practice subscription completed.");
      $("#signupForm")[0].reset();
      showToast("Practice subscription completed!");
    }, 2000);
  });
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const noResults = document.getElementById("noResults");
  const princessList = document.getElementById("princessList");
  if (princessList) {
    starterPrincesses.forEach(function (princess) {
      princessGallery.addPrincess(princess);
    });
  }
  // Tasks 1–3: Search filters cards, shows suggestions, and highlights matches
  function filterPrincesses() {
    if (!searchInput || !categoryFilter) return;
    const keyword = $("#searchInput").val().trim().toLowerCase();
    const category = $("#categoryFilter").val();
    let count = 0;
    $("#a6Suggestions").empty().hide();
    $("#princessList .princess-card").each(function () {
      const card = $(this);
      const name = card.find(".card-title").text().trim();
      const text = name + " " + card.find(".card-text").text();
      const matches = text.toLowerCase().includes(keyword) &&
        (category === "all" || card.attr("data-category") === category);
      card.prop("hidden", !matches);
      card.find(".card-title, .card-text").each(function () {
        highlight($(this), keyword);
      });
      if (matches) {
        count++;
        if (keyword !== "") {
          const button = $("<button>").attr("type", "button")
            .addClass("a6-suggestion").text(name);
          $("#a6Suggestions").append($("<li>").append(button));
        }
      }
    });
    $("#noResults").prop("hidden", count !== 0);
    if ($("#a6Suggestions li").length > 0) $("#a6Suggestions").show();
    loadImages();
    updateProgress();
  }
  // Task 3: Every matching fragment is highlighted safely
  function highlight(element, keyword) {
    const text = element.text();
    element.empty();
    if (keyword === "") {
      element.text(text);
      return;
    }
    let start = 0;
    let position = text.toLowerCase().indexOf(keyword);
    while (position !== -1) {
      element.append(document.createTextNode(text.slice(start, position)));
      element.append($("<mark>").addClass("a6-match")
        .text(text.slice(position, position + keyword.length)));
      start = position + keyword.length;
      position = text.toLowerCase().indexOf(keyword, start);
    }
    element.append(document.createTextNode(text.slice(start)));
  }
  // Tasks 1–2: Search and category events update the cards
  $("#searchInput").on("input", filterPrincesses);
  $("#categoryFilter").on("change", filterPrincesses);
  $("#a6Suggestions").on("click", ".a6-suggestion", function () {
    $("#searchInput").val($(this).text());
    filterPrincesses();
    $("#a6Suggestions").hide();
  });
  $(document).on("click", function (event) {
    if (!$(event.target).closest("#searchInput, #a6Suggestions").length) {
      $("#a6Suggestions").hide();
    }
  });
  $("#searchInput").on("keydown", function (event) {
    if (event.key === "Escape") $("#a6Suggestions").hide();
  });
  function setRating(card, value) {
    const stars = card.querySelectorAll(".star");
    const ratingText = card.querySelector(".rating-text");
    const princessName = card.querySelector(".card-title").textContent;
    stars.forEach(function (star) {
      const starValue = Number(star.dataset.value);
      star.classList.toggle("selected", starValue <= value);
    });
    ratingText.textContent = "You rated " + princessName + " " + value + " out of 5!";
    const clickedStar = stars[value - 1];
    playAnimation(clickedStar, "pop");
    playSound(soundNotes.star + value * 60);
  }
  const modalElement = document.getElementById("princessModal");
  let princessModal = null;
  if (modalElement && typeof bootstrap !== "undefined") {
    princessModal = new bootstrap.Modal(modalElement);
  }
  function showDetails(key) {
    const princess = princessGallery.findByKey(key);
    if (!princess || !princessModal) {
      return;
    }
    document.getElementById("modalTitle").textContent = princess.name;
    document.getElementById("modalStory").innerHTML =
      "<p>" + princess.story + "</p><p><strong>Category:</strong> " + princess.category + "</p>";
    princessModal.show();
  }
  if (princessList) {
    princessList.addEventListener("click", function (event) {
      const star = event.target.closest(".star");
      const detailsButton = event.target.closest(".details-btn");
      if (star) {
        setRating(star.closest(".princess-card"), Number(star.dataset.value));
      } else if (detailsButton) {
        playSound(soundNotes.click);
        showDetails(detailsButton.dataset.key);
      }
    });
    princessList.addEventListener("keydown", function (event) {
      const star = event.target.closest(".star");
      if (star && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        setRating(star.closest(".princess-card"), Number(star.dataset.value));
      }
    });
  }
  const fallbackImage = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="700" height="400">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#f8e2ec"/><stop offset="1" stop-color="#e8e0f4"/>' +
    '</linearGradient></defs>' +
    '<rect width="700" height="400" fill="url(#g)"/>' +
    '<text x="350" y="240" font-size="130" text-anchor="middle" fill="#c6a56b">&#10023;</text></svg>'
  );
  document.addEventListener("error", function (event) {
    if (event.target.tagName === "IMG" && event.target.src !== fallbackImage) {
      event.target.src = fallbackImage;
    }
  }, true);
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const loadMessage = document.getElementById("loadMessage");
  async function loadMorePrincesses() {
    loadMoreBtn.disabled = true;
    loadMessage.textContent = "Loading more magic...";
    try {
      const response = await fetch("princesses.json");
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const morePrincesses = await response.json();
      const newPrincesses = morePrincesses.filter(function (princess) {
        return !princessGallery.has(princess.key);
      });
      newPrincesses.forEach(function (princess) {
        princessGallery.addPrincess(princess);
      });
      filterPrincesses();
      playSound(soundNotes.load);
      const names = newPrincesses.map(function (princess) {
        return princess.name;
      });
      loadMessage.textContent = "New princesses joined: " + names.join(", ") + "!";
      loadMoreBtn.hidden = true;
    } catch (error) {
      loadMessage.textContent = "Could not load more princesses. Please open the website through GitHub Pages or a local server.";
      loadMoreBtn.disabled = false;
      playSound(soundNotes.error);
    }
  }
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", loadMorePrincesses);
  }
  const navbar = document.querySelector(".princess-nav");
  const navItems = Array.from(document.querySelectorAll(".princess-nav .nav-link, .princess-nav .lang-select, .princess-nav .theme-btn"));
  if (navbar) {
    navbar.addEventListener("keydown", function (event) {
      const currentIndex = navItems.indexOf(document.activeElement);
      if (currentIndex === -1) {
        return;
      }
      let nextIndex;
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          nextIndex = (currentIndex + 1) % navItems.length;
          break;
        case "ArrowLeft":
        case "ArrowUp":
          nextIndex = (currentIndex - 1 + navItems.length) % navItems.length;
          break;
        case "Home":
          nextIndex = 0;
          break;
        case "End":
          nextIndex = navItems.length - 1;
          break;
        default:
          return;
      }
      event.preventDefault();
      navItems[nextIndex].focus();
    });
  }
  document.addEventListener("click", function (event) {
    const button = event.target.closest(".pink-btn");
    if (button) {
      playAnimation(button, "btn-bounce");
    }
  });
  const timeBtn = document.getElementById("timeBtn");
  const timeDisplay = document.querySelector("#timeDisplay");
  if (timeBtn && timeDisplay) {
    timeBtn.addEventListener("click", function () {
      timeDisplay.textContent = new Date().toLocaleTimeString();
      playSound(soundNotes.click);
    });
  }
  const readMoreBtn = document.getElementById("readMoreBtn");
  const moreText = document.getElementById("moreText");
  if (readMoreBtn && moreText) {
    moreText.style.display = "none";
    function updateReadMoreText() {
      const isHidden = moreText.style.display === "none";
      readMoreBtn.textContent = isHidden ? t("readmore_more") : t("readmore_less");
    }
    readMoreBtn.addEventListener("click", function () {
      const isHidden = moreText.style.display === "none";
      moreText.style.display = isHidden ? "block" : "none";
      updateReadMoreText();
      playSound(soundNotes.click);
      if (isHidden) {
        playAnimation(moreText, "card-enter");
      }
    });
    languageHooks.push(updateReadMoreText);
  }
  const mainImage = document.getElementById("mainImage");
  const mainCaption = document.getElementById("mainCaption");
  const thumbButtons = document.querySelectorAll(".thumb-btn");
  thumbButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      mainImage.style.opacity = "0";
      mainImage.style.transform = "scale(0.95)";
      setTimeout(function () {
        mainImage.src = button.dataset.full;
        mainImage.alt = button.dataset.caption;
        mainCaption.textContent = button.dataset.caption;
        mainImage.style.opacity = "1";
        mainImage.style.transform = "scale(1)";
      }, 250);
      thumbButtons.forEach(function (thumb) {
        thumb.classList.toggle("active", thumb === button);
      });
      playSound(soundNotes.click);
    });
  });
  const factBtn = document.getElementById("factBtn");
  const factArea = document.querySelector("#factArea");
  let lastFactIndex = -1;
  if (factBtn && factArea) {
    factBtn.addEventListener("click", function () {
      fetch("facts.json")
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Request failed");
          }
          return response.json();
        })
        .then(function (facts) {
          let index;
          do {
            index = Math.floor(Math.random() * facts.length);
          } while (index === lastFactIndex && facts.length > 1);
          lastFactIndex = index;
          factArea.textContent = facts[index];
          playAnimation(factArea, "card-enter");
          playSound(soundNotes.load);
        })
        .catch(function () {
          factArea.textContent = "Could not load a fact. Please open the website through GitHub Pages or a local server.";
          playSound(soundNotes.error);
        });
    });
  }
  const productList = document.getElementById("productList");
  const productCategory = document.getElementById("productCategory");
  const productPrice = document.getElementById("productPrice");
  const noProducts = document.getElementById("noProducts");
  function matchesPrice(price, range) {
    switch (range) {
      case "low":
        return price < 15;
      case "mid":
        return price >= 15 && price <= 30;
      case "high":
        return price > 30;
      default:
        return true;
    }
  }
  function showProducts() {
    const category = productCategory.value;
    const range = productPrice.value;
    const visibleProducts = products.filter(function (product) {
      const categoryMatches = category === "all" || product.category === category;
      return categoryMatches && matchesPrice(product.price, range);
    });
    productList.innerHTML = "";
    visibleProducts.forEach(function (product) {
      const column = document.createElement("div");
      column.className = "col-md-4 card-enter";
      column.innerHTML =
        '<div class="card product-card h-100">' +
          '<div class="card-body">' +
            '<p class="product-category">' + product.category + '</p>' +
            '<h3 class="card-title">' + product.name + '</h3>' +
            '<p class="card-text">' + product.text + '</p>' +
            '<p class="product-price">$' + product.price + '</p>' +
          '</div>' +
        '</div>';
      productList.appendChild(column);
    });
    noProducts.hidden = visibleProducts.length !== 0;
  }
  if (productList && productCategory && productPrice) {
    showProducts();
    productCategory.addEventListener("change", function () {
      showProducts();
      playSound(soundNotes.click);
    });
    productPrice.addEventListener("change", function () {
      showProducts();
      playSound(soundNotes.click);
    });
  }
  const newsButtons = document.querySelectorAll(".news-btn");
  const newsHeading = document.getElementById("newsHeading");
  const newsList = document.getElementById("newsList");
  let currentNews = "movies";
  function showNews(category) {
    let items;
    let headingKey;
    switch (category) {
      case "music":
        items = newsData.music;
        headingKey = "news_music";
        break;
      case "tales":
        items = newsData.tales;
        headingKey = "news_tales";
        break;
      default:
        items = newsData.movies;
        headingKey = "news_movies";
    }
    currentNews = category;
    newsHeading.textContent = t(headingKey);
    newsList.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = items[i];
      newsList.appendChild(listItem);
    }
    playAnimation(newsList, "card-enter");
    newsButtons.forEach(function (button) {
      button.classList.toggle("news-active", button.dataset.category === category);
    });
  }
  if (newsList && newsHeading) {
    showNews(currentNews);
    newsButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        showNews(button.dataset.category);
        playSound(soundNotes.click);
      });
    });
    languageHooks.push(function () {
      newsHeading.textContent = t("news_" + currentNews);
    });
  }
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    const steps = contactForm.querySelectorAll(".form-step");
    const stepIndicator = document.getElementById("stepIndicator");
    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");
    const sendBtn = document.getElementById("sendBtn");
    const resetBtn = document.getElementById("resetBtn");
    const feedback = document.getElementById("contactFeedback");
    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const subject = document.getElementById("contactSubject");
    const message = document.getElementById("contactMessage");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let currentStep = 1;
    function showStep(stepNumber) {
      steps.forEach(function (step) {
        step.hidden = Number(step.dataset.step) !== stepNumber;
      });
      stepIndicator.textContent = t("step_label").replace("{n}", stepNumber).replace("{total}", steps.length) + ": " + t("step_" + stepNumber);
      backBtn.hidden = stepNumber === 1;
      nextBtn.hidden = stepNumber === steps.length;
      sendBtn.hidden = stepNumber !== steps.length;
    }
    function validateStep(stepNumber) {
      switch (stepNumber) {
        case 1: {
          const nameIsValid = name.value.trim().length >= 2;
          const emailIsValid = emailPattern.test(email.value.trim());
          name.classList.toggle("is-invalid", !nameIsValid);
          email.classList.toggle("is-invalid", !emailIsValid);
          return nameIsValid && emailIsValid;
        }
        case 2: {
          const subjectIsValid = subject.value.trim() !== "";
          const messageIsValid = message.value.trim().length >= 10;
          subject.classList.toggle("is-invalid", !subjectIsValid);
          message.classList.toggle("is-invalid", !messageIsValid);
          return subjectIsValid && messageIsValid;
        }
        default:
          return true;
      }
    }
    function changeStep(direction, callback) {
      if (direction > 0 && !validateStep(currentStep)) {
        feedback.textContent = "Please correct the fields marked in red.";
        feedback.className = "mt-3 msg-error";
        playSound(soundNotes.error);
        return;
      }
      feedback.textContent = "";
      currentStep += direction;
      callback(currentStep);
      playSound(soundNotes.click);
    }
    nextBtn.addEventListener("click", function () {
      changeStep(1, showStep);
    });
    backBtn.addEventListener("click", function () {
      changeStep(-1, showStep);
    });
    resetBtn.addEventListener("click", function () {
      contactForm.querySelectorAll("input, textarea").forEach(function (field) {
        field.value = "";
        field.classList.remove("is-invalid");
      });
      feedback.textContent = "";
      currentStep = 1;
      showStep(currentStep);
      playSound(soundNotes.click);
    });
    function sendFormData(data, callback) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(data)
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Request failed");
          }
          return response.json();
        })
        .then(function () {
          callback(true);
        })
        .catch(function () {
          callback(false);
        });
    }
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!validateStep(1)) { currentStep = 1; showStep(1); return; }
    if (!validateStep(2)) {
        feedback.textContent = "Please correct the fields marked in red.";
        feedback.className = "mt-3 msg-error";
        playSound(soundNotes.error);
        return;
      }
      const formData = {
        name: name.value.trim(),
        email: email.value.trim(),
        subject: subject.value.trim(),
        message: message.value.trim()
      };
      sendBtn.disabled = true;
      feedback.textContent = "Sending your message...";
      feedback.className = "mt-3";
      sendFormData(formData, function (success) {
        sendBtn.disabled = false;
        if (success) {
          feedback.textContent = "Thank you, " + formData.name + "! Your message has been sent.";
          feedback.className = "mt-3 msg-success";
          playSound(soundNotes.success);
          contactForm.reset();
          currentStep = 1;
          showStep(currentStep);
        } else {
          feedback.textContent = "Sorry, the message could not be sent. Please check your internet connection and try again.";
          feedback.className = "mt-3 msg-error";
          playSound(soundNotes.error);
        }
      });
    });
    showStep(currentStep);
    languageHooks.push(function () {
      showStep(currentStep);
    });
  }
  const languageSelect = document.getElementById("languageSelect");
  const savedLanguage = getSavedLanguage();
  if (languageSelect) {
    languageSelect.value = savedLanguage;
    languageSelect.addEventListener("change", function () {
      applyLanguage(languageSelect.value);
      try {
        localStorage.setItem("princessLanguage", languageSelect.value);
      } catch (error) {
      }
      playSound(soundNotes.load);
    });
  }

  // Shared page controls (separate from the jQuery assignment tasks).
  function updateGreeting() {
    const hour = new Date().getHours();
    const key = hour < 12 ? "greet_morning" : hour < 18 ? "greet_afternoon" : "greet_evening";
    $("#greeting").text(t(key).replace("{name}", userName || t("dreamer")));
  }
  $("#nameForm").on("submit", function (event) {
    event.preventDefault();
    userName = $("#nameInput").val().trim();
    updateGreeting();
  });
  function updateThemeText() {
    $("#themeToggle").text(t(document.body.classList.contains("night") ? "day_btn" : "night_btn"));
  }
  try { document.body.classList.toggle("night", localStorage.getItem("princessTheme") === "night"); } catch (error) {}
  $("#themeToggle").on("click", function () {
    document.body.classList.toggle("night");
    updateThemeText();
    try { localStorage.setItem("princessTheme", document.body.classList.contains("night") ? "night" : "day"); } catch (error) {}
    playSound(soundNotes.theme);
  });
  const colors = ["#fff0f5", "#f1eafa", "#e9f7f4", "#fff6df"];
  let colorIndex = 0;
  $("#changeBgBtn").on("click", function () {
    document.body.style.backgroundColor = colors[colorIndex++ % colors.length];
  });
  function updateDateTime() {
    const locale = {en:"en-GB", ru:"ru-RU", kk:"kk-KZ"}[currentLang] || "en-GB";
    $("#dateTime").text(new Date().toLocaleString(locale));
  }
  updateGreeting(); updateThemeText(); updateDateTime();
  languageHooks.push(updateGreeting, updateThemeText, updateDateTime);
  if (document.getElementById("dateTime")) setInterval(updateDateTime, 1000);

  applyLanguage(savedLanguage);
  // Task 7: A temporary notification fades in and out
  let toastTimer;
  function showToast(message) {
    clearTimeout(toastTimer);
    $("#a6Toast").stop(true, true).text(message).fadeIn(200);
    toastTimer = setTimeout(function () {
      $("#a6Toast").fadeOut(400);
    }, 2500);
  }
  // Task 4: The progress bar follows the scroll position
  function updateProgress() {
    const height = $(document).height() - $(window).height();
    let percent = 0;
    if (height > 0) percent = $(window).scrollTop() / height * 100;
    percent = Math.max(0, Math.min(100, percent));
    $("#a6Progress").css("width", percent + "%");
  }
  // Task 5: Visible counters count up once
  function countNumbers() {
    $(".a6-counter").each(function () {
      const counter = $(this);
      const top = counter.offset().top;
      const screenTop = $(window).scrollTop();
      const screenBottom = screenTop + $(window).height();
      if (top < screenBottom && top + counter.outerHeight() > screenTop &&
          !counter.hasClass("a6-started")) {
        counter.addClass("a6-started");
        const target = Number(counter.attr("data-target"));
        const startedAt = performance.now();
        const timer = setInterval(function () {
          const progress = Math.min((performance.now() - startedAt) / 1500, 1);
          counter.text(Math.round(target * progress));
          if (progress === 1) clearInterval(timer);
        }, 30);
      }
    });
  }
  // Task 8: A fact is copied with a checkmark, tooltip, and notification
  let copyTimer;
  $("#a6Copy").on("click", function () {
    const text = $("#factArea").text().trim();
    if (!navigator.clipboard || !window.isSecureContext) {
      showToast("Open the HTTPS GitHub Pages website to copy.");
      return;
    }
    navigator.clipboard.writeText(text).then(function () {
      clearTimeout(copyTimer);
      $("#a6Copy").text("✓ Copied");
      $("#a6CopyTip").stop(true, true).text("Copied to clipboard!").show();
      showToast("Fact copied!");
      copyTimer = setTimeout(function () {
        $("#a6Copy").text("Copy Fact");
        $("#a6CopyTip").fadeOut(200);
      }, 2500);
    }, function () {
      showToast("Copy failed. Please allow clipboard access.");
    });
  });
  // Task 9: Card images load only when they enter the screen
  function loadImages() {
    const screenTop = $(window).scrollTop();
    const screenBottom = screenTop + $(window).height();
    $(".a6-lazy[data-src]").each(function () {
      const image = $(this);
      if (!image.is(":visible")) return;
      const top = image.offset().top;
      if (top < screenBottom && top + image.outerHeight() > screenTop) {
        image.attr("src", image.attr("data-src"));
        image.removeAttr("data-src");
      }
    });
  }
  // Tasks 4–5, 9: Scrolling and resizing update the features
  $(window).on("scroll resize", function () {
    updateProgress();
    countNumbers();
    loadImages();
  });
  $(window).on("load", updateProgress);
  // Tasks 1–5, 9: The page features are initialized
  filterPrincesses();
  countNumbers();
  loadImages();
  updateProgress();
});
