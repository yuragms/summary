const flags = document.querySelectorAll(".lang-flag");
console.log(flags);

for (const flag of flags) {
  flag.addEventListener("click", () => {
    clearActiveClasses();
    flag.classList.add("active");
    console.log(flag.dataset.lang);
  });
}

function clearActiveClasses() {
  flags.forEach((flag) => {
    flag.classList.remove("active");
  });
}
