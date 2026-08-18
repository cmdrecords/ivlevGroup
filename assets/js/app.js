let btnNext = document.querySelector(".arrow-next");

let sliderCards = document.querySelectorAll(".slide");

btnNext.onclick = () => {
  sliderCards.forEach(
    (element) => (element.style.transform = `${element.style.transform} - 40%`)
  );
};
