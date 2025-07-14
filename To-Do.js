let userInput = document.querySelector(".input");
console.log(userInput);
let addButton = document.querySelector(".Btn");
console.log(addButton);
let main = document.querySelector(".mainBox");
console.log(main);

addButton.addEventListener("click", ()=>{
     console.log("clicked");
   //let mainContainer = document.createElement("div");
    let container = document.createElement("div");
    container.style.display= "flex";
    container.style.alignItems = "center";
    let newinput = document.createElement("p");
    let newBtn = document.createElement("button");
    newBtn.innerText="Remove";
    newinput.classList.add("newPara");
    newBtn.classList.add("removebtn");

    container.appendChild(newinput);
    container.appendChild(newBtn);
    main.appendChild(container);
    newinput.style.marginTop="15px";
    newBtn.style.marginTop="15px";
   // mainContainer.appendChild(container);
   // mainContainer.style.gap= "20px";
    container.style.gap= "5px";
    let userValue = userInput.value;
    console.log(userValue);
    newinput.innerText= userValue;
    userInput.value="";
   /* let RemoveBtn = document.querySelector(".removebtn");
    console.log(RemoveBtn);

    RemoveBtn.addEventListener("click", ()=>{
        console.log("removed");
        newinput.classList.add("hidden");
        newBtn.classList.add("hidden"); */

    newBtn.addEventListener("click", () => {
        console.log("removed");
        container.remove(); 
    });
 });
