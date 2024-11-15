const names = ["Paul", "Reed", "Jimmy", "Samantha", "David", "Jake"]

const humanName = document.getElementById("Human_name")

const noButton = document.getElementById("no_button")

noButton.addEventListener("click", () => {
    // event.preventDefault();
    // console.log(names)
    // i = Math.random() * (names.length - 1);
    // const name = names[i]
    // humanName.textContent = name
    setHumanName()
})

function setHumanName(){
    const names = ["Paul", "Reed", "Jimmy", "Samantha", "David", "Jake", "Dan Jensen","Jazmin", "Kaiden","Vinnie","Anastasia","Preston","Albert" ,"Raees","Zainab" ,"Bilal","Ricky","Sienna","Jazmine" ,"Livia" ,"Valerie","Sam", "Megan" ,"Andrew", "Huw","Cordelia"];
    const humanName = document.getElementById("Human_name");
    const randomNumber = Math.floor(Math.random() * (names.length - 1));
    // const name = names[i]
    // console.log(name)
    console.log(randomNumber)
    humanName.textContent = names[randomNumber];
}

setHumanName()