const flags = document.querySelectorAll(".lang-flag");
console.log(flags);

let lang = "en";
console.log(lang);

for (const flag of flags) {
  flag.addEventListener("click", () => {
    clearActiveClasses();
    flag.classList.add("active");
    console.log(flag.dataset.lang);
    lang = flag.dataset.lang;

    translate(lang);
  });
}

function clearActiveClasses() {
  flags.forEach((flag) => {
    flag.classList.remove("active");
  });
}

//--------------------------------

function translate(lang) {
  for (let key in langArr) {
    document.querySelector(".lng-" + key).innerHTML = langArr[key][lang];
  }
}

translate(lang);
