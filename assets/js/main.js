let ratings = document.querySelectorAll(".rating");
let ratingsContainer = document.querySelector(".ratings-container");
let sendBtn = document.querySelector("#send");
let panel = document.querySelector("#panel");
let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
  <img class="mb-2" src="assets/images/heart.png" alt="Heart" />
  <strong>Thank You</strong>
  <br>
  <strong>Feedback : ${selectedRating} </strong>
  <p>We'll Use Your Feedback To improve Our Customer Support</p>
  `;
});

function removeActive(e) {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
