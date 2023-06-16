const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const delBtns = [];
var mainIndex = 0;

rightArrow.addEventListener("click", function () {
  mainIndex = mainIndex < 3 ? mainIndex + 1 : 3;
  slider.style.transform = "translate(" + mainIndex * -25 + "%)";
});

leftArrow.addEventListener("click", function () {
  mainIndex = mainIndex > 0 ? mainIndex - 1 : 0;
  slider.style.transform = "translate(" + mainIndex * -25 + "%)";
});

//add to favorites

const addBtn = document.getElementsByClassName("addB");

console.log(addBtn);
for (let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener("click", function () {
    //change the button ..
    this.style.backgroundColor = "black";
    this.textContent = "added to favorites";
    this.style.cursor = "default";
    this.disabled = true;

    //get the quote from main
    const section = this.closest("section");
    const div = section.querySelector("div");
    const quote = div.querySelector("p.quote");
    const author = div.querySelector("p.author");

    const cquote = quote.cloneNode(true);
    const cauthor = author.cloneNode(true);

    const divId = div.id;

    //add the quote to favorites
    const favContainer = document.getElementById("favC");

    const newSec = document.createElement("section");
    const newDiv = document.createElement("div");
    newDiv.id = "F" + divId[1];

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delB";
    newDiv.appendChild(cquote);
    newDiv.appendChild(cauthor);

    newSec.appendChild(newDiv);
    newSec.appendChild(delBtn);
    favContainer.appendChild(newSec);

    delBtns.push(delBtn);

    //delete from favorites
    for (let i = 0; i < delBtns.length; i++) {
      delBtns[i].addEventListener("click", function () {
        //get the id of quote
        const section = this.closest("section");
        const div = section.querySelector("div");
        const Id = div.id;

        //remove the section
        section.remove();

        //change the button of the main quote
        const dv = document.getElementById("Q" + Id[1]);
        const sec = dv.closest("section");

        const btn = sec.querySelector("button");
        btn.style.backgroundColor = "#3d2722";
        btn.textContent = "add to favorites";
        btn.style.cursor = "pointer";
        btn.disabled = false;
      });
    }
  });
}
