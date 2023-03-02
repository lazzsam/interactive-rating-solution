let lis = Array.from(document.getElementsByTagName("li"));
let btn = document.getElementById("submit");
let ratingCard = document.getElementsByClassName("rating-card")[0];
let thankCard = document.getElementsByClassName("thank-card")[0];
let rate = document.getElementsByClassName("rate")[0];

// SWITCH CARD PART
// btn.addEventListener("click", () => {
//   ratingCard.classList.add("hidden");
//   thankCard.classList.remove("hidden");
// });

// Partie classe active
let previousClickedLi = null;

lis.forEach((li) => {
  li.addEventListener("click", () => {
    if (previousClickedLi) {
      previousClickedLi.classList.remove("active");
    }

    li.classList.add("active");

    previousClickedLi = li;
  });
});

// Partie affectation du li au span
btn.addEventListener("click", () => {
  if (!previousClickedLi) {
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    alert("You have to pick a number first !");
  } else {
    ratingCard.classList.add("hidden");
    thankCard.classList.remove("hidden");
    rate.textContent = previousClickedLi.textContent;
  }
});
